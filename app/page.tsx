"use client";

import { useState, useRef } from "react";

// ============================================================================
// ICONS
// ============================================================================

function OpenClawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "w-12 h-12"} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// ============================================================================
// DATA - YOUTUBE VIDEOS
// ============================================================================

const youtubeVideos = [
  {
    id: "n1sfrc-RjyM",
    title: "OpenClaw Full Tutorial for Beginners",
    channel: "freeCodeCamp.org",
    duration: "55:00",
  },
  {
    id: "Qkqe-uRhQJE",
    title: "ClawdBot is the most powerful AI tool I've ever used",
    channel: "Alex Finn",
    duration: "18:42",
  },
  {
    id: "4zXQyswXj7U",
    title: "Set Up Your 24/7 AI Employee in 20 Minutes",
    channel: "Peter Yang",
    duration: "22:15",
  },
  {
    id: "MUDvwqJWWIw",
    title: "I Played with Clawdbot all Weekend - it's insane",
    channel: "Matthew Berman",
    duration: "24:18",
  },
  {
    id: "U8kXfk8enrY",
    title: "Clawdbot/OpenClaw Clearly Explained",
    channel: "Greg Isenberg",
    duration: "31:05",
  },
  {
    id: "UULGy-f6aE0",
    title: "OpenClaw Security-First Setup Guide",
    channel: "Kevin Stratvert",
    duration: "19:32",
  },
  {
    id: "kFwzPJZoZoc",
    title: "8 Practical Clawdbot Use Cases",
    channel: "Samin Yasar",
    duration: "27:44",
  },
  {
    id: "SaWSPZoPX34",
    title: "ClawdBot: The self-hosted AI Siri should have been",
    channel: "WeWebShare",
    duration: "16:20",
  },
  {
    id: "NZ1mKAWJPr4",
    title: "OpenClaw after 50 days: 20 real workflows",
    channel: "Velvet Shark",
    duration: "35:10",
  },
  {
    id: "GLwTSlRn6-k",
    title: "Why People Are Freaking Out About Clawdbot",
    channel: "Matt Wolfe",
    duration: "12:55",
  },
];

// ============================================================================
// DATA - STREAM 1: SETUP RESOURCES
// ============================================================================

const setupResources = [
  {
    title: "Official Getting Started Guide",
    url: "https://docs.openclaw.ai/start/getting-started",
    description: "The official step-by-step setup documentation",
    source: "docs.openclaw.ai",
    type: "official",
  },
  {
    title: "freeCodeCamp Full Tutorial",
    url: "https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/",
    description: "55-minute comprehensive video course by Kian",
    source: "freeCodeCamp.org",
    type: "video",
  },
  {
    title: "Multi-Channel Setup Guide",
    url: "https://lumadock.com/tutorials/openclaw-multi-channel-setup",
    description: "Connect WhatsApp, Telegram, Discord, and Slack",
    source: "LumaDock Tutorials",
    type: "guide",
  },
  {
    title: "Ollama Quick Start",
    url: "https://ollama.com/blog/openclaw-tutorial",
    description: "Single command setup with local models",
    source: "Ollama Blog",
    type: "guide",
  },
  {
    title: "Mac Mini Setup Guide",
    url: "https://www.sitepoint.com/how-to-set-up-openclaw-on-a-mac-mini/",
    description: "24/7 always-on AI assistant on Mac Mini",
    source: "SitePoint",
    type: "guide",
  },
  {
    title: "DigitalOcean 1-Click Deploy",
    url: "https://www.digitalocean.com/blog/technical-dive-openclaw-hardened-1-click-app",
    description: "Pre-hardened cloud deployment",
    source: "DigitalOcean Blog",
    type: "guide",
  },
  {
    title: "Troubleshooting Common Errors",
    url: "https://lumadock.com/tutorials/openclaw-troubleshooting-common-errors",
    description: "Fixes for the most frequent issues",
    source: "LumaDock Tutorials",
    type: "guide",
  },
  {
    title: "WhatsApp Integration",
    url: "https://www.marktechpost.com/2026/02/14/getting-started-with-openclaw-and-connecting-it-with-whatsapp/",
    description: "Detailed WhatsApp QR code setup",
    source: "MarkTechPost",
    type: "guide",
  },
];

const channelSetupGuides = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "💬",
    color: "emerald",
    steps: [
      "Install OpenClaw and run the initial setup wizard",
      "Navigate to Settings → Integrations → WhatsApp",
      "Click 'Connect WhatsApp' to generate a QR code",
      "Open WhatsApp on your phone → Settings → Linked Devices",
      "Tap 'Link a Device' and scan the QR code",
      "Wait for sync to complete (may take 1-2 minutes)",
      "Send a test message to yourself to verify connection",
    ],
    tips: [
      "Keep your phone connected to the internet for the first 24 hours",
      "WhatsApp Web sessions expire after 14 days of inactivity",
      "Use a dedicated phone number for best reliability",
    ],
    docUrl: "https://docs.openclaw.ai/integrations/whatsapp",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: "✈️",
    color: "blue",
    steps: [
      "Open Telegram and search for @BotFather",
      "Send /newbot and follow the prompts to create your bot",
      "Copy the API token BotFather gives you",
      "In OpenClaw, go to Settings → Integrations → Telegram",
      "Paste your bot token and click 'Connect'",
      "Start a chat with your new bot in Telegram",
      "Send /start to activate the connection",
    ],
    tips: [
      "Your bot can only respond to messages sent directly to it",
      "Add your bot to groups for team-wide access",
      "Telegram bots never expire and don't require phone connection",
    ],
    docUrl: "https://docs.openclaw.ai/integrations/telegram",
  },
  {
    id: "slack",
    name: "Slack",
    icon: "💼",
    color: "purple",
    steps: [
      "Go to api.slack.com/apps and click 'Create New App'",
      "Choose 'From scratch' and select your workspace",
      "Under 'OAuth & Permissions', add required scopes (chat:write, im:history, im:read)",
      "Install the app to your workspace",
      "Copy the 'Bot User OAuth Token' (starts with xoxb-)",
      "In OpenClaw, go to Settings → Integrations → Slack",
      "Paste your token and click 'Connect'",
      "Invite @YourBot to channels where you want it active",
    ],
    tips: [
      "Use Socket Mode for real-time responses without webhooks",
      "Create a dedicated #openclaw channel for testing",
      "Enterprise Grid requires admin approval for app installation",
    ],
    docUrl: "https://docs.openclaw.ai/integrations/slack",
  },
];

const setupUseCases = [
  {
    title: "Email Briefing Every Morning",
    description: "OpenClaw reads your inbox and sends a prioritized summary via Telegram before you wake up.",
    source: "Forward Future",
    url: "https://forwardfuture.ai/p/what-people-are-actually-doing-with-openclaw-25-use-cases",
  },
  {
    title: "Client Onboarding Automation",
    description: "New client signs → creates folder, sends welcome email, schedules kickoff, adds reminders.",
    source: "Hostinger",
    url: "https://www.hostinger.com/tutorials/openclaw-use-cases",
  },
  {
    title: "Meeting Transcription & Action Items",
    description: "Upload a recording, get structured output with decisions, tasks, owners, and deadlines.",
    source: "Kanerika",
    url: "https://kanerika.com/blogs/openclaw-usecases/",
  },
];

// ============================================================================
// DATA - STREAM 2: EXTENDING OPENCLAW
// ============================================================================

const extendingResources = [
  {
    title: "ClawHub Skills Registry",
    url: "https://github.com/openclaw/clawhub",
    description: "13,700+ community-built skills",
    source: "GitHub · openclaw/clawhub",
    stars: "8.2k",
    type: "official",
  },
  {
    title: "awesome-openclaw-skills",
    url: "https://github.com/VoltAgent/awesome-openclaw-skills",
    description: "5,400+ curated skills, #1 community resource",
    source: "GitHub · VoltAgent",
    stars: "12.4k",
    type: "collection",
  },
  {
    title: "openclaw-master-skills",
    url: "https://github.com/LeoYeAI/openclaw-master-skills",
    description: "339+ best skills, weekly updated",
    source: "GitHub · LeoYeAI",
    stars: "3.1k",
    type: "collection",
  },
  {
    title: "Lobster Workflow Shell",
    url: "https://github.com/openclaw/lobster",
    description: "Turn skills into composable pipelines",
    source: "GitHub · openclaw/lobster",
    stars: "5.7k",
    type: "tool",
  },
  {
    title: "Symphony - Autonomous Work",
    url: "https://github.com/openclaw/symphony",
    description: "Isolated implementation runs for teams",
    source: "GitHub · openclaw/symphony",
    stars: "4.2k",
    type: "tool",
  },
  {
    title: "youtube-skills",
    url: "https://github.com/ZeroPointRepo/youtube-skills",
    description: "YouTube transcripts, search, channel data",
    source: "GitHub · ZeroPointRepo",
    stars: "1.8k",
    type: "skill",
  },
  {
    title: "clawsec Security Suite",
    url: "https://github.com/prompt-security/clawsec",
    description: "Drift detection, audits, skill verification",
    source: "GitHub · prompt-security",
    stars: "2.3k",
    type: "security",
  },
  {
    title: "DenchClaw CRM",
    url: "https://github.com/denchclaw/denchclaw",
    description: "Local CRM with DuckDB and browser automation",
    source: "GitHub · denchclaw",
    stars: "1.5k",
    type: "tool",
  },
];

const extendingUseCases = [
  {
    title: "Multi-Agent Business Team",
    description: "4 agents: strategy (coordinates), dev (coding), marketing (research), business (pricing). Shared memory, different models.",
    source: "Sid Saladi",
    url: "https://sidsaladi.substack.com/p/openclaw-use-cases-35-real-ways-people",
  },
  {
    title: "Autonomous PR Review",
    description: "Review pull requests from your phone, run tests remotely, merge code when ready.",
    source: "Contabo Blog",
    url: "https://contabo.com/blog/openclaw-use-cases-for-business-in-2026/",
  },
  {
    title: "3AM Production Fix",
    description: "Error detected → OpenClaw identified root cause, applied fix, deployed — all before team woke up.",
    source: "UCStrategies",
    url: "https://ucstrategies.com/news/20-genius-openclaw-use-cases-people-are-using-right-now/",
  },
];

// ============================================================================
// DATA - STREAM 3: COST OPTIMIZATION
// ============================================================================

const costResources = [
  {
    title: "Cut API Costs by 90%",
    url: "https://lumadock.com/tutorials/openclaw-cost-optimization-budgeting",
    description: "Comprehensive guide to reducing token spend",
    source: "LumaDock Tutorials",
    type: "guide",
  },
  {
    title: "Spending Less Than $100/Month",
    url: "https://openclaws.io/blog/openclaw-cost-optimization-guide/",
    description: "Real-world cost breakdown and strategies",
    source: "OpenClaws.io Blog",
    type: "guide",
  },
  {
    title: "Ollama Local Models Setup",
    url: "https://lumadock.com/tutorials/openclaw-ollama-local-models-setup",
    description: "Run OpenClaw for free with zero API cost",
    source: "LumaDock Tutorials",
    type: "guide",
  },
  {
    title: "claw-llm-router",
    url: "https://www.linkedin.com/pulse/reducing-openclaw-token-costs-claw-llm-router-donn-felker-bqiqe/",
    description: "Smart model routing to cut costs",
    source: "LinkedIn · Donn Felker",
    type: "tool",
  },
  {
    title: "Official API Costs Reference",
    url: "https://docs.openclaw.ai/reference/api-usage-costs",
    description: "Understanding token usage and billing",
    source: "docs.openclaw.ai",
    type: "official",
  },
  {
    title: "Free Models for OpenClaw",
    url: "https://haimaker.ai/blog/best-free-models-for-openclaw/",
    description: "What actually costs nothing in 2026",
    source: "HAIMaker.ai Blog",
    type: "guide",
  },
  {
    title: "Token Optimization (97% Savings)",
    url: "https://insiderllm.com/guides/openclaw-token-optimization/",
    description: "Advanced techniques for power users",
    source: "InsiderLLM Guides",
    type: "guide",
  },
  {
    title: "OpenClaw with Ollama & Local",
    url: "https://clawnest.ai/blog/openclaw-ollama-local-models-guide",
    description: "Cut costs with local model fallback",
    source: "ClawNest.ai Blog",
    type: "guide",
  },
];

const costStrategies = [
  {
    title: "Model Tiering",
    description: "Don't use Claude Sonnet for everything. Route heartbeats and status checks to cheap models.",
    savings: "50-70%",
  },
  {
    title: "Ollama for Routine Tasks",
    description: "Local models (Qwen, Llama, Mistral) cost nothing. Route brainless tasks to kill $2-5/day in idle costs.",
    savings: "80-90%",
  },
  {
    title: "OpenRouter",
    description: "50-90% cheaper than direct API. Budget tier: Gemini Flash, Haiku 3.5 at $0.10-0.50/M tokens.",
    savings: "50-90%",
  },
  {
    title: "Context Management",
    description: "Limit context to 50K-100K instead of 400K default. Dump chat history before each task.",
    savings: "30-50%",
  },
];

const costUseCases = [
  {
    title: "$6 vs $150 for Same Task",
    description: "6-hour task with 14 sub-agents cost $6 using model tiering. Same task on Sonnet alone: $150.",
    source: "LumaDock",
    url: "https://lumadock.com/tutorials/openclaw-cost-optimization-budgeting",
  },
  {
    title: "$150 → $35/month",
    description: "Power user reduced average monthly cost by 75% through comprehensive optimization.",
    source: "InsiderLLM",
    url: "https://insiderllm.com/guides/openclaw-token-optimization/",
  },
  {
    title: "60-70% Local, Rest Cloud",
    description: "qwen3:32b handles reading files and simple code. Sonnet for thinking. Daily bill: $2-5 instead of $30-50.",
    source: "ClawNest",
    url: "https://clawnest.ai/blog/openclaw-ollama-local-models-guide",
  },
];

// ============================================================================
// DATA - STREAM 4: SECURITY
// ============================================================================

const securityResources = [
  {
    title: "Official Security Documentation",
    url: "https://docs.openclaw.ai/gateway/security",
    description: "Core security concepts and configuration",
    source: "docs.openclaw.ai",
    type: "official",
  },
  {
    title: "3-Tier Hardening Guide",
    url: "https://aimaker.substack.com/p/openclaw-security-hardening-guide",
    description: "Complete implementation guide",
    source: "AIMaker on Substack",
    type: "guide",
  },
  {
    title: "Docker Hardening for Production",
    url: "https://advenboost.com/en/openclaw-docker-hardening-your-ai-sandbox-for-production-2026/",
    description: "Container security best practices",
    source: "AdvenBoost",
    type: "guide",
  },
  {
    title: "Composio Security Controls",
    url: "https://composio.dev/content/secure-openclaw-moltbot-clawdbot-setup",
    description: "Docker hardening and credential isolation",
    source: "Composio.dev",
    type: "guide",
  },
  {
    title: "Nebius Architecture Guide",
    url: "https://nebius.com/blog/posts/openclaw-security",
    description: "Deep dive into security architecture",
    source: "Nebius Blog",
    type: "guide",
  },
  {
    title: "Hostinger VPS Hardening",
    url: "https://www.hostinger.com/support/how-to-secure-and-harden-openclaw-security/",
    description: "Step-by-step VPS security setup",
    source: "Hostinger Support",
    type: "guide",
  },
  {
    title: "slowmist Security Practice",
    url: "https://github.com/slowmist/openclaw-security-practice-guide",
    description: "Agent-facing security checklist",
    source: "GitHub · slowmist",
    type: "github",
  },
  {
    title: "clawsec Security Suite",
    url: "https://github.com/prompt-security/clawsec",
    description: "Drift detection, audits, skill verification",
    source: "GitHub · prompt-security",
    type: "github",
  },
];

const securityThreats = [
  {
    title: "CVE-2026-25253",
    description: "WebSocket RCE - unauthenticated host-level code execution in under 90 seconds. Patch: v2026.1.29+",
    severity: "critical",
  },
  {
    title: "CVE-2025-6514",
    description: "mcp-remote command injection. Without isolation, full host compromise.",
    severity: "high",
  },
  {
    title: "Malicious Skills",
    description: "Credential theft and RCE via community repos. Check VirusTotal reports on ClawHub.",
    severity: "high",
  },
  {
    title: "Prompt Injection",
    description: "Hidden instructions in emails, web pages, screenshots can hijack your agent.",
    severity: "medium",
  },
];

