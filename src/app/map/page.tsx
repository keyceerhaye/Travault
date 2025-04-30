'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// Fix for default marker icons in Next.js
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

const touristSpots = [
  { id: 'rizal-park', lat: 14.5995, lng: 120.9842, title: 'Rizal Park' },
  { id: 'intramuros', lat: 14.5895, lng: 120.9742, title: 'Intramuros' },
  { id: 'national-museum', lat: 14.6095, lng: 120.9942, title: 'National Museum' }
]

export default function MapPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Tourist Spots</h1>
        
        <div className="h-[600px] w-full rounded-lg overflow-hidden">
          <MapContainer
            center={[14.5995, 120.9842]} // Manila coordinates
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {touristSpots.map((spot) => (
              <Marker
                key={spot.id}
                position={[spot.lat, spot.lng]}
                icon={customIcon}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{spot.title}</h3>
                    <button 
                      type="button"
                      className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
                    >
                      Claim NFT
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </main>
  )
} 