# GrowthOS

**Unified Growth Platform for Indie & Small SaaS Teams**

Replace 5+ disconnected growth tools with one integrated platform sharing a unified contact graph, one event bus, and one SDK — for under $50/mo.

[Live Documentation](https://javajack.github.io/growthos/) | [Book a Consultation](https://topmate.io/rakeshwaghela)

---

## What Is GrowthOS?

Every SaaS team spends $15K-$260K/yr on 8-12 disconnected growth tools — plus an invisible $80K-$200K integration tax wiring them together. GrowthOS replaces them all:

| Dimension | Current Stack | GrowthOS |
|---|---|---|
| Monthly cost | $200 - $2,000/mo | $49 - $149/mo |
| Number of tools | 6-10 separate vendors | 1 platform |
| Integration effort | 20-40 engineer-weeks | Under 30 minutes |
| Identity resolution | Manual, fragmented | Automatic, unified |

## The Growth Loop

Every module maps to the SaaS growth loop — **Acquire > Activate > Engage > Monetise > Advocate** — where advocacy feeds back into acquisition, creating a compounding flywheel.

```
Acquire ──> Activate ──> Engage ──> Monetise ──> Advocate
   ^                                                 |
   └─────────── Advocacy drives acquisition ─────────┘
```

**Acquire** — Viral Waitlist, Gated Content, Social Proof Widget, Landing Page Builder
**Activate** — Onboarding Checklist, Welcome Sequences
**Engage** — Lifecycle Emails, Broadcast Emails, In-App Nudges, Surveys & NPS
**Monetise** — Coupon Engine, Upgrade Prompts, Stripe Integration
**Advocate** — Referral Engine, Tiered Referrals, Review Prompts, Employee Amplification

## Documentation Structure

This repository contains **79 pages** of product strategy, technical architecture, and API documentation:

```
docs/
├── Vision (4 pages)         — Problem, Solution, Target Customer, Market Sizing
├── Platform (4 pages)       — Architecture, Interoperability, Developer Experience, PostHog
├── Business (3 pages)       — Pricing, Competitive Landscape, Unit Economics
├── Phase 1 – MLP (6 pages) — Contact Graph, Referrals, Emails, Waitlist, Surveys
├── Phase 2 (14 pages)       — Segments, Nudges, Webhooks, Scoring, Stripe, etc.
├── Phase 3 (13 pages)       — A/B Testing, Journey Builder, WhatsApp, SMS, Push
├── Phase 4 (4 pages)        — AI Layer: Send-Time, Churn, Auto-Copy, Recommendations
├── Killed Features (1 page) — 13 discounted ideas with reasoning
├── Roadmap (3 pages)        — Growth Loop Map, Master Scorecard, Anti-Patterns
├── Event Catalog (14 pages) — Domain event dictionaries for 12 verticals
└── API Reference (8 pages)  — Two-API architecture, auth, endpoints, webhooks, SDKs
```

### Feature Prioritization Framework

Every feature is scored on four dimensions (1-5 each, max 20):

- **Pain** — How badly do indie SaaS teams need this?
- **Revenue** — Does it drive upgrades, retention, or expansion?
- **Build** — Can a small team ship it in weeks, not months?
- **Moat** — Does it deepen the platform's competitive advantage?

Score >= 15 → Phase 1 (MLP) | 12-14 → Phase 2 | 10-11 → Phase 3 | <= 9 → Kill

### Event Catalog

550+ events across 12 business domains — a ready-to-use dictionary for product instrumentation:

- Cross-Domain Universal (authentication, billing, support, consent, lifecycle signals)
- SaaS / B2B Software, E-Commerce / D2C, Fintech / Banking
- Insurance, EdTech, Healthcare, Marketplace, Media / Streaming
- Real Estate, HR Tech / Recruitment, Logistics / Supply Chain, Gaming

### API-First Architecture

Two-API design inspired by Customer.io, PostHog, Segment, and Braze:

- **Ingest API** (`ingest.growthos.io/v1`) — client-safe, high-volume event tracking
- **Management API** (`api.growthos.io/v1`) — server-side CRUD with scoped permissions

Includes OpenAPI 3.1 spec, HMAC webhook signing, cursor-based pagination, tiered rate limiting, and Web Components for embeddable widgets.

## Tech Stack

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) — documentation framework
- [Mermaid](https://mermaid.js.org/) — architecture and flow diagrams
- [Pagefind](https://pagefind.app/) — full-text search
- GitHub Pages — hosting via GitHub Actions

## Local Development

```bash
# Quick start
cd docs && npm install && npm run dev

# Or use the setup script (checks tools, installs deps, builds, runs preview)
chmod +x docs/local.sh && ./docs/local.sh
```

## Deployment

The site auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

Live at: **https://javajack.github.io/growthos/**

---

## About the Author

**Rakesh Waghela** — Product strategist and full-stack engineer with deep expertise in SaaS growth systems, API design, and platform architecture. This project demonstrates end-to-end product thinking: from market research and competitive analysis through feature prioritization, technical architecture, API specification, and domain event modeling.

### Skills Demonstrated in This Project

**Product Research & Strategy**
- Market sizing and TAM/SAM/SOM analysis for SaaS growth tooling
- Competitive landscape mapping across 20+ vendors (Customer.io, PostHog, Braze, Segment, ReferralCandy, Typeform, etc.)
- Feature triage framework scoring 49 features on Pain, Revenue, Build, and Moat
- Unit economics modeling with payback period and margin analysis
- Growth loop design (AAEMA) with feature-to-stage mapping

**Technical Architecture & API Design**
- Two-API architecture (Ingest + Management) with tenant isolation and row-level security
- OpenAPI 3.1 specification design covering 9 resource domains
- Event-driven architecture with 550+ domain-specific event schemas across 12 verticals
- Multi-tenant SaaS security model with scoped API keys, HMAC webhook signing, and JWT
- SDK and Web Component design for embeddable, framework-agnostic integration

**Documentation & Communication**
- 79-page technical documentation site with search, diagrams, and cross-linked references
- Audience-calibrated writing: from executive summaries to developer API references
- Mermaid-based architecture diagrams, interoperability maps, and flow visualizations

### Connect

- **X / Twitter** — [@webiyo](https://x.com/webiyo)
- **LinkedIn** — [rakeshwaghela](https://www.linkedin.com/in/rakeshwaghela)
- **GitHub** — [javajack](https://github.com/javajack)
- **Consulting** — [topmate.io/rakeshwaghela](https://topmate.io/rakeshwaghela)

---

## License

This project is proprietary. All rights reserved.
