import axios from "axios";
import { ApiResponse } from "../types";

const OLLAMA_API_URL = "http://localhost:11434/api/chat"; // Use relative path for proxy

export const sendMessage = async (message: string): Promise<ApiResponse> => {
  try {
    const requestBody = {
      model: "llama3.2", // Change to your model name if needed
      messages: [
        {
          role: "user", //"user" is a prompt provided by the user.
          content: message, //user prompt should be written here
        },
      ],
      stream: false, //returns as a full message rather than a streamed response
    };
    const response = await axios.post(OLLAMA_API_URL, requestBody);
    console.log("Ollama API response:", response.data.message);
    return response.data.message;
  } catch (error) {
    throw new Error("Error sending message to Ollama API: " + error);
  }
};
