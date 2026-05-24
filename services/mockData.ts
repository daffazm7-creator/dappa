
import { Manga, UpdateGroup } from '../types';

export const MOCK_MANGAS: Manga[] = [
  {
    id: '2',
    title: 'Jujutsu Kaisen',
    author: 'Gege Akutami',
    coverUrl: 'https://i.redd.it/5kn9hnxbfrq71.jpg',
    latestChapter: 'Chapter 261',
    updateDate: 'Today',
    isHot: true,
    description: 'In a world where cursed energy fuels the dark desires of humanity, Yuji Itadori swallows a legendary curse to save his friends. Now, he must navigate the dangerous world of Jujutsu Sorcerers to find all the fragments of Sukuna, the King of Curses.'
  },
  {
    id: '1',
    title: 'One Piece',
    author: 'Eiichiro Oda',
    coverUrl: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
    latestChapter: 'Chapter 1115',
    updateDate: 'Today',
    isHot: true,
    description: 'Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who\'ll never give up until he\'s claimed the greatest treasure on Earth—the Legendary One Piece!'
  },
  {
    id: '7',
    title: 'Kagurabachi',
    author: 'Takeru Hokazono',
    coverUrl: 'https://jumpg-assets.tokyo-cdn.com/secure/title/400006/title_thumbnail_portrait_list/401625.jpg?hash=bdYdg8cgz5wR3cba5cNaag&expires=2145884400',
    latestChapter: 'Chapter 34',
    updateDate: 'Today',
    isHot: true,
    description: 'Young Chihiro spends his days training under his father, a famous swordsmith. He seeks revenge using enchanted blades to hunt down those who destroyed his peaceful life.'
  },
  {
    id: '3',
    title: 'Sakamoto Days',
    author: 'Yuto Suzuki',
    coverUrl: 'https://static.wikia.nocookie.net/sakamoto-days/images/3/32/Volume_20.png/revision/latest?cb=20241221062352',
    latestChapter: 'Chapter 167',
    updateDate: 'Today',
    isNew: true,
    description: 'The ultimate assassin has retired, got married, and gained weight. But the underworld won\'t let him live in peace.'
  },
  {
    id: '4',
    title: 'Chainsaw Man',
    author: 'Tatsuki Fujimoto',
    coverUrl: 'https://cdn.myanimelist.net/images/manga/3/216464.jpg',
    latestChapter: 'Chapter 166',
    updateDate: 'Yesterday',
    isHot: true,
    description: 'Denji is a teenage boy living with a Chainsaw Demon named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting demon corpses with Pochita.'
  },
  {
    id: '5',
    title: 'Blue Box',
    author: 'Kouji Miura',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Blue_Box_manga_vol._1.jpg',
    latestChapter: 'Chapter 149',
    updateDate: 'Yesterday',
    isNew: true,
    description: 'Taiki Inomata is on the boys\' badminton team at sports powerhouse Eimei Junior and Senior High. He\'s in love with basketball player Chinatsu Kano.'
  },
  {
    id: '6',
    title: 'Spy x Family',
    author: 'Tatsuya Endo',
    coverUrl: 'https://i.pinimg.com/736x/7c/4d/9d/7c4d9d8d6609d445958c6a8c6bd283f8.jpg',
    latestChapter: 'Chapter 98',
    updateDate: 'May 24',
    isHot: true,
    description: 'The master spy codenamed <Twilight> has spent his days on undercover missions, all for the dream of a better world.'
  },
  {
    id: '8',
    title: 'Boruto: Two Blue Vortex',
    author: 'Masashi Kishimoto / Mikio Ikemoto',
    coverUrl: 'https://jumpg-assets.tokyo-cdn.com/secure/title/400004/title_thumbnail_portrait_list/311926.jpg?hash=a-WU30kANpvw1ZbjCNTeMA&expires=2145884400',
    latestChapter: 'Chapter 10',
    updateDate: 'May 22',
    isHot: true,
    description: 'A few years after the events of Boruto: Naruto Next Generations, the story continues with a high-stakes battle.'
  }
];

export const UPDATE_GROUPS: UpdateGroup[] = [
  {
    date: 'Monday, May 27',
    mangas: MOCK_MANGAS.slice(0, 4)
  },
  {
    date: 'Sunday, May 26',
    mangas: MOCK_MANGAS.slice(4, 6)
  },
  {
    date: 'Saturday, May 25',
    mangas: MOCK_MANGAS.slice(6, 8)
  }
];
