# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**OpenClaw Setup Help** - A beginner-friendly Next.js site helping non-technical users set up OpenClaw, an open-source personal AI assistant that runs locally and integrates with chat apps (WhatsApp, Telegram, Slack, Discord, Signal, iMessage).

Target audience: Non-technical people who want an AI assistant but need help with setup.

## Development Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production (runs type checking)
npm run start     # Run production build
npm run lint      # Run ESLint
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based config via `@theme` in globals.css)
- **Runtime:** React 19

## Page Structure

Single-page app with anchor navigation:

1. **Hero** - Friendly intro explaining OpenClaw in simple terms
2. **#videos** - YouTube video carousel with setup tutorials
3. **#guides** - Step-by-step setup for Telegram, WhatsApp, Slack (tabbed interface)
4. **#security** - Security hardening tips categorized as Essential/Recommended/Advanced
5. **#resources** - Official docs and community guides (two-column layout)
6. **#help** - $2,000 premium consultation CTA

## Key Components

- `VideoCarousel` - Horizontal scrolling video cards with left/right buttons
- `SetupGuide` - Tabbed interface showing 5-step guides for each chat app

## Data Structures

```typescript
// YouTube video entries
const youtubeVideos: { id, title, channel, thumbnail, url, duration }[]

// Step-by-step setup guides
const telegramSteps, whatsappSteps, slackSteps: { step, title, description, tip }[]

// Security tips with priority levels
const securityTips: { title, description, level: "essential" | "recommended" | "advanced" }[]

// Resource links
const officialResources, communityResources: { title, url, description }[]
```

## Design Notes

- Non-technical language throughout (e.g., "smart helper you can text" not "AI agent")
- Emoji headers for section clarity
- Color-coded security levels (green=essential, blue=recommended, purple=advanced)
- "Easiest" badge on Telegram (recommended for beginners)
- Tips with 💡 icon in setup steps
