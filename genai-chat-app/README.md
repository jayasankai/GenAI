# GenAI Chat Application

This project is a React application that allows users to interact with a GenAI model, specifically using the Ollama API. The application provides a chat interface where users can send messages and receive responses from the AI model.

## Project Structure

```
genai-chat-app
├── src
│   ├── App.tsx               # Main application component
│   ├── components
│   │   └── ChatWindow.tsx    # Chat interface component
│   ├── services
│   │   └── ollamaApi.ts      # API interaction functions
│   └── types
│       └── index.ts          # TypeScript interfaces
├── public
│   └── index.html            # Main HTML file
├── package.json               # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/jayasankai/genai-chat-app.git
   cd genai-chat-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Interactive chat interface
- Real-time communication with the GenAI model
- TypeScript for type safety and better development experience

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.