import { Bot } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex items-center gap-3 border-b bg-white px-6 py-4">
      <div className="rounded-full bg-blue-600 p-2 text-white">
        <Bot size={22} />
      </div>

      <div>
        <h1 className="text-lg font-semibold">
          HR AI Assistant
        </h1>

        <p className="text-sm text-gray-500">
          Ask anything about HR policies
        </p>
      </div>
    </header>
  );
}