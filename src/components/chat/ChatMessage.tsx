import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { ChatMessage as ChatMessageType } from "@/types/chat";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({
  message,
}: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="rounded-full bg-blue-600 p-2 text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-xl rounded-xl px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "border bg-white"
        }`}
      >
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>

      {isUser && (
        <div className="rounded-full bg-gray-700 p-2 text-white">
          <User size={18} />
        </div>
      )}
    </div>
  );
}