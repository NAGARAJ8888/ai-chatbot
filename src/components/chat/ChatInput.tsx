"use client";

import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  loading,
}: ChatInputProps) {
  return (
    <div className="flex gap-3 border-t bg-white p-4">
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend();
          }
        }}
        placeholder="Ask an HR question..."
        className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        disabled={loading || !value.trim()}
        onClick={onSend}
        className="rounded-lg bg-blue-600 px-5 text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        <Send size={20} />
      </button>
    </div>
  );
}