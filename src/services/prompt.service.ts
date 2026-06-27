import { SYSTEM_PROMPT } from "@/lib/prompt";
import { KnowledgeItem } from "@/types/knowledge";

export class PromptService {
  public build(
    question: string,
    context: KnowledgeItem[]
  ): string {

    const formattedContext = context
      .map(
        (item) => `
Category: ${item.category}

Question:
${item.question}

Answer:
${item.answer}
`
      )
      .join("\n-----------------------\n");

    return `
${SYSTEM_PROMPT}

Context

${formattedContext}

User Question

${question}
`;
  }
}