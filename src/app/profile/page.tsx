'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserCircleIcon, PhotoIcon, MapIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import EditProfileModal from '@/components/EditProfileModal'

interface UserData {
  username: string
  joinDate: string
  bio: string
  followers: number
  avatar: string | null
  recentTokens: Array<{
    id: number
    name: string
    image: string | null
  }>
}

// Mock user data
const initialUserData: UserData = {
  username: 'alex_traveler',
  joinDate: '01 Oct, 2023',
  bio: 'Digital nomad traveling the world. Collecting memories and NFTs!',
  followers: 23,
  avatar: null,
  recentTokens: [
    {
      id: 1,
      name: 'Eiffel Tower Token',
      image: null
    },
    {
      id: 2,
      name: 'Colosseum Memory',
      image: null
    }
  ]
}

const tabs = [
  { id: 'gallery', label: 'Your Gallery', icon: PhotoIcon },
  { id: 'travels', label: 'Your Travels', icon: MapIcon },
  { id: 'settings', label: 'Settings', icon: Cog6ToothIcon }
]

export default function Profile() {
  const [activeTab, setActiveTab] = useState('gallery')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [userData, setUserData] = useState<UserData>(initialUserData)

  const handleSaveProfile = async (data: {
    username: string
    bio: string
    avatar?: File | null
  }) => {
    // In a real app, you would upload the avatar and save the data to your backend
    // For now, we'll just update the local state
    setUserData(prev => ({
      ...prev,
      username: data.username,
      bio: data.bio,
      // In a real app, you would get the avatar URL from your backend after upload
      avatar: data.avatar ? URL.createObjectURL(data.avatar) : prev.avatar
    }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
              {userData.avatar ? (
                <Image
                  src={userData.avatar}
                  alt={userData.username}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserCircleIcon className="w-full h-full text-gray-400" />
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">@{userData.username}</h1>
                  <p className="text-sm text-gray-500">Joined {userData.joinDate}</p>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Edit Profile
                </button>
              </div>
              <p className="mt-4 text-gray-600">{userData.bio}</p>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-900">{userData.followers}</span>
                <span className="text-sm text-gray-500"> followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  activeTab === tab.id
                    ? 'bg-white border-blue-500 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-6 h-6 text-gray-600" />
                <span className="mt-2 text-sm font-medium text-gray-900">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Recent Tokens Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Tokens</h2>
            <Link 
              href="/gallery"
              className="text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              View all tokens
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {userData.recentTokens.map((token) => (
              <div
                key={token.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200"
              >
                {/* Token Image */}
                <div className="relative aspect-square bg-gradient-to-b from-blue-400 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">T</span>
                    </div>
                  </div>
                </div>

                {/* Token Name */}
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900">{token.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-6 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
          >
            Go to Gallery
          </Link>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
        initialData={{
          username: userData.username,
          bio: userData.bio,
          avatar: userData.avatar
        }}
      />
    </main>
  )
} 