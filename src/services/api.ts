import { Post } from "@/types/post";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const api = {
  // Fetch all posts
  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  },

  // Like a post
  async likePost(postId: number): Promise<{ likes: number }> {
    const response = await fetch(`${API_URL}/posts/${postId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to like post");
    return response.json();
  },

  // Add a comment
  async addComment(postId: number, content: string): Promise<Comment> {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) throw new Error("Failed to add comment");
    return response.json();
  },
};
