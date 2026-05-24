
import React from 'react';
import { Manga } from '../types';

interface MangaCardProps {
  manga: Manga;
  onClick: (id: string) => void;
}

const MangaCard: React.FC<MangaCardProps> = ({ manga, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
      onClick={() => onClick(manga.id)}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-zinc-900 shadow-lg">
        <img 
          src={manga.coverUrl} 
          alt={manga.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {manga.isHot && (
          <span className="absolute left-2 top-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md uppercase">
            Hot
          </span>
        )}
        {manga.isNew && (
          <span className="absolute left-2 top-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md uppercase">
            New
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded text-sm transition-colors">
            Read Now
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-red-500 transition-colors">
          {manga.title}
        </h3>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{manga.author}</p>
        <p className="text-xs text-red-500 font-medium mt-1">{manga.latestChapter}</p>
      </div>
    </div>
  );
};

export default MangaCard;
