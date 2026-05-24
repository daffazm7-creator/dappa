
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UPDATE_GROUPS } from '../services/mockData';
import MangaCard from '../components/MangaCard';

const UpdatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'hot' | 'new'>('all');

  const handleMangaClick = (id: string) => {
    navigate(`/manga/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section / Banner featuring One Piece (400002) */}
      <div 
        className="mb-12 relative h-[350px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-zinc-800"
        onClick={() => handleMangaClick('1')}
      >
        <img 
          src="https://wallpapercave.com/wp/wp12816423.jpg"
          alt="One Piece Featured" 
          className="w-full h-full object-cover object-center brightness-[0.5] group-hover:scale-105 transition-transform duration-[3000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-4/5 z-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="bg-red-600 text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.2em] shadow-lg shadow-red-900/40">
              FEATURED TITLE
            </span>
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest border-l border-zinc-700 pl-4">
              DAPPA • MASIH PROTOTYPE GUIS
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-4 leading-none tracking-tighter italic uppercase drop-shadow-2xl">
            ONE <span className="text-red-600">PIECE</span>
          </h1>
          <p className="text-zinc-200 text-sm md:text-xl line-clamp-2 max-w-3xl font-medium leading-relaxed drop-shadow-lg">
            The world is entering a new era. Luffy and the Straw Hat crew set sail towards 
            the final frontier in Egghead Island. Witness the beginning of the legendary 
            Final Saga.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-white text-black font-black px-12 py-4 rounded-sm hover:bg-red-600 hover:text-white transition-all transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-2xl uppercase tracking-tighter">
              READ CHAPTER 1115
            </button>
            <button className="bg-zinc-950/80 backdrop-blur-xl text-white font-black px-12 py-4 rounded-sm hover:bg-zinc-800 transition-all border border-zinc-800 uppercase tracking-tighter">
              TITLES INFO
            </button>
          </div>
        </div>
        {/* Animated accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-transparent opacity-50" />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-10 border-b border-zinc-900 mb-12 overflow-x-auto pb-1 scrollbar-hide">
        {[
          { id: 'all', label: 'LATEST UPDATES' },
          { id: 'hot', label: 'HOTTEST' },
          { id: 'new', label: 'NEW ARRIVALS' }
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as any)}
            className={`pb-5 text-xs md:text-sm font-black tracking-[0.3em] whitespace-nowrap transition-all relative ${
              filter === f.id ? 'text-red-600' : 'text-zinc-500 hover:text-white'
            }`}
          >
            {f.label}
            {filter === f.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.7)]" />}
          </button>
        ))}
      </div>

      {/* Grouped Content */}
      <div className="space-y-20">
        {UPDATE_GROUPS.map((group) => {
          const filteredMangas = group.mangas.filter(m => {
            if (filter === 'hot') return m.isHot;
            if (filter === 'new') return m.isNew;
            return true;
          });

          if (filteredMangas.length === 0) return null;

          return (
            <section key={group.date} className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="flex items-center gap-8 mb-10">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-4">
                  <span className="w-2.5 h-10 bg-red-600 rounded-sm shadow-[0_0_10px_rgba(220,38,38,0.3)]" />
                  {group.date}
                </h2>
                <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-900 to-transparent flex-1" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12">
                {filteredMangas.map((manga) => (
                  <MangaCard 
                    key={manga.id} 
                    manga={manga} 
                    onClick={handleMangaClick} 
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default UpdatesPage;
