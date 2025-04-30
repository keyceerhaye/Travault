export interface Author {
  name: string;
  avatar: string | null;
}

export interface Comment {
  id: number;
  author: Author;
  content: string;
  createdAt: string;
}

export interface Post {
  id: number;
  author: Author;
  content: string;
  image: string | null;
  likes: number;
  comments: Comment[];
  timestamp: string;
  tokenEarned: boolean;
  hasLiked?: boolean;
}
