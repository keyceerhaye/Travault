# Travault

A modern web-based social media platform for travelers to collect and share location-based NFTs.

## Features

- Home feed with tourist check-in posts and earned tokens
- Interactive map showing tourist attractions with NFT claiming
- NFT gallery for showcasing collected tokens
- User profiles with activity history
- Web3 wallet integration (MetaMask, WalletConnect, etc.)

## Tech Stack

- Next.js with TypeScript
- Tailwind CSS for styling
- RainbowKit + Wagmi for wallet connection
- Leaflet.js for interactive maps
- Polygon blockchain network
- IPFS/NFT.storage for NFT metadata

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/travault.git
cd travault
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your WalletConnect project ID:

```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Home page
│   ├── map/          # Map page
│   ├── gallery/      # NFT gallery
│   └── profile/      # User profile
├── components/       # Reusable components
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
