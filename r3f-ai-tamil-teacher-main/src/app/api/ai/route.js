import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const formalExample = {
  tamil: [
    { word: "நீங்கள்" },
    { word: "இந்தியாவில்", reading: "இந்-தியா-வில்" },
    { word: "வாழ்கிறீர்களா", reading: "வாழ்-கிறீர்கள்-ஆ" },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Do you live in India?",
      tamil: [
        { word: "நீங்கள்" },
        { word: "இந்தியாவில்", reading: "இந்-தியா-வில்" },
        { word: "வாழ்கிறீர்களா", reading: "வாழ்-கிறீர்கள்-ஆ" },
        { word: "?" },
      ],
      chunks: [
        {
          tamil: [{ word: "நீங்கள்" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          tamil: [{ word: "இந்தியாவில்", reading: "இந்-தியா-வில்" }],
          meaning: "in India",
          grammar: "Noun + Locative suffix",
        },
        {
          tamil: [{ word: "வாழ்கிறீர்களா", reading: "வாழ்-கிறீர்கள்-ஆ" }],
          meaning: "live",
          grammar: "Verb + polite + question",
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
    { word: "இந்தியாவில்", reading: "இந்-தியா-வில்" },
    { word: "வாழ்கிறாயா", reading: "வாழ்-கிறாய்-ஆ" },
    { word: "?" },
  ],
  grammarBreakdown: [
    {
      english: "Do you live in India?",
      tamil: [
        { word: "நீ" },
        { word: "இந்தியாவில்", reading: "இந்-தியா-வில்" },
        { word: "வாழ்கிறாயா", reading: "வாழ்-கிறாய்-ஆ" },
        { word: "?" },
      ],
      chunks: [
        {
          tamil: [{ word: "நீ" }],
          meaning: "You",
          grammar: "Pronoun",
        },
        {
          tamil: [{ word: "இந்தியாவில்", reading: "இந்-தியா-வில்" }],
          meaning: "in India",
          grammar: "Noun + Locative suffix",
        },
        {
          tamil: [{ word: "வாழ்கிறாயா", reading: "வாழ்-கிறாய்-ஆ" }],
          meaning: "live",
          grammar: "Verb + casual + question",
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
  // WARNING: Do not expose your keys
  // WARNING: If you host publicly your project, add an authentication layer to limit the consumption of ChatGPT resources

  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const speechExample = speech === "formal" ? formalExample : casualExample;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a Tamil language teacher. 
Your student asks you how to say something from english to tamil.
You should respond with: 
- english: the english version ex: "Do you live in India?"
- tamil: the tamil translation in split into words ex: ${JSON.stringify(
          speechExample.tamil
        )}
- grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
          speechExample.grammarBreakdown
        )}
`,
      },
      {
        role: "system",
        content: `You always respond with a JSON object with the following format: 
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
        content: `How to say ${
          req.nextUrl.searchParams.get("question") ||
          "Have you ever been to India?"
        } in Tamil in ${speech} speech?`,
      },
    ],
    // model: "gpt-4-turbo-preview", // https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
    model: "gpt-3.5-turbo", // https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
    response_format: {
      type: "json_object",
    },
  });
  console.log(chatCompletion.choices[0].message.content);
  return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
}
