import knowledge from "@/data/knowledge.json";

import { MAX_CONTEXT_RESULTS } from "@/lib/constants";
import { KnowledgeItem } from "@/types/knowledge";

import { normalize, tokenize } from "@/utils/text";

export class KnowledgeService {
  private readonly knowledgeBase = knowledge as KnowledgeItem[];

  private calculateScore(userQuestion: string, item: KnowledgeItem): number {
    let score = 0;

    const normalizedQuestion = normalize(userQuestion);
    const userWords = tokenize(normalizedQuestion);
    const questionWords = tokenize(item.question);

    // Keyword Match
    item.keywords.forEach((keyword) => {
      const normalizedKeyword = normalize(keyword);

      if (normalizedQuestion.includes(normalizedKeyword)) {
        score += 5;
      }
    });

    // Question Similarity
    userWords.forEach((word) => {
      if (questionWords.includes(word)) {
        score += 2;
      }
    });

    // Category Match
    if (normalizedQuestion.includes(item.category)) {
      score += 3;
    }

    return score;
  }

  public search(question: string): KnowledgeItem[] {
    return this.knowledgeBase
      .map((item) => ({
        item,
        score: this.calculateScore(question, item),
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_CONTEXT_RESULTS)
      .map((result) => result.item);
  }
}
