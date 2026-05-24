
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UpdatesPage from './pages/UpdatesPage';
import MangaDetailsPage from './pages/MangaDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-[#050505]">
          <Routes>
            <Route path="/" element={<UpdatesPage />} />
            <Route path="/manga/:id" element={<MangaDetailsPage />} />
            <Route path="*" element={<UpdatesPage />} />
          </Routes>
        </main>
        
        <footer className="bg-black py-12 border-t border-zinc-900 mt-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="bg-red-600 text-white font-black text-2xl px-3 py-1 italic tracking-tighter inline-block mb-4 uppercase">
                KOMIKU
              </div>
              <p className="text-zinc-500 text-sm max-w-sm">
                Website Baca Manga Prototype Yang Dibuat Oleh M Daffa Zainal Al Kahfi.
              </p>
            </div>
            <div className="flex gap-8 text-zinc-500 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-zinc-600 text-xs">
              © 2026 Komiku Platform. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