const securityUseCases = [
  {
    title: "Firecracker MicroVMs",
    description: "Each agent gets its own kernel. Cross-agent exploits become structurally impossible.",
    source: "Nebius",
    url: "https://nebius.com/blog/posts/openclaw-security",
  },
  {
    title: "Podman Rootless",
    description: "Container escapes land as unprivileged user. Blast radius limited to home directory.",
    source: "Contabo",
    url: "https://contabo.com/blog/openclaw-security-guide-2026/",
  },
  {
    title: "Gmail Read-Only Integration",
    description: "Assign read-only permissions when linking Gmail. Agent can triage but not send without approval.",
    source: "Geeky Gadgets",
    url: "https://www.geeky-gadgets.com/openclaw-setup-beginners-guide/",
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors -ml-6"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 rounded-full flex items-center justify-center text-white transition-colors -mr-6"
      >
        <ChevronRightIcon />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {youtubeVideos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-80 group"
          >
            <div className="relative rounded-xl overflow-hidden bg-neutral-800 aspect-video">
              {/* Actual YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all shadow-lg">
                  <PlayIcon className="w-7 h-7 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-medium text-white group-hover:text-claw-400 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{video.channel}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

type Stream = "setup" | "extending" | "cost" | "security";

function ResourceCard({ resource, accentColor }: { resource: { title: string; url: string; description: string; source?: string; type?: string; stars?: string }; accentColor: string }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 bg-neutral-800/30 border border-white/5 rounded-xl hover:border-${accentColor}-500/30 hover:bg-neutral-800/50 transition-all group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className={`font-medium text-white group-hover:text-${accentColor}-400 transition-colors`}>
            {resource.title}
            <ExternalLinkIcon />
          </div>
          <div className="text-sm text-neutral-400 mt-1">{resource.description}</div>
          {resource.source && (
            <div className="text-xs text-neutral-600 mt-1.5">
              📍 {resource.source}
            </div>
          )}
        </div>
        {resource.stars && (
          <div className="flex items-center gap-1 text-xs text-yellow-500 ml-2">
            <span>⭐</span>
            <span>{resource.stars}</span>
          </div>
        )}
      </div>
    </a>
  );
}

function UseCaseCard({ useCase }: { useCase: { title: string; description: string; source: string; url: string } }) {
  return (
    <a
      href={useCase.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
    >
      <h4 className="font-medium text-white group-hover:text-claw-400 transition-colors">{useCase.title}</h4>
      <p className="text-sm text-neutral-400 mt-1">{useCase.description}</p>
      <p className="text-xs text-neutral-600 mt-2">Source: {useCase.source}</p>
    </a>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function Home() {
  const [activeStream, setActiveStream] = useState<Stream>("setup");

  const streams = [
    { id: "setup" as Stream, name: "Setup", icon: "🚀", color: "claw" },
    { id: "extending" as Stream, name: "Extending", icon: "🧩", color: "purple" },
    { id: "cost" as Stream, name: "Cost Optimization", icon: "💰", color: "emerald" },
    { id: "security" as Stream, name: "Security", icon: "🔒", color: "red" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-claw-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-claw-500/20 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-claw-400 to-claw-600 shadow-lg shadow-claw-500/25">
              <OpenClawIcon className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-white">OpenClaw </span>
              <span className="bg-gradient-to-r from-claw-400 to-claw-500 bg-clip-text text-transparent">
                Setup Hub
              </span>
            </h1>

            <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-3">
              Your personal AI assistant that runs locally and works through WhatsApp, Telegram, Slack, and more.
            </p>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto mb-8">
              Setup guides, cost optimization, security hardening, and real use cases.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {streams.map((stream) => (
                <a
                  key={stream.id}
                  href={`#${stream.id}`}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all"
                >
                  <span className="mr-1.5">{stream.icon}</span>
                  {stream.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              📺 Video Tutorials
            </h2>
            <p className="text-neutral-400">
              Learn from the best creators on YouTube
            </p>
          </div>
          <VideoCarousel />
          <div className="text-center mt-6">
            <a
              href="https://openclaw-hub.com/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claw-400 hover:text-claw-300 text-sm font-medium"
            >
              Browse all tutorials on OpenClaw Hub
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Stream Navigation */}
      <section className="sticky top-0 z-20 bg-neutral-950/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {streams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setActiveStream(stream.id)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeStream === stream.id
                    ? "bg-claw-500 text-white shadow-lg shadow-claw-500/25"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="mr-1.5">{stream.icon}</span>
                {stream.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STREAM 1: SETUP */}
      <section id="setup" className={`py-16 ${activeStream !== "setup" ? "hidden" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              🚀 Setup Resources
            </h2>
            <p className="text-neutral-400">
              Everything you need to get OpenClaw running on your machine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {setupResources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} accentColor="claw" />
            ))}
          </div>

          {/* Channel Setup Guides */}
          <div className="mt-12 mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-claw-500 rounded-full" />
              Channel Setup Guides
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {channelSetupGuides.map((channel) => (
                <div
                  key={channel.id}
                  className={`p-6 bg-neutral-800/40 border border-white/5 rounded-2xl hover:border-${channel.color}-500/20 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{channel.icon}</span>
                    <h4 className="text-lg font-semibold text-white">{channel.name}</h4>
                  </div>

                  <ol className="space-y-2 mb-4">
                    {channel.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-${channel.color}-500/20 text-${channel.color}-400 text-xs flex items-center justify-center font-medium`}>
                          {i + 1}
                        </span>
                        <span className="text-neutral-300">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-neutral-500 font-medium mb-2">💡 Tips</p>
                    <ul className="space-y-1">
                      {channel.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-neutral-400 flex gap-2">
                          <span className="text-neutral-600">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={channel.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center text-sm text-${channel.color}-400 hover:text-${channel.color}-300 transition-colors`}
                  >
                    Official docs
                    <ExternalLinkIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-claw-500 rounded-full" />
              Real Use Cases
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {setupUseCases.map((useCase, i) => (
                <UseCaseCard key={i} useCase={useCase} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STREAM 2: EXTENDING */}
      <section id="extending" className={`py-16 bg-neutral-900/30 ${activeStream !== "extending" ? "hidden" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              🧩 Extending OpenClaw
            </h2>
            <p className="text-neutral-400">
              Skills, plugins, and tools to supercharge your AI assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {extendingResources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-neutral-800/30 border border-white/5 rounded-xl hover:border-purple-500/30 hover:bg-neutral-800/50 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GitHubIcon />
                    <span className="font-medium text-white group-hover:text-purple-400 transition-colors">
                      {resource.title}
                    </span>
                  </div>
                  {resource.stars && (
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <span>⭐</span>
                      <span>{resource.stars}</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-neutral-400 mt-2 ml-7">{resource.description}</div>
                <div className="text-xs text-neutral-600 mt-1.5 ml-7">📍 {resource.source}</div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Real Use Cases
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {extendingUseCases.map((useCase, i) => (
                <UseCaseCard key={i} useCase={useCase} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STREAM 3: COST OPTIMIZATION */}
      <section id="cost" className={`py-16 ${activeStream !== "cost" ? "hidden" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              💰 Cost Optimization
            </h2>
            <p className="text-neutral-400">
              Reduce your API costs by 50-90% with these strategies
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {costStrategies.map((strategy, i) => (
              <div key={i} className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{strategy.title}</h4>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                    {strategy.savings}
                  </span>
                </div>
                <p className="text-sm text-neutral-400">{strategy.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {costResources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} accentColor="emerald" />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              Real Savings Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {costUseCases.map((useCase, i) => (
                <UseCaseCard key={i} useCase={useCase} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STREAM 4: SECURITY */}
      <section id="security" className={`py-16 bg-neutral-900/30 ${activeStream !== "security" ? "hidden" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              🔒 Security Hardening
            </h2>
            <p className="text-neutral-400">
              Protect your data and infrastructure from threats
            </p>
          </div>

          {/* Known Threats */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4">⚠️ Known Vulnerabilities</h3>
            <div className="space-y-3">
              {securityThreats.map((threat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border ${
                    threat.severity === "critical"
                      ? "bg-red-500/10 border-red-500/30"
                      : threat.severity === "high"
                      ? "bg-orange-500/10 border-orange-500/30"
                      : "bg-yellow-500/10 border-yellow-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        threat.severity === "critical"
                          ? "bg-red-500/20 text-red-400"
                          : threat.severity === "high"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {threat.severity.toUpperCase()}
                    </span>
                    <span className="font-medium text-white">{threat.title}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-2">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {securityResources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} accentColor="red" />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              Security Implementations
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {securityUseCases.map((useCase, i) => (
                <UseCaseCard key={i} useCase={useCase} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Consultation */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-claw-950 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-claw-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            🤝 Need Personal Help?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Our experts will set up everything via video call and provide 30 days of support.
          </p>

          <div className="bg-neutral-800/50 border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-white">$2,000</span>
              <span className="text-neutral-500">one-time</span>
            </div>

            <ul className="space-y-2 text-left text-sm mb-6">
              {[
                "Video call setup session",
                "All chat apps configured",
                "Security hardening included",
                "Cost optimization setup",
                "30-day email support",
                "Money-back guarantee",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:help@openclawsetup.com?subject=OpenClaw%20Setup%20Help"
              className="block w-full py-3 bg-claw-500 hover:bg-claw-400 text-white font-semibold rounded-xl transition-all"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-claw-500 flex items-center justify-center">
                <OpenClawIcon className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium text-white text-sm">OpenClaw Setup Hub</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
              <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                OpenClaw.ai
              </a>
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Documentation
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://openclaw-hub.com/videos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Video Hub
              </a>
            </div>

            <div className="text-xs text-neutral-600">
              Independent site. Not affiliated with OpenClaw.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
