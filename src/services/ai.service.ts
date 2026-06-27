import { ai } from "@/lib/gemini";


export class AIService {
  async generate(prompt: string): Promise<string> {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text ?? "No response generated.";
  }
}