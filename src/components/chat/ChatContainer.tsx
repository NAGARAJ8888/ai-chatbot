"use client";

import { useEffect, useRef } from "react";

import { useChat } from "@/hooks/useChat";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatContainer() {
  const {
    input,
    setInput,
    messages,
    loading,
    sendMessage,
  } = useChat();

  const bottomRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  return (
    <div className="mx-auto flex h-[90vh] max-w-4xl flex-col overflow-hidden rounded-xl border bg-gray-50 shadow-lg">
      <ChatHeader />

      <div className="flex-1 space-y-5 overflow-y-auto p-6">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        loading={loading}
      />
    </div>
  );
}