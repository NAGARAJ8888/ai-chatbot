import { NextRequest, NextResponse } from "next/server";

import { ChatService } from "@/services/chat.service";
import { ChatRequest, ChatResponse } from "@/types/chat";

const chatService = new ChatService();

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();

    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        },
      );
    }

    const response = await chatService.ask(message);

    const data: ChatResponse = {
      success: true,
      response,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        success: false,
        response: "An error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}
