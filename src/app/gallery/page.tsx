'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { UserCircleIcon } from '@heroicons/react/24/outline'

// Mock NFT data
const nftTokens = [
  {
    id: 1,
    name: 'Eiffel Tower Token',
    location: 'Paris, France',
    owner: {
      name: 'alex_traveler',
      avatar: null
    },
    date: '2023-08-15'
  },
  {
    id: 2,
    name: 'Colosseum Memory',
    location: 'Rome, Italy',
    owner: {
      name: 'alex_traveler',
      avatar: null
    },
    date: '2023-08-22'
  },
  {
    id: 3,
    name: 'Statue of Liberty View',
    location: 'New York, USA',
    owner: {
      name: 'jamie_wanderlust',
      avatar: null
    },
    date: '2023-09-01'
  },
  {
    id: 4,
    name: 'Great Wall Trek',
    location: 'Beijing, China',
    owner: {
      name: 'taylor_journey',
      avatar: null
    },
    date: '2023-09-10'
  }
]

// Filter options for the gallery
const filterOptions = [
  { id: 'all', label: 'All Tokens' },
  { id: 'alex_traveler', label: '@alex_traveler' },
  { id: 'jamie_wanderlust', label: '@jamie_wanderlust' },
  { id: 'taylor_journey', label: '@taylor_journey' }
]

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredTokens = selectedFilter === 'all'
    ? nftTokens
    : nftTokens.filter(token => token.owner.name === selectedFilter)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">
            NFT Gallery
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedFilter === filter.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {filteredTokens.map((token) => (
              <div
                key={token.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                {/* NFT Image */}
                <div className="relative aspect-square bg-gradient-to-b from-blue-400 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">T</span>
                    </div>
                  </div>
                </div>

                {/* NFT Details */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{token.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{token.location}</p>
                  
                  <div className="flex items-center mt-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden">
                      {token.owner.avatar ? (
                        <Image
                          src={token.owner.avatar}
                          alt={token.owner.name}
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      ) : (
                        <UserCircleIcon className="w-full h-full text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      @{token.owner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 