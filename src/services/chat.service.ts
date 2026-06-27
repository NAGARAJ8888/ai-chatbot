import { DEFAULT_ERROR_MESSAGE } from "@/lib/constants";
import { AIService } from "./ai.service";
import { KnowledgeService } from "./knowledge.service";
import { PromptService } from "./prompt.service";

export class ChatService {
  constructor(
    private readonly knowledgeService: KnowledgeService = new KnowledgeService(),
    private readonly promptService: PromptService = new PromptService(),
    private readonly aiService: AIService = new AIService(),
  ) {}

  private getGreetingResponse(question: string): string | null {
    const message = question.trim().toLowerCase();

    const greetings = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ];

    if (greetings.includes(message)) {
      return `Hello! 👋 I'm your HR AI Assistant.

I can help you with:

• Leave Process
• Job Creation
• Payroll Basics
• Workforce Management

How can I assist you today?`;
    }

    if (["thanks", "thank you"].includes(message)) {
      return "You're welcome! Let me know if you have any other HR-related questions.";
    }

    if (["bye", "goodbye"].includes(message)) {
      return "Goodbye! Have a great day!";
    }

    return null;
  }

  public async ask(question: string): Promise<string> {
    const greeting = this.getGreetingResponse(question);

    if (greeting) {
      return greeting;
    }
    const context = this.knowledgeService.search(question);

    if (context.length === 0) {
      return DEFAULT_ERROR_MESSAGE;
    }

    const prompt = this.promptService.build(question, context);

    return this.aiService.generate(prompt);
  }
}
