export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-blue-600 p-2">
        🤖
      </div>

      <div className="rounded-xl border bg-white px-4 py-3 text-gray-500">
        Thinking...
      </div>
    </div>
  );
}