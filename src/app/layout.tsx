import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR AI Assistant",
  description: "AI-powered HR chatbot built with Next.js and LangChain",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}