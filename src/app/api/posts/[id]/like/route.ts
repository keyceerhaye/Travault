import { NextResponse } from "next/server";

let postLikes: Record<number, number> = {};
let userLikes: Record<number, boolean> = {};

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id);

  // Toggle like status
  if (userLikes[postId]) {
    postLikes[postId] = (postLikes[postId] || 0) - 1;
    userLikes[postId] = false;
  } else {
    postLikes[postId] = (postLikes[postId] || 0) + 1;
    userLikes[postId] = true;
  }

  return NextResponse.json({
    likes: postLikes[postId] || 0,
    hasLiked: userLikes[postId],
  });
}
