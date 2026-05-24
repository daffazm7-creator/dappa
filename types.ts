
export interface Manga {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  latestChapter: string;
  updateDate: string;
  isHot?: boolean;
  isNew?: boolean;
  description?: string;
}

export interface UpdateGroup {
  date: string;
  mangas: Manga[];
}
