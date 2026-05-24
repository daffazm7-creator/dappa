
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_MANGAS } from '../services/mockData';
import { getGeminiSummary } from '../services/geminiService';
import { Manga } from '../types';

const MangaDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [manga, setManga] = useState<Manga | null>(null);
  const [aiSummary, setAiSummary] = useState<string>("");
  const [isLoadingSummary, setIsLoadingSummary] = useState<boolean>(false);

  useEffect(() => {
    const foundManga = MOCK_MANGAS.find(m => m.id === id);
    if (foundManga) {
      setManga(foundManga);
    }
  }, [id]);

  const handleGenerateSummary = async () => {
    if (!manga) return;
    setIsLoadingSummary(true);
    const summary = await getGeminiSummary(manga.title, manga.latestChapter);
    setAiSummary(summary);
    setIsLoadingSummary(false);
  };

  if (!manga) return (
    <div className="min-h-screen flex items-center justify-center text-zinc-500">
      Loading manga details...
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/" className="text-zinc-400 hover:text-white flex items-center gap-2 mb-8 transition-colors group">
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Updates
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Cover Art */}
        <div className="w-full md:w-[350px] flex-shrink-0">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 sticky top-24">
            <img src={manga.coverUrl} alt={manga.title} className="w-full h-auto" />
            <div className="p-6 space-y-4">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                Read Chapter 1
              </button>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-lg transition-colors border border-zinc-700">
                Favorite
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight italic tracking-tighter uppercase">{manga.title}</h1>
            <p className="text-xl text-zinc-400 font-medium">{manga.author}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-zinc-900 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full border border-zinc-800 uppercase tracking-widest">Action</span>
            <span className="bg-zinc-900 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full border border-zinc-800 uppercase tracking-widest">Adventure</span>
            <span className="bg-zinc-900 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full border border-zinc-800 uppercase tracking-widest">Shonen</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">Synopsis</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {manga.description || "The story follows the incredible journey of characters seeking power, friendship, and truth in a world filled with challenges. Each chapter brings new revelations and heart-pounding action."}
            </p>
          </div>

          {/* AI Feature */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">AI Chapter Insight</h4>
                  <p className="text-xs text-indigo-300">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={handleGenerateSummary}
                disabled={isLoadingSummary}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-bold px-6 py-2 rounded-full transition-all"
              >
                {isLoadingSummary ? 'Analyzing...' : 'Analyze Latest'}
              </button>
            </div>
            
            {aiSummary ? (
              <p className="text-indigo-100/90 leading-relaxed italic bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/20">
                "{aiSummary}"
              </p>
            ) : (
              <p className="text-zinc-500 text-sm italic">Click analyze to get an AI-powered buzz summary for the latest chapter!</p>
            )}
          </div>

          {/* Chapters List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">Recent Chapters</h3>
            <div className="grid gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:bg-zinc-800 transition-colors cursor-pointer">
                  <span className="font-medium text-white italic">Chapter {1000 - i}</span>
                  <span className="text-xs text-zinc-500">May {28 - i}, 2024</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaDetailsPage;
