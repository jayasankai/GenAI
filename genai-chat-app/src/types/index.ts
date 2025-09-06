export type Message = {
  sender: 'user' | 'bot' | 'genai';
  text: string;
};

export interface ApiResponse {
    content: string;
}