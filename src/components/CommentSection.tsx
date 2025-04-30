import React, { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import type { Comment } from '@/types/post'

interface CommentSectionProps {
  postId: number
  comments: Comment[]
  onAddComment: (content: string) => Promise<void>
}

export default function CommentSection({ postId, comments, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      await onAddComment(newComment)
      setNewComment('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="border-t border-gray-100">
      {/* Comment List */}
      <div className="px-4 py-3 space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <div className="flex-shrink-0 w-8 h-8 relative rounded-full bg-gray-100 overflow-hidden">
              {comment.author.avatar ? (
                <Image
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <UserCircleIcon className="w-full h-full text-gray-400" />
              )}
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm text-gray-900">
                  {comment.author.name}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="flex items-start space-x-3 p-4 bg-gray-50">
        <div className="flex-shrink-0 w-8 h-8">
          <UserCircleIcon className="w-full h-full text-gray-400" />
        </div>
        <div className="flex-1">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={1}
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={!newComment.trim() || isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
} 