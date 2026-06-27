import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold">
          HR AI Assistant
        </h1>

        <p className="mx-auto max-w-xl text-lg text-slate-600">
          An AI chatbot that helps employees with
          Leave, Payroll, Recruitment and Workforce
          Management.
        </p>

        <Link
          href="/chat"
          className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Open Chat
        </Link>
      </div>
    </main>
  );
}