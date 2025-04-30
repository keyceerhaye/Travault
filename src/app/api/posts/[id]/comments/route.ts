import { NextResponse } from "next/server";
import type { Comment } from "@/types/post";

// This would typically come from a database
let comments: Record<number, Comment[]> = {};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id);
  return NextResponse.json(comments[postId] || []);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id);
  const { content } = await request.json();

  const newComment: Comment = {
    id: (comments[postId]?.length || 0) + 1,
    author: {
      name: "current_user", // In a real app, this would come from the authenticated user
      avatar: null,
    },
    content,
    createdAt: new Date().toISOString(),
  };

  if (!comments[postId]) {
    comments[postId] = [];
  }
  comments[postId].push(newComment);

  return NextResponse.json(newComment);
}
