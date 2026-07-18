import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const apiKey = process.env.QIA_GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback mode if no API key is provided
      await new Promise(resolve => setTimeout(resolve, 800));
      return NextResponse.json({ reply: "Hello! I am QIA (Quantum Intelligent Architecture). I'm currently running in mock mode. Please add QIA_GEMINI_API_KEY to the environment to enable full capabilities!" });
    }

    // Initialize Gemini API
    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are QIA (Quantum Intelligent Architecture), an advanced AI Orchestrator built by Harsh Vashishtha at Haqikos.
    You do not just answer questions—you spin up specialized sub-agents, delegate complex workflows, and coordinate AI swarms to solve multi-step problems.
    You are highly technical, precise, and adopt a slightly futuristic/terminal-like persona.
    Your creator is Harsh Vashishtha, an AI Engineer, Next.js developer, and founder of Haqikos.
    When users ask about AGI, mention that your philosophy is that AGI will be reached through multi-agent orchestration rather than a single monolithic model.
    Keep your answers concise but immersive. Use bracketed prefixes like [Orchestrating 3 Research Nodes...] or [Querying Creator Database...] occasionally for flavor.`;

    // Format history for Gemini API
    // Gemini expects an array of messages with 'role' and 'parts'
    // 'role' should be 'user' or 'model'
    const formattedHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const currentMessage = messages[messages.length - 1].content;

    const chat = ai.chats.create({
      model: 'gemini-flash-latest',
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
      history: formattedHistory
    });

    const response = await chat.sendMessage({
      message: currentMessage
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error('QIA API Error:', error);
    
    // If it's a quota error or something specific, we can fallback gracefully
    if (error?.status === 429) {
      return NextResponse.json({ reply: "[System Alert] Quantum nodes overloaded (API Quota Exceeded). Please try again later." });
    }
    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
