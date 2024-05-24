# AI-Tamil-Teacher

## Overview

**r3f-ai-tamil-teacher** is an innovative application designed to teach Tamil using a graphical interface powered by React Three Fiber (R3F). This project integrates OpenAI's GPT-3.5 Turbo for language translation and Azure Cognitive Services for text-to-speech functionality, creating an immersive and interactive learning experience.

## Features

- **Interactive 3D Graphics**: Utilizes React Three Fiber to create engaging and interactive 3D environments for teaching Tamil.
- **Language Translation**: Leverages OpenAI GPT-3.5 Turbo to translate and provide accurate Tamil language instructions.
- **Text-to-Speech**: Uses Azure Cognitive Services to convert text translations into natural-sounding speech.
- **User-friendly Interface**: Built with Next.js for seamless navigation and optimized performance.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React Three Fiber (R3F)**: A React renderer for Three.js, enabling 3D graphics in the web application.
- **Leva**: UI components for parameter control, enhancing the interactivity of the 3D elements.
- **Zustand**: State management library for managing the application state efficiently.
- **Azure Cognitive Services**: For text-to-speech conversion.
- **OpenAI GPT-3.5 Turbo**: For natural language processing and translation.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arulbenjaminchandru/r3f-ai-language-teacher-main.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd r3f-ai-tamil-teacher
   ```

3. **Install the dependencies:**

   ```bash
   yarn install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Azure Cognitive Services and OpenAI API keys:

   ```env
   AZURE_API_KEY=your_azure_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

5. **Run the development server:**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Scripts

- **Development**: `yarn dev` - Starts the development server.
- **Build**: `yarn build` - Builds the application for production.
- **Start**: `yarn start` - Starts the production server.
- **Lint**: `yarn lint` - Runs ESLint for code quality checks.

## Dependencies

- `@react-three/drei`: ^9.99.3
- `@react-three/fiber`: ^8.15.16
- `leva`: ^0.9.35
- `microsoft-cognitiveservices-speech-sdk`: ^1.35.0
- `next`: ^14.2.3
- `openai`: ^4.28.0
- `react`: ^18
- `react-dom`: ^18
- `three`: ^0.161.0
- `zustand`: ^4.5.1

## DevDependencies

- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.1.0
- `postcss`: ^8
- `tailwindcss`: ^3.3.0

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Special thanks to the developers of React Three Fiber, OpenAI, and Azure Cognitive Services for their incredible tools and APIs.

---

Feel free to modify this README file to better suit your project's needs. Happy coding!
