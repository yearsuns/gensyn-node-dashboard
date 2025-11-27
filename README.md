**Language / 语言**: [English](#) | [中文](./README.zh.md)

# Gensyn Node Dashboard

A web dashboard for viewing Gensyn distributed computing network node information.

## Features

- 🔍 Search nodes by PeerId (supports multiple PeerIds)
- 📊 View node key metrics (participation, rewards, wins)
- 🌐 Multi-language support (12 languages: English, Chinese, Japanese, Korean, French, German, Spanish, Vietnamese, Ukrainian, Hindi, Russian, Turkish)
- 🎨 Tech-inspired UI design with glassmorphism effects

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.x
- **UI**: React 18+ (Client Components)
- **Blockchain**: viem + Multicall3
- **Styling**: Tailwind CSS v4
- **Internationalization**: Custom LanguageContext
- **Package Manager**: pnpm

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Install pnpm

```bash
npm install -g pnpm
# Or use corepack
corepack enable
corepack prepare pnpm@latest --activate
```

### Install Dependencies

```bash
pnpm install
```

### Configure Environment Variables

Create a `.env.local` file and fill in the configuration:

```bash
# Create .env.local file
touch .env.local
```

Edit `.env.local` file with the following configuration:

```env
# Gensyn Network RPC URL (required)
NEXT_PUBLIC_GENSYN_RPC_URL=https://rpc.gensyn.network

# Node Registry Contract Address (required)
NEXT_PUBLIC_NODE_REGISTRY_ADDRESS=0xYourContractAddress

# Multicall3 Contract Address (required)
NEXT_PUBLIC_MULTICALL3_ADDRESS=0xYourMulticall3Address
```

**Important**: 
- All environment variables are **required** and must be configured correctly for the application to run.
- All variables use the `NEXT_PUBLIC_` prefix for client-side access.
- All `NEXT_PUBLIC_` prefixed environment variables are injected into client code at build time.
- If environment variables are not configured, the application will display clear error messages on startup.

**Tip**: You can refer to the `.env.example` file in the project root as a configuration template.

### Start Development Server

```bash
pnpm dev
```

The application will start at `http://localhost:3000`.

## Development

### Code Quality

```bash
# Lint
pnpm lint

# Type check
pnpm type-check
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/                    # Next.js App Router pages
components/             # React components
  ui/                  # UI components
lib/                    # Utilities and libraries
  blockchain/          # Blockchain interaction logic
  utils/               # Utility functions
  i18n/                # Internationalization configuration
types/                 # TypeScript type definitions
```

## License

See [LICENSE](./LICENSE) file.
