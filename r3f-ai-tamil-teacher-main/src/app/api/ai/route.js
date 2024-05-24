import OpenAI from "openai";
import Groq from "groq-sdk";

// const openai = new OpenAI({
//   apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
// });

const groq = new Groq({
  apiKey: process.env["GROQ_API_KEY"],
});

const formalExample = {
  tamil: [
    { word: "நீங்கள்" },
    { word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" },
    { word: "ஒரு", reading: "ஒரு" },
    { word: "முறையாவது", reading: "முறை-யாவது" },
    { word: "சென்றுள்ளீர்களா", reading: "சென்றுள்ளீர்கள்-ஆ" },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Have you ever been to India?",
      tamil: [
        { word: "நீங்கள்" },
        { word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" },
        { word: "ஒரு", reading: "ஒரு" },
        { word: "முறையாவது", reading: "முறை-யாவது" },
        { word: "சென்றுள்ளீர்களா", reading: "சென்றுள்ளீர்கள்-ஆ" },
        { word: "?" },
      ],
      chunks: [
        {
          tamil: [{ word: "நீங்கள்" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          tamil: [{ word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" }],
          meaning: "to India",
          grammar: "Noun + Dative suffix",
        },
        {
          tamil: [{ word: "ஒரு", reading: "ஒரு" }],
          meaning: "one",
          grammar: "Number",
        },
        {
          tamil: [{ word: "முறையாவது", reading: "முறை-யாவது" }],
          meaning: "time (ever)",
          grammar: "Noun + Emphatic suffix",
        },
        {
          tamil: [{ word: "சென்றுள்ளீர்களா", reading: "சென்றுள்ளீர்கள்-ஆ" }],
          meaning: "been",
          grammar: "Verb + Perfective + Polite + Question",
        },
        {
          tamil: [{ word: "?" }],
          meaning: "question",
          grammar: "Punctuation",
        },
      ],
    },
  ],
};

const casualExample = {
  tamil: [
    { word: "நீ" },
    { word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" },
    { word: "ஒரு", reading: "ஒரு" },
    { word: "முறையாவது", reading: "முறை-யாவது" },
    { word: "சென்றுள்ளாயா", reading: "சென்றுள்ளாய்-ஆ" },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Have you ever been to India?",
      tamil: [
        { word: "நீ" },
        { word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" },
        { word: "ஒரு", reading: "ஒரு" },
        { word: "முறையாவது", reading: "முறை-யாவது" },
        { word: "சென்றுள்ளாயா", reading: "சென்றுள்ளாய்-ஆ" },
        { word: "?" },
      ],
      chunks: [
        {
          tamil: [{ word: "நீ" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          tamil: [{ word: "இந்தியாவுக்கு", reading: "இந்தியா-வுக்கு" }],
          meaning: "to India",
          grammar: "Noun + Dative suffix",
        },
        {
          tamil: [{ word: "ஒரு", reading: "ஒரு" }],
          meaning: "one",
          grammar: "Number",
        },
        {
          tamil: [{ word: "முறையாவது", reading: "முறை-யாவது" }],
          meaning: "time (ever)",
          grammar: "Noun + Emphatic suffix",
        },
        {
          tamil: [{ word: "சென்றுள்ளாயா", reading: "சென்றுள்ளாய்-ஆ" }],
          meaning: "been",
          grammar: "Verb + Perfective + Casual + Question",
        },
        {
          tamil: [{ word: "?" }],
          meaning: "question",
          grammar: "Punctuation",
        },
      ],
    },
  ],
};

export async function GET(req) {
  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const speechExample = speech === "formal" ? formalExample : casualExample;

//   const chatCompletion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content: `You are a Tamil language teacher. 
// Your student asks you how to say something from English to Tamil.
// You should respond with: 
// - english: the English version, e.g., "Have you ever been to India?"
// - tamil: the Tamil translation split into words, e.g., ${JSON.stringify(speechExample.tamil)}
// - grammarBreakdown: an explanation of the grammar structure per sentence, e.g., ${JSON.stringify(speechExample.grammarBreakdown)}`,
//       },
//       {
//         role: "system",
//         content: `You always respond with a JSON object in the following format: 
//         {
//           "english": "",
//           "tamil": [{
//             "word": "",
//             "reading": ""
//           }],
//           "grammarBreakdown": [{
//             "english": "",
//             "tamil": [{
//               "word": "",
//               "reading": ""
//             }],
//             "chunks": [{
//               "tamil": [{
//                 "word": "",
//                 "reading": ""
//               }],
//               "meaning": "",
//               "grammar": ""
//             }]
//           }]
//         }`,
//       },
//       {
//         role: "user",
//         content: `How to say "${
//           req.nextUrl.searchParams.get("question") ||
//           "Have you ever been to India?"
//         }" in Tamil in ${speech} speech?`,
//       },
//     ],
//     model: "gpt-3.5-turbo",
//   });
const chatCompletion = await groq.chat.completions.create({
  messages: [
    {
      role: "system",
      content: `You are a Tamil language teacher. 
Your student asks you how to say something from English to Tamil.
You should respond with: 
- english: the English version, e.g., "Have you ever been to India?"
- tamil: the Tamil translation split into words, e.g., ${JSON.stringify(speechExample.tamil)}
- grammarBreakdown: an explanation of the grammar structure per sentence, e.g., ${JSON.stringify(speechExample.grammarBreakdown)}`,
    },
    {
      role: "system",
      content: `Do not respond anything other than the following JSON.Produce the correct JSON syntax. I should not get any syntax error. You always respond only with a JSON object in the following format: 
      {
        "english": "",
        "tamil": [{
          "word": "",
          "reading": ""
        }],
        "grammarBreakdown": [{
          "english": "",
          "tamil": [{
            "word": "",
            "reading": ""
          }],
          "chunks": [{
            "tamil": [{
              "word": "",
              "reading": ""
            }],
            "meaning": "",
            "grammar": ""
          }]
        }]
      }`,
    },
    {
      role: "user",
      content: `How to say "${
        req.nextUrl.searchParams.get("question") ||
        "Have you ever been to India?"
      }" in Tamil in ${speech} speech?`,
    },
  ],
  model: "llama3-70b-8192",
});

  console.log(chatCompletion.choices[0].message.content);
  return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
}
