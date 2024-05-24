# AI-Tamil-Teacher

## Overview

**r3f-ai-tamil-teacher** is an innovative application designed to teach Tamil using a graphical interface powered by React Three Fiber (R3F). This project integrates LlaMa 3 for language translation and creating an immersive and interactive learning experience.

## Features

- **Interactive 3D Graphics**: Utilizes React Three Fiber to create engaging and interactive 3D environments for teaching Tamil.
- **Language Translation**: Leverages LLaMa3 70B model to translate and provide accurate Tamil language instructions.
- **User-friendly Interface**: Built with Next.js for seamless navigation and optimized performance.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React Three Fiber (R3F)**: A React renderer for Three.js, enabling 3D graphics in the web application.
- **Leva**: UI components for parameter control, enhancing the interactivity of the 3D elements.
- **Zustand**: State management library for managing the application state efficiently.
- **LLaMa 3 70B**: For natural language processing and translation.

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Special thanks to the developers of React Three Fiber, LLaMa3 and Groq  for their incredible tools and APIs.

---

Feel free to modify this README file to better suit your project's needs. Happy coding!
