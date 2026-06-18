# Forgeflow ⚡

**Forge your app. Watch it flow.**

Forgeflow is an open-source, AI-native platform to **build, deploy, and host**
web apps from a prompt — a Lovable / Replit-style experience with **multiple LLM
providers** (OpenAI, Anthropic Claude, Google Gemini, and open models), hosted on
**AWS**, sold as a **SaaS** with a **prepaid + pay-as-you-go** billing model.

> **Core business principle:** *We never spend money before the user does.*
> Free tier runs on **bring-your-own-key** and free/open models. The moment a
> user pays, their prepaid wallet funds every downstream provider call —
> with a margin baked in. Zero out-of-pocket float, positive unit economics.

---

## What it does

1. **Prompt → App.** Users describe what they want; an AI agent scaffolds,
   edits, and iterates on a real codebase with a live preview.
2. **Multi-LLM.** Pick your model per task (like Cursor) — OpenAI, Claude,
   Gemini, or open-source models via a unified gateway.
3. **One-click deploy.** Push the generated app to our AWS cloud (containers,
   DB, domain, TLS) without leaving the editor.
4. **Usage-based billing.** Free allowance, then pay-as-you-go from a prepaid
   wallet. Hard stop at $0 balance — we are never exposed.

## Repo layout (pnpm + Turborepo monorepo)

```
forgeflow/
├── apps/
│   ├── web/                 # Next.js builder UI (editor, preview, chat, billing)
│   └── api/                 # NestJS backend (auth, projects, billing, deploy orchestration)
├── packages/
│   ├── llm-gateway/         # Unified multi-provider LLM proxy + token metering
│   ├── db/                  # Prisma schema (Postgres) — users, wallets, usage ledger
│   └── shared/              # Shared TypeScript types & utils
├── infra/
│   └── cdk/                 # AWS CDK (TypeScript) — VPC, ECS/Fargate, RDS, S3, etc.
├── docs/
│   ├── ARCHITECTURE.md      # System design & data flow
│   ├── BUSINESS_MODEL.md    # The $0-float / pay-as-you-go economics & guardrails
│   ├── TECH_STACK.md        # Every tool, why it's chosen, and its license
│   └── ROADMAP.md           # Milestones from MVP → scale
├── docker-compose.yml       # Local dev: Postgres + Redis + MinIO
└── .env.example
```

## Quick start (local dev)

```bash
pnpm install
cp .env.example .env          # fill in secrets (or leave BYOK for free tier)
docker compose up -d          # Postgres, Redis, MinIO
pnpm --filter @forgeflow/db prisma migrate dev
pnpm dev                      # runs web + api via Turborepo
```

## Status

🟡 **Scaffold + plan stage.** This commit lays down the architecture, business
model, tech-stack decisions, monorepo skeleton, database schema, and the
LLM-gateway interface. See `docs/ROADMAP.md` for what's next.

## License

Built **entirely on open-source / permissively-licensed** tooling. See
`docs/TECH_STACK.md` for the full license breakdown. Project license: MIT
(adjust as needed for commercial SaaS).
