
import { GoogleGenAI, Type } from "@google/genai";

export const getGeminiSummary = async (title: string, chapter: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a very brief, enticing 2-sentence summary or hype for the latest update of the manga "${title}" - ${chapter}. Make it sound exciting like a fan blog.`,
      config: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });

    return response.text || "No summary available at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The chapters are heating up! Check it out now on Komiku.";
  }
};
