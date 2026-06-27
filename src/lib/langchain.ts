import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AI_TEMPERATURE } from "./constants";

export const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
  model: "gemini-2.5-flash",
  temperature: AI_TEMPERATURE,
});