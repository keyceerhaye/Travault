import { NextResponse } from "next/server";
import type { Post } from "@/types/post";

// This would typically come from a database
let posts: Post[] = [
  {
    id: 1,
    author: {
      name: "alex_traveler",
      avatar: null,
    },
    content:
      "Finally made it to the Eiffel Tower! The view from the top is absolutely breathtaking. Claimed my first Travault token here!",
    image: null,
    likes: 156,
    comments: [],
    timestamp: "2024-04-08T10:00:00Z",
    tokenEarned: true,
    hasLiked: false,
  },
  {
    id: 2,
    author: {
      name: "world_explorer",
      avatar: null,
    },
    content:
      "Sunrise at Angkor Wat - a moment I'll never forget. The ancient temples have such an incredible energy!",
    image: null,
    likes: 203,
    comments: [],
    timestamp: "2024-04-08T09:00:00Z",
    tokenEarned: true,
    hasLiked: false,
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPost: Post = {
    id: posts.length + 1,
    ...body,
    likes: 0,
    comments: [],
    timestamp: new Date().toISOString(),
    hasLiked: false,
  };
  posts.push(newPost);
  return NextResponse.json(newPost);
}
