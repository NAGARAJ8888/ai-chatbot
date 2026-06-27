export interface KnowledgeItem {
  id: number;
  category: "leave" | "jobs" | "payroll" | "workforce";
  question: string;
  answer: string;
  keywords: string[];
}