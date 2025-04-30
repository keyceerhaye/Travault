'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HeartIcon, ChatBubbleLeftIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { api } from '@/services/api'
import type { Post, Comment } from '@/types/post'
import CommentSection from '@/components/CommentSection'

const PlaceholderImage = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 48 48">
      <path d="M28 8H12a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V20M28 8l8 8m-8-8v8h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const data = await api.getPosts()
      setPosts(data)
    } catch (err) {
      setError('Failed to load posts')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = async (postId: number) => {
    try {
      const { likes, hasLiked } = await api.likePost(postId)
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, likes, hasLiked }
          : post
      ))
    } catch (err) {
      console.error('Failed to like post:', err)
    }
  }

  const handleAddComment = async (postId: number, content: string) => {
    try {
      const newComment = await api.addComment(postId, content)
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ))
    } catch (err) {
      console.error('Failed to add comment:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Discover Travel Experiences
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center p-4">
                <div className="w-10 h-10 relative rounded-full bg-gray-100 overflow-hidden">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserCircleIcon className="w-full h-full text-gray-400" />
                  )}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">@{post.author.name}</p>
                </div>
              </div>

              <div className="relative aspect-[4/3]">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt="Travel photo"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <PlaceholderImage className="w-full h-full" />
                )}
              </div>

              <div className="p-4">
                <p className="text-gray-900 mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-gray-900"
                    >
                      {post.hasLiked ? (
                        <HeartIconSolid className="h-5 w-5 text-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5" />
                      )}
                      <span>{post.likes}</span>
                    </button>
                    <button 
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-gray-900"
                    >
                      <ChatBubbleLeftIcon className="h-5 w-5" />
                      <span>{post.comments.length}</span>
                    </button>
                  </div>
                  {post.tokenEarned && (
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Token Earned
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Comment Section */}
              {expandedPost === post.id && (
                <CommentSection
                  postId={post.id}
                  comments={post.comments}
                  onAddComment={(content) => handleAddComment(post.id, content)}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}