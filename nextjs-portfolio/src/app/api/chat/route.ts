import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback mode if no API key is provided
      let reply = "I am HV, the AI assistant. I'm currently running in mock mode. Please add an API key (GEMINI_API_KEY) to the backend to enable full conversation capabilities!";
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('cloud')) {
        reply = "Harsh is actively looking for Cloud Computing roles. He has experience with AWS, Vercel, serverless deployments, and distributed systems. He recently completed his MCA in AI & ML!";
      } else if (lowerMessage.includes('qia') || lowerMessage.includes('payqia')) {
        reply = "QIA and PayQIA are the core products built by Haqikos. Harsh engineered them using Next.js, LLM orchestration, and modern cloud infrastructure.";
      } else if (lowerMessage.includes('hire') || lowerMessage.includes('contact')) {
        reply = "You can contact Harsh via email at vashishthaharsh97@gmail.com, or through his LinkedIn profile at linkedin.com/in/theharshvashishtha.";
      } else if (lowerMessage.includes('skills')) {
        reply = "Harsh is skilled in React.js, Next.js, Python, TypeScript, Cloud Infrastructure, and Agentic AI Development.";
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      return NextResponse.json({ reply });
    }

    // Initialize Gemini API
    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are HV, an AI assistant representing Harsh Vashishtha. 
    Harsh is a Cloud & AI Engineer looking for cloud computing roles. He just completed his MCA in AI & ML. 
    He has built production apps like QIA and PayQIA (SaaS platforms). 
    His skills include Next.js, React, TypeScript, Python, AWS, Docker, Vercel, LLMs, and System Design.
    Keep your answers concise, professional, friendly, and helpful. Always advocate for Harsh's skills.`;

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
