const STOP_WORDS = new Set([
  "the",
  "are",
  "was",
  "were",
  "for",
  "how",
  "what",
  "when",
  "where",
  "who",
  "can",
  "does",
  "did",
]);

const SYNONYMS: Record<string, string> = {
  vacation: "leave",
  holiday: "leave",
  "time off": "leave",
  absent: "leave",

  salary: "payroll",
  paycheck: "payroll",
  payslip: "salary slip",

  joining: "onboarding",
  "new employee": "onboarding",

  resignation: "offboarding",
  exit: "offboarding",

  shift: "schedule",
};

export function normalize(text: string): string {
  let normalized = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .trim();

  Object.entries(SYNONYMS).forEach(([key, value]) => {
    normalized = normalized.replaceAll(key, value);
  });

  return normalized;
}

export function tokenize(text: string): string[] {
  return normalize(text)
    .split(/\s+/)
    .filter(
      (word) =>
        word.length > 1 &&
        !STOP_WORDS.has(word)
    );
}