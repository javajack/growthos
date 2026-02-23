# GrowthOS — Complete Phase Roadmap

## Every Feature. Every Score. Every Decision. No Shortcuts.

---

## Preamble: The Rules We're Playing By

This document applies the scoring framework established in the Brutal Feature Triage to **every feature** in the GrowthOS universe — the original 10 tools, the 35+ expanded modules, the cross-cutting platform capabilities, and features that emerged during competitive research. No feature is skipped. No score is rounded up to be kind.

**Scoring Framework (unchanged):**

| Dimension | What It Measures | Scale |
|---|---|---|
| **Pain Severity** | How much does the absence hurt an indie/small SaaS team? | 1 (nice-to-have) → 5 (losing money without it) |
| **Revenue Proximity** | Does it solve a problem people already pay for? | 1 (hard to monetise) → 5 (clear willingness to pay) |
| **Build Complexity** | Engineering effort + maintenance relative to small team (inverted: high = easy) | 1 (months of work) → 5 (days to build) |
| **Moat / Defensibility** | Compounding value? Hard to clone? | 1 (trivially copyable) → 5 (network effects or data moat) |

**Phase Thresholds:**
- **≥ 15/20** → Phase 1 (ship in months 1–4)
- **12–14** → Phase 2 (ship in months 5–9)
- **10–11** → Phase 3 (ship in months 10–15)
- **≤ 9** → Kill or Park Indefinitely

**Additional gate:** Even if a feature scores ≥ 15, it can be deferred if it has a hard dependency on another feature that isn't built yet. Dependencies are noted.

**Customer archetype:** Founder or growth lead at a 5–50 person indie/small SaaS company. Spending $200–$2,000/mo across 6–10 disconnected growth tools. One developer doing growth engineering part-time. Needs to see ROI within the first week.

---

## The Complete Scorecard: All 48 Features

### Master Scoring Table

| # | Feature | Pain | Rev | Build | Moat | **Total** | **Phase** | Category |
|---|---|---|---|---|---|---|---|---|
| 1 | Unified Contact Graph + Attribution | 5 | 4 | 2 | 5 | **16** | **P1** | Foundation |
| 2 | Referral Engine + Embeddable Widget | 5 | 5 | 4 | 4 | **18** | **P1** | Advocate |
| 3 | Lifecycle Email Sequences (Event-Triggered) | 5 | 5 | 3 | 4 | **17** | **P1** | Engage |
| 4 | Waitlist with Viral Mechanics | 4 | 4 | 5 | 3 | **16** | **P1** | Acquire |
| 5 | Contextual Surveys / NPS → Auto-Actions | 4 | 4 | 5 | 4 | **17** | **P1** | Engage |
| 6 | Segment Builder (Rule-Based) | 4 | 3 | 3 | 4 | **14** | **P2** | Platform |
| 7 | Gated Content / Lead Capture | 4 | 3 | 5 | 2 | **14** | **P2** | Acquire |
| 8 | Lightweight Onboarding Checklist | 4 | 3 | 3 | 3 | **13** | **P2** | Activate |
| 9 | UTM Ingestion + Attribution Dashboard | 4 | 3 | 4 | 3 | **14** | **P2** | Platform |
| 10 | Broadcast / Newsletter Emails | 4 | 4 | 4 | 2 | **14** | **P2** | Engage |
| 11 | Coupon / Promo Engine | 3 | 4 | 5 | 2 | **14** | **P2** | Monetise |
| 12 | Webhook Engine (Inbound + Outbound) | 4 | 2 | 4 | 3 | **13** | **P2** | Platform |
| 13 | Employee Social Amplification with Tracking | 3 | 4 | 4 | 3 | **14** | **P2** | Advocate |
| 14 | In-App Nudges (Banner/Modal/Tooltip) | 4 | 3 | 3 | 3 | **13** | **P2** | Engage |
| 15 | Review Prompt Orchestration | 3 | 3 | 5 | 3 | **14** | **P2** | Advocate |
| 16 | Tiered Referral Rewards (Extension of #2) | 3 | 4 | 5 | 4 | **16** | **P2**† | Advocate |
| 17 | Personalised Welcome Sequences (Branching) | 4 | 3 | 3 | 3 | **13** | **P2** | Activate |
| 18 | Unified Contact Scoring | 3 | 2 | 3 | 5 | **13** | **P2** | Platform |
| 19 | Simple Social Proof Widget | 2 | 2 | 5 | 2 | **11** | **P3** | Acquire |
| 20 | Cohort Analytics Dashboard | 3 | 3 | 2 | 4 | **12** | **P3**‡ | Platform |
| 21 | A/B Testing Framework (Cross-Module) | 3 | 3 | 2 | 4 | **12** | **P3**‡ | Platform |
| 22 | Journey Builder (Visual Canvas) | 3 | 4 | 1 | 5 | **13** | **P3**‡ | Platform |
| 23 | Multi-Channel Comms: WhatsApp | 4 | 4 | 2 | 3 | **13** | **P3**‡ | Foundation |
| 24 | Multi-Channel Comms: SMS | 3 | 3 | 3 | 2 | **11** | **P3** | Foundation |
| 25 | Multi-Channel Comms: Push Notifications | 3 | 3 | 3 | 2 | **11** | **P3** | Foundation |
| 26 | Milestone Celebration Cards (Wrapped-Style) | 1 | 2 | 3 | 5 | **11** | **P3** | Advocate |
| 27 | Ambassador / VIP Program Management | 2 | 3 | 3 | 4 | **12** | **P3** | Advocate |
| 28 | User-Generated Testimonial Collector | 2 | 2 | 4 | 3 | **11** | **P3** | Advocate |
| 29 | Smart Landing Page Builder | 3 | 3 | 2 | 2 | **10** | **P3** | Acquire |
| 30 | Upgrade Prompt Orchestration | 3 | 4 | 3 | 3 | **13** | **P3**‡ | Monetise |
| 31 | Stripe Integration (Billing Events Sync) | 4 | 3 | 4 | 3 | **14** | **P2** | Foundation |
| 32 | Slack Integration (Alerts/Notifications) | 3 | 2 | 5 | 2 | **12** | **P3** | Platform |
| 33 | AI: Send-Time Optimisation | 2 | 3 | 2 | 4 | **11** | **P4** | AI Layer |
| 34 | AI: Churn Prediction | 2 | 3 | 1 | 4 | **10** | **P4** | AI Layer |
| 35 | AI: Auto-Generated Campaign Copy | 2 | 2 | 3 | 2 | **9** | **P4** | AI Layer |
| 36 | AI: Module Recommendation Engine | 1 | 2 | 2 | 3 | **8** | **P4** | AI Layer |
| 37 | Paywalled Feature Gates / Trial Management | 3 | 2 | 3 | 2 | **10** | **Kill** | Monetise |
| 38 | Pricing Page Experiments | 2 | 2 | 2 | 1 | **7** | **Kill** | Monetise |
| 39 | Community Hub (Self-Hosted) | 2 | 1 | 1 | 2 | **6** | **Kill** | Engage |
| 40 | Contact Sync & Discovery | 2 | 2 | 2 | 3 | **9** | **Kill** | Activate |
| 41 | Interactive Product Tours | 3 | 2 | 1 | 2 | **8** | **Kill** | Activate |
| 42 | Changelog / What's New | 2 | 1 | 5 | 1 | **9** | **Kill** | Engage |
| 43 | Streaks & Activity Rewards / Badges / Gamification | 1 | 2 | 3 | 2 | **8** | **Kill** | Engage |
| 44 | Event / Webinar Engine | 2 | 2 | 2 | 2 | **8** | **Kill** | Engage |
| 45 | Missed-Call-to-WhatsApp Trigger | 3 | 3 | 3 | 1 | **10** | **Kill** | Acquire |
| 46 | QR Code Engine | 2 | 1 | 5 | 1 | **9** | **Kill** | Acquire |
| 47 | Link-in-Bio Page | 1 | 1 | 5 | 1 | **8** | **Kill** | Acquire |
| 48 | Contest / Giveaway Engine | 2 | 2 | 3 | 1 | **8** | **Kill** | Acquire |
| 49 | Magic Link / Passwordless Auth | 2 | 1 | 4 | 1 | **8** | **Kill** | Activate |

†P2 despite scoring 16 — depends on Phase 1 referral engine being live and having usage data to calibrate tiers.
‡P3 despite scoring 12–14 — hard dependency on multiple Phase 2 platform features (Segment Builder, Contact Scoring, Webhooks).

---

## PHASE 1 — The Minimum Lovable Product

**Timeline:** Months 1–4
**Team:** 3–5 engineers + 1 designer
**Goal:** Replace 5 tools with 1. First paying customers. Prove interoperability.

---

### P1-01: Unified Contact Graph + SDK

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 5 | 4 | 2 | 5 | **16** |

**What it is:** A single identity record per human being, regardless of how they entered the system — email capture, referral link click, waitlist signup, SDK event, API call. Every interaction attributed to a source. Deterministic merge on email/phone. Anonymous-to-known identity resolution when a visitor later provides an email.

**Pain it kills:** "Our Mailchimp says 4,200 contacts. Our app DB says 3,800 users. Our referral tool says 2,100 participants. We have no idea how many actual people we have, or which of these overlap." Every indie founder with more than one growth tool has this problem. They spend 3–5 hours/week manually reconciling user lists. Most give up and accept that their numbers are wrong.

**Why this score:**
- *Pain = 5:* Every growth metric is wrong without identity resolution. Conversion rates, channel attribution, campaign ROI — all based on fragmented data. Teams make bad decisions because they're measuring ghosts.
- *Revenue = 4:* Not directly monetisable (nobody pays for "a contact database"). But it's the reason people stay on the platform. Migrating a unified contact graph with 50K+ enriched records, merge history, and attribution chains is so painful that churn approaches zero. This is bundled into the foundation tier as the retention moat.
- *Build = 2:* The hardest thing to build well. Merge logic (deterministic email/phone match + anonymous→known resolution + conflict rules when two records have conflicting data), data model design, multi-tenant row-level security, and the SDK (JS + iOS + Android) that feeds it. This is 6–8 weeks of focused engineering for the MVP, with ongoing refinement. It's a 2/5 on ease, but it's the investment that makes everything else work.
- *Moat = 5:* Maximum defensibility. Once a tenant's user data flows through GrowthOS — with events from referrals, surveys, email opens, waitlist activity all enriching the same contact record — the switching cost is organic. No point solution can replicate this integrated data. And the graph gets more valuable with every additional module the tenant activates.

**What ships in Phase 1:**
- Contact data model (Postgres): `contacts` table with email, phone, app_user_id, anonymous_id, profile_json, source, utm_params, created_at, merged_into
- Deterministic merge rules: same email → merge, same phone → merge, anonymous→known transition → merge
- JavaScript SDK: `GrowthOS.init({tenantId, apiKey})`, `GrowthOS.identify({email, userId, traits})`, `GrowthOS.track(event, properties)`
- REST API: `POST /contacts`, `PATCH /contacts/:id`, `GET /contacts/:id`, `POST /events`
- Contact list UI in dashboard with search, filter, and merge history
- Multi-tenant isolation via `tenant_id` on every query

**What does NOT ship in Phase 1:**
- Probabilistic merge (fuzzy matching) — too complex, too many edge cases for V1
- Native iOS/Android SDKs — defer to Phase 2; most indie SaaS products are web-first
- Import/export (CSV upload) — build when first customer asks; manual onboarding via API is fine for early adopters
- Contact scoring — Phase 2 dependency

**Build-vs-buy decision:** Build from scratch. No open-source contact graph has multi-tenancy + merge logic + event attribution at the level we need. This is the core IP.

---

### P1-02: Referral Engine + Embeddable Widget

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 5 | 5 | 4 | 4 | **18** |

**What it is:** Per-user unique referral links, a configurable reward structure (what the referrer gets, what the referee gets, when the reward triggers), an embeddable in-app widget (Web Component), and a tracking dashboard showing referral chains, conversion rates, and pending/completed rewards.

**Pain it kills:** "We built referrals on a Google Sheet + Zapier + Stripe webhook. It took 3 weeks. It breaks every time we change our billing flow." Alternatively: "We pay Rewardful $99/mo and the referral data sits completely disconnected from our email tool, our analytics, and our user database. We can't even tell which referred users have the highest LTV."

**Why this score:**
- *Pain = 5:* Referrals are the #1 acquisition channel for capital-efficient startups. Dropbox, PayPal, Groww, CRED, Zerodha — all scaled on referrals. Every indie founder wants one. Most give up because building one is hard (unique link generation, tracking, fraud prevention, reward disbursement) and buying one is expensive ($49–$1,000/mo) and siloed.
- *Revenue = 5:* Direct willingness to pay — proven by Rewardful ($49–$99/mo), ReferralHero ($200/mo), Cello ($300–$1,000/mo). This is the #1 reason someone discovers and pays for GrowthOS. Price at $29/mo to undercut all competitors while delivering more value (because it's connected to the contact graph).
- *Build = 4:* Moderate complexity. Unique link generation, server-side conversion tracking, reward state machine (pending → confirmed → paid), and the embeddable widget. The widget is a Web Component (<growthOS-referral>) that renders inside the tenant's app with Shadow DOM isolation. ~3–4 weeks of engineering for MVP.
- *Moat = 4:* High but not maximum. The referral engine alone is replicable (Cello, Rewardful exist). The moat comes from integration: referral data flows into the contact graph, referral events trigger email sequences, NPS promoters auto-receive referral invites. This cross-module data loop is what no standalone referral tool can offer.

**What ships in Phase 1:**
- Unique referral link per contact (format: `{tenant-domain}/r/{code}`)
- Configurable reward: referrer reward, referee reward, trigger event (signup, purchase, custom event)
- Embeddable Web Component: `<growthOS-referral>` — shows user's unique link, share buttons (copy, WhatsApp, Twitter, email), referral count, and reward status
- SDK integration: widget auto-initialises when SDK detects a logged-in user with referral module enabled
- Dashboard: referral funnel (clicks → signups → conversions), per-referrer breakdown, pending/completed rewards
- Server-side conversion tracking via API + SDK events
- Basic fraud prevention: self-referral detection, IP-based duplicate detection

**What does NOT ship in Phase 1:**
- Tiered rewards (Refer 1 = X, Refer 5 = Y) — Phase 2 extension
- Automated payout (Stripe/Razorpay) — manual CSV export of reward recipients in V1; automated payout in Phase 2
- Referral leaderboard — Phase 2
- Double-sided reward with different reward types (credits vs. cash vs. extended trial) — V1 supports one reward type per campaign

**Build-vs-buy decision:** Build from scratch. No open-source referral engine has multi-tenancy + embeddable widgets + event-based conversion tracking. The widget and its connection to the contact graph is the entire value proposition.

---

### P1-03: Lifecycle Email Sequences (Event-Triggered)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 5 | 5 | 3 | 4 | **17** |

**What it is:** Multi-step email sequences triggered by events flowing through the GrowthOS event bus. The growth team configures sequences in the dashboard: "When `signup.completed` fires AND user has NOT triggered `onboarding.finished` within 3 days → send Email 1. If Email 1 opened but no action in 2 days → send Email 2. If `onboarding.finished` fires at any point → exit sequence."

**Pain it kills:** "Customer.io costs $150/mo for our volume. And we need Segment to pipe events to it. And our engineer spent 2 weeks wiring it up. For what? Three automated emails." Indie teams know automated emails drive 320% more revenue than manual campaigns. They just can't justify the stack complexity. If GrowthOS already has the contact graph and events (from the SDK integration for referrals), adding email sequences is zero incremental integration for the customer.

**Why this score:**
- *Pain = 5:* Email is still the highest-ROI channel (4x return vs. any other). Event-triggered emails (onboarding, trial expiry, re-engagement, referral nudge) are the most impactful growth lever. But setting them up today requires Segment → Customer.io → template design → event mapping. That's 3–4 integrations and 2–3 weeks of engineering. Most indie teams settle for manual newsletters because the automation stack is too complex.
- *Revenue = 5:* Replaces Customer.io ($100–$1,000/mo) and partially replaces Mailchimp ($30–$300/mo). Clear willingness to pay. Price at $29–$79/mo based on contact volume.
- *Build = 3:* Non-trivial. Requires: email template builder (drag-and-drop is Phase 3; MJML-based coded templates for Phase 1), sequence orchestrator (Temporal.io workflow: event trigger → delay → condition check → send or skip), email delivery integration (SES or Postmark), open/click tracking, unsubscribe handling. ~5–6 weeks of engineering.
- *Moat = 4:* Email sequences are commodity functionality. The moat is that these sequences react to events from ALL GrowthOS modules — a survey response, a referral completion, a waitlist position change — not just "user visited page X." This cross-module event vocabulary is impossible to replicate with standalone email tools.

**What ships in Phase 1:**
- Sequence builder in dashboard: trigger event, delay steps, condition branches (if/else on event or contact property), email send steps
- 5 pre-built sequence templates: Welcome, Onboarding nudge, Trial expiry, Re-engagement, Referral prompt
- MJML-based email templates with merge tags ({{contact.name}}, {{referral.link}}, {{waitlist.position}})
- Email delivery via SES (managed, cheapest at scale) or Postmark (better deliverability for transactional)
- Open/click tracking with events flowing back into the contact graph
- Unsubscribe handling + suppression list
- Basic analytics: sent, opened, clicked, bounced per step

**What does NOT ship in Phase 1:**
- Drag-and-drop visual email builder — MJML code templates are sufficient for early adopters; visual builder is Phase 3
- Visual journey canvas (multi-module orchestration) — Phase 3
- Send-time optimisation (AI) — Phase 4
- A/B testing on email variants — Phase 3

**Build-vs-buy decision:** Evaluate forking Laudspeaker (open-source Braze alternative, YC-backed) for the sequence orchestrator. If the code quality is good, fork it and adapt for GrowthOS's event model. If not, build on Temporal.io from scratch. Email delivery: buy (SES/Postmark) — no reason to build SMTP infrastructure.

---

### P1-04: Waitlist with Viral Mechanics

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 5 | 3 | **16** |

**What it is:** An embeddable waitlist form (`<growthOS-waitlist>`) with real-time position tracking, "share to move up" viral mechanics (each successful referral moves the sharer up N positions), and automatic invite drip (top N people on the waitlist get invited per day/week).

**Pain it kills:** "We used GetWaitlist for our launch. $40/mo. It captured 2,000 emails. Then we launched, exported a CSV, uploaded to Mailchimp, and lost all context about who referred whom, who was most engaged, who shared the most. The waitlist tool was useless after launch day." The deeper pain: waitlist tools are single-use. You pay for 2 months and churn. The data never connects to your growth stack.

**Why this score:**
- *Pain = 4:* (Not 5 because not every product has a waitlist phase. But for the products that do — and most SaaS launches do — it's critical.) Every major recent product launch used invite-only mechanics: ChatGPT, Notion, Linear, CRED, Superhuman.
- *Revenue = 4:* GetWaitlist ($20–$80/mo) and Prefinery ($49–$199/mo) prove willingness to pay. But the real revenue is downstream: the waitlist is the top-of-funnel. Someone signs up for the waitlist → becomes a contact in the graph → enters an email sequence → activates → becomes a referrer. The waitlist is the entry drug.
- *Build = 5:* Relatively simple. Embeddable form, position counter, share link generation (reuse referral link infrastructure), position recalculation on referral, invite drip cron. ~2 weeks of engineering.
- *Moat = 3:* Low standalone moat (GetWaitlist exists and is fine). The moat is integration: waitlist signup auto-creates a contact in the graph, auto-enters a welcome sequence, auto-generates a referral link. This zero-wiring integration is what standalone waitlist tools can't do.

**What ships in Phase 1:**
- Embeddable Web Component: `<growthOS-waitlist>` — signup form, position display, share link, "share to move up" CTA
- Dashboard: waitlist management (view all, search, manually invite, set auto-invite rate)
- Share-to-move-up mechanic: each referral moves sharer up configurable N positions
- Auto-invite drip: configurable rate (N invites per day)
- Waitlist → Contact auto-creation (integrated with contact graph)
- Waitlist events feed into email sequences (signup → welcome email, invited → activation email, position changed → notification)

**What does NOT ship in Phase 1:**
- Custom waitlist page hosting (users embed the widget on their own page)
- Waitlist analytics beyond basic (signups, shares, invite rate)
- Priority access rules beyond position (e.g., "invite all .edu emails first")

**Build-vs-buy decision:** Build from scratch. Reuses referral link infrastructure. The integration with the contact graph is the entire point.

---

### P1-05: Contextual Surveys / NPS → Auto-Actions

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 5 | 4 | **17** |

**What it is:** Lightweight 1–3 question in-app or email-embedded micro-surveys. NPS (0–10 score), CSAT (1–5), or custom questions. Triggered by events (post-purchase, after N days, on cancellation attempt). The critical differentiator: responses flow into the contact graph and trigger automated downstream actions.

**Pain it kills:** "Our NPS is 62 but I have no idea which users are detractors and what to do about them. The Typeform data sits in a Typeform dashboard that nobody checks." The real pain isn't collecting NPS — it's acting on it. A detractor should get a personal retention email within 24 hours. A promoter should get a referral invite within minutes. This closed loop requires connecting survey tool → email tool → referral tool → user database. Three integrations. Nobody does it.

**Why this score:**
- *Pain = 4:* Every SaaS team knows they should measure NPS. Most do it badly (annual survey blast) or not at all (too many tools to wire up). The pain isn't surveys — it's the gap between "collect score" and "do something about it."
- *Revenue = 4:* Typeform ($25–$83/mo), Delighted ($224/mo), Satismeter ($49–$199/mo). Willingness to pay is proven. But GrowthOS can bundle this with the platform rather than charging separately, making the total platform value higher than the sum of parts.
- *Build = 5:* Simple. Survey renderer (Web Component), response storage, NPS calculation, basic reporting. The auto-action triggers reuse the email sequence orchestrator. ~2 weeks of engineering.
- *Moat = 4:* The survey is commodity. The moat is the auto-action loop: NPS ≤ 6 → trigger retention email sequence. NPS ≥ 9 → auto-send referral invite + prompt app store review. NPS 7–8 → do nothing (passives aren't actionable). This closed loop is the #1 demo that sells the platform's interoperability story.

**What ships in Phase 1:**
- Embeddable Web Component: `<growthOS-survey>` — renders 1–3 questions contextually
- Email-embeddable survey link with one-click NPS scoring
- Dashboard: survey builder (NPS, CSAT, or custom 1–3 questions), response viewer, NPS trend chart
- Event triggers: configure when survey appears (after event X, after N days, on page Y)
- Auto-action rules: "If NPS ≤ 6 → add to segment 'at-risk' + trigger sequence 'Retention'" and "If NPS ≥ 9 → trigger sequence 'Referral Invite'"
- Response data flows into contact graph as properties (last_nps_score, last_survey_date)

**What does NOT ship in Phase 1:**
- Advanced survey logic (skip logic, piping, multi-page) — keep it micro (1–3 questions max)
- Survey analytics beyond NPS trend and response counts
- AI-powered response analysis

**Build-vs-buy decision:** Build from scratch. PostHog has basic surveys but no auto-action capability. The auto-action integration is the differentiator.

---

## PHASE 2 — Platform Maturity + Module Expansion

**Timeline:** Months 5–9
**Team:** 4–7 engineers + 1 designer
**Goal:** Deepen the platform layer (segments, scoring, webhooks, Stripe sync). Expand to adjacent use cases. Land mid-market customers (50–200 employees). Revenue target: $20K–$50K MRR.

**Trigger to begin Phase 2:** Phase 1 has ≥ 30 paying customers, ≥ 3 modules in active use per tenant, and NPS ≥ 40 from early adopters.

---

### P2-06: Segment Builder (Rule-Based)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 3 | 4 | **14** |

**What it is:** Visual rule-based segmentation: "Contacts where `last_nps_score ≥ 9` AND `referral_count = 0` AND `signup_source = organic`." Segments are dynamic (recomputed on a schedule or on-demand). Any module can target a segment: email sequences, referral campaigns, survey triggers.

**Pain it kills:** "I want to send a referral invite only to my happiest users who haven't referred anyone yet. In Customer.io, I'd need to set up a Segment filter, wait for the data sync, and hope the NPS data from Delighted made it over correctly. It takes 2 hours to set up what should take 2 minutes."

**Why this score:**
- *Pain = 4:* Targeting is the difference between spam and relevance. Without segments, every email goes to everyone. But indie teams can survive Phase 1 with manual filtering (the dashboard has search/filter). Segments become essential when contact volume exceeds 1,000 and multiple sequences are running.
- *Revenue = 3:* Not directly monetisable as a standalone feature. It's a platform capability that increases the value of every paid module (email sequences targeted to segments convert 3–5x better than blast emails).
- *Build = 3:* Moderate. Rules engine with AND/OR logic, contact property evaluation, scheduled recomputation, and a visual builder UI. ~4 weeks of engineering.
- *Moat = 4:* High defensibility. Segments span ALL modules — a single segment can reference NPS score (surveys), referral count (referrals), email engagement (sequences), waitlist position (waitlist), and signup source (attribution). No standalone tool has this cross-module data vocabulary.

**What ships in Phase 2:**
- Visual segment builder in dashboard: add conditions (contact properties, event history, module-specific data), AND/OR logic, preview count
- Dynamic segments: recomputed every 6 hours or on-demand
- Segment targeting in email sequences: "Send this sequence to segment X"
- Segment targeting in survey triggers: "Show this survey to segment Y"
- Pre-built segments: "Active users," "At-risk (NPS ≤ 6)," "Promoters (NPS ≥ 9)," "Never referred," "Waitlist VIPs (top 10%)"

**Dependency:** Requires Phase 1 contact graph, surveys, and referrals to have meaningful data to segment on.

---

### P2-07: Gated Content / Lead Capture

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 5 | 2 | **14** |

**What it is:** An embeddable email-gate component (`<growthOS-gate>`) that sits in front of a downloadable asset (PDF, report, template). User enters email → asset is delivered → contact is created in the graph with intent tags ("downloaded: fintech-report-2026").

**Pain it kills:** "We use ConvertKit to gate our PDFs. The emails go into ConvertKit's list. Then we manually export them to our CRM. The intent signal ('this person is interested in fintech') is lost in the transfer."

**Why this score:**
- *Pain = 4:* B2B SaaS standard. HubSpot built its $30B company on gated content. Every content marketing strategy needs email gates. The pain is real but well-served by existing tools (ConvertKit, Mailchimp landing pages).
- *Revenue = 3:* Not directly monetisable. Value is in the contact + intent data flowing into the graph.
- *Build = 5:* Very simple. Embeddable form → API call → create contact → deliver asset URL. ~1 week of engineering.
- *Moat = 2:* Low standalone moat. The value is integration: "downloaded fintech report" becomes a contact property that feeds into segment-targeted email sequences. The gate itself is trivially replicable.

**What ships in Phase 2:**
- Embeddable Web Component: `<growthOS-gate asset-url="..." intent-tag="...">` — email form, auto-delivery
- Dashboard: manage gated assets (upload file, set intent tag, view downloads)
- Contact auto-creation with intent tags
- Events feed into email sequences ("When `lead_magnet.downloaded` AND intent_tag = 'fintech' → trigger fintech welcome sequence")

**Decision rationale:** Scores 14. Ships in Phase 2 because it's trivially easy to build (1 week) and meaningfully enriches the contact graph with intent data. Only deferred from Phase 1 because indie founders can survive without it initially — they care more about referrals and email sequences first.

---

### P2-08: Lightweight Onboarding Checklist

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 3 | 3 | **13** |

**What it is:** An embeddable checklist component (`<growthOS-checklist>`) showing onboarding steps with completion state. Each step completion emits an event. Incomplete checklists trigger nudge emails.

**Pain it kills:** "30% of our signups never complete onboarding. We know this from analytics. But we can't do anything about it because our onboarding flow and our email tool are completely disconnected."

**Why this score:**
- *Pain = 4:* Onboarding drop-off is the #1 killer of SaaS growth. If users don't reach the "aha moment," they churn. Appcues ($249/mo), Pendo ($7K+/yr), and Userflow ($240/mo) serve this market — proving the pain is real and monetisable.
- *Revenue = 3:* We're not building Appcues. We're building a lightweight checklist that emits events. The revenue is indirect: customers who activate onboarding checklists see better retention, which reduces their churn from GrowthOS.
- *Build = 3:* Moderate. The checklist component itself is simple (render steps, track completion via SDK events). The harder part is making it configurable from the dashboard without code changes in the tenant's app. ~3 weeks of engineering.
- *Moat = 3:* Moderate. The unique play is tying checklist events to the platform: incomplete step → nudge email, all steps completed → trigger referral invite. But Appcues could theoretically integrate with Customer.io to do the same thing (though it would take 2 weeks of setup vs. zero setup on GrowthOS).

**What ships in Phase 2:**
- Embeddable Web Component: `<growthOS-checklist>` — configurable steps, progress bar, completion state
- Dashboard: define checklist steps, map step completion to events
- Auto-nudge: "If step 3 not completed within 48 hours → trigger email"
- Completion event triggers: "If all steps completed → trigger referral invite sequence"

**What we explicitly do NOT build:** Tooltip positioning, step-by-step product tours, hotspot indicators. That's Appcues territory and a massive engineering effort with no moat for us.

---

### P2-09: UTM Ingestion + Attribution Dashboard

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 4 | 3 | **14** |

**What it is:** The SDK auto-captures UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term) on first visit and stores them on the contact record. The dashboard shows a channel attribution report: which sources drive the most signups, referrals, conversions, and revenue.

**Pain it kills:** "We're spending $2,000/mo on ads across Google, Twitter, and LinkedIn. We have no idea which channel actually drives our best users. Google Analytics tells us which channel drives traffic. But it can't tell us which channel drives users who complete onboarding AND refer a friend AND have NPS ≥ 8."

**Why this score:**
- *Pain = 4:* Attribution is one of the most requested features by growth teams. Without it, ad spend is a black box. GA4 provides basic attribution but can't connect to downstream product behaviour (onboarding, NPS, referrals).
- *Revenue = 3:* Not directly monetisable as a standalone module. It's a platform capability that makes the dashboard essential.
- *Build = 4:* The SDK already captures first-page-view metadata (from Phase 1). Adding UTM parsing is ~2 days of code. The attribution dashboard is ~2 weeks of UI work.
- *Moat = 3:* Moderate. GA4 does basic attribution. The moat is that GrowthOS attribution goes end-to-end: UTM source → contact → onboarding completion → NPS score → referral activity → LTV. This full-funnel attribution is impossible with GA4 alone.

**What ships in Phase 2:**
- SDK: auto-capture UTM params on first page view, store on contact as `first_touch_utm` and `last_touch_utm`
- Dashboard: attribution report — contacts by source, conversion rates by source, referral rates by source
- Segment integration: create segments based on acquisition source ("All contacts from utm_source=linkedin")

---

### P2-10: Broadcast / Newsletter Emails

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 4 | 2 | **14** |

**What it is:** One-off email sends to a segment or the entire contact list. Product announcements, feature launches, monthly newsletters, promotional campaigns. Reuses the same email delivery infrastructure and templates as lifecycle sequences.

**Pain it kills:** "We use Mailchimp for newsletters ($50/mo) and Customer.io for automated emails ($150/mo). Two email tools. Two contact lists. Two template systems. Why?"

**Why this score:**
- *Pain = 4:* Every company sends broadcast emails. Having a separate tool for broadcasts vs. automated sequences is absurd but universal.
- *Revenue = 4:* Replaces Mailchimp for most indie teams. This is the other half of the email puzzle (Phase 1 = automated sequences, Phase 2 = manual broadcasts). Together, they fully replace 1–2 tools.
- *Build = 4:* Easy. Reuses email delivery infra, templates, and the contact graph from Phase 1. New UI: compose email, select segment or "all contacts," schedule or send immediately. ~2 weeks of engineering.
- *Moat = 2:* Low standalone moat. Sending emails is commodity. The value is one fewer tool to manage.

**What ships in Phase 2:**
- Dashboard: compose broadcast, select segment, schedule send time, preview
- Same template system as lifecycle sequences (MJML)
- Analytics: sent, opened, clicked, bounced, unsubscribed
- Segment-targeted sends: "Send this announcement only to contacts in segment 'Active Users'"

---

### P2-11: Coupon / Promo Engine

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 4 | 5 | 2 | **14** |

**What it is:** Generate unique, trackable discount codes with configurable rules: single-use vs. multi-use, expiry date, minimum purchase, segment restrictions ("only for contacts who joined via waitlist"). Coupons can be embedded in email sequences, referral rewards, or win-back campaigns.

**Pain it kills:** "Stripe handles our coupons but they're not connected to our growth tools. I can't send a 20% discount only to users who signed up via the waitlist AND haven't converted in 14 days."

**Why this score:**
- *Pain = 3:* Moderate. SaaS teams use coupons sparingly (annual billing discounts, win-back). E-commerce teams live on them. For our Phase 1 customer (indie SaaS), this is a nice-to-have, not a hair-on-fire problem.
- *Revenue = 4:* Expands platform into e-commerce territory. Coupon-driven campaigns are a proven revenue lever.
- *Build = 5:* Simple. Code generation, validation endpoint, usage tracking, expiry logic. ~1 week of engineering.
- *Moat = 2:* Low. Stripe already does coupons. The value is segment-awareness: coupons targeted by segment and embedded in sequences.

**What ships in Phase 2:**
- Dashboard: create coupon campaigns (code, discount type, rules)
- Merge tag for email sequences: `{{coupon.code}}` — dynamically inserts a unique code per recipient
- API endpoint for coupon validation (tenant's checkout calls this to verify)
- Analytics: coupons generated, redeemed, revenue attributed

---

### P2-12: Webhook Engine (Inbound + Outbound)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 2 | 4 | 3 | **13** |

**What it is:** Inbound webhooks: receive events from the tenant's backend (payment.completed, kyc.approved, subscription.cancelled) and route them into the GrowthOS event bus. Outbound webhooks: fire HTTP callbacks when GrowthOS events occur (referral.converted, survey.completed, contact.created).

**Pain it kills:** "GrowthOS can't see what happens in our backend. We can track front-end events via the SDK but server-side events (payment, KYC, subscription changes) are invisible."

**Why this score:**
- *Pain = 4:* Without server-side events, GrowthOS only sees half the picture. The most important events (payment, churn, KYC completion) happen server-side. This is a hard blocker for fintechs and e-commerce.
- *Revenue = 2:* Not directly monetisable. It's infrastructure that enables everything else.
- *Build = 4:* Straightforward. Inbound: authenticated POST endpoint that validates, normalises, and publishes to the event bus. Outbound: event listener that fires HTTP callbacks with retry logic. ~2 weeks of engineering.
- *Moat = 3:* Moderate. Makes the platform extensible. Once a tenant has 10+ server-side events flowing into GrowthOS, their email sequences and segments become deeply integrated with their core business logic. Switching cost increases significantly.

**What ships in Phase 2:**
- Inbound webhook endpoint: `POST /webhooks/inbound` with HMAC authentication
- Dashboard: configure outbound webhooks (select events, destination URL, retry policy)
- Event normalisation: map tenant's event names to GrowthOS canonical events
- Retry with exponential backoff for outbound webhook failures
- Webhook logs in dashboard for debugging

---

### P2-13: Employee Social Amplification with Tracking

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 4 | 4 | 3 | **14** |

**What it is:** The Head of Growth creates an amplification campaign in the dashboard: uploads assets (images, copy), selects target channels (LinkedIn, Twitter, Instagram). Employees receive a Slack notification (or email) with one-click access to pre-formatted posts. Each employee gets a unique tracked link. Dashboard shows who shared, where, and what engagement it drove (clicks, signups, conversions).

**Pain it kills:** "Our Head of Growth posts in #general every week: 'Hey everyone, please share this on LinkedIn!' Assets are in a Google Drive folder. Nobody knows who actually shared. Nobody can measure impact. It's a manual process with zero accountability."

**Why this score:**
- *Pain = 3:* Real problem but only for companies with 20+ employees. Our Phase 1 customer (5–15 person team) doesn't need this. It becomes critical when the company has 30–100 employees and coordinated social presence matters.
- *Revenue = 4:* GaggleAMP charges $500–$2,000/mo for this. Clear willingness to pay in the mid-market.
- *Build = 4:* Moderate. Campaign builder, Slack integration for distribution, unique link generation per employee (reuses referral tracking infra), engagement tracking. ~3 weeks.
- *Moat = 3:* Moderate. The unique play: top amplifiers are auto-identified and can be cross-referenced with the contact graph — "employees who drive the most signups" feeds into optimisation. But GaggleAMP does the core job adequately.

**What ships in Phase 2:**
- Dashboard: create amplification campaign, upload assets, write suggested copy, select channels
- Slack integration: notification with one-click access to campaign assets and pre-formatted posts
- Unique tracked link per employee per campaign
- Leaderboard: who shared, where, clicks, signups attributed
- Events feed into contact graph (employee contacts are enriched with amplification scores)

**Dependency:** Slack integration. Requires Slack app setup which adds onboarding friction, so this only ships when we have customers who explicitly ask for it.

---

### P2-14: In-App Nudges (Banner/Modal/Tooltip)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 3 | 3 | **13** |

**What it is:** Configurable in-app messages that the growth team creates in the dashboard and renders via the SDK. Three formats: top banner, center modal, and tooltip. Triggered by events, segments, or manual activation. "You have 3 unused referral invites!" shown as a banner when the user is in a high-engagement moment.

**Pain it kills:** "We want to tell active users about our referral program but email open rates are 22%. For users who are IN the app, an in-app nudge would have 90%+ visibility."

**Why this score:**
- *Pain = 4:* In-app messaging is 10x more effective than email for active users. PhonePe's contextual nudges drive cross-sell. Every SaaS tool uses in-app banners for feature announcements.
- *Revenue = 3:* Part of the platform, not separately priced. Increases the value of the SDK integration.
- *Build = 3:* Moderate. The SDK needs to fetch active nudge configurations, evaluate display conditions (segment membership, frequency caps), and render the appropriate format (banner/modal/tooltip) with correct positioning. Shadow DOM for style isolation. ~3 weeks.
- *Moat = 3:* Moderate. The moat is that nudges reference segments and react to cross-module data: "Show referral nudge to users in segment 'Promoters who haven't referred'."

**What ships in Phase 2:**
- SDK: nudge renderer with three formats (banner, modal, tooltip)
- Dashboard: create nudge (format, content, CTA, target segment, trigger, frequency cap)
- Event tracking: nudge_shown, nudge_clicked, nudge_dismissed

---

### P2-15: Review Prompt Orchestration

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 5 | 3 | **14** |

**What it is:** Trigger app store / G2 / Trustpilot review requests at the optimal moment. Not a blanket "Rate us!" — a targeted prompt to contacts who just had a successful outcome AND have NPS ≥ 8.

**Pain it kills:** "We blast 'Rate us on the App Store' to everyone. Our rating is 3.8 because unhappy users are more likely to respond. If we could only ask happy users, we'd be at 4.5+."

**Why this score:**
- *Pain = 3:* Nice-to-have for most indie teams. Becomes critical for mobile apps and B2B tools where ratings affect discoverability.
- *Revenue = 3:* Not directly monetisable. Indirect value: better ratings → more organic signups for the tenant → tenant grows → tenant stays on GrowthOS.
- *Build = 5:* Very simple. It's an email sequence or in-app nudge with a specific trigger: "When `nps.submitted` AND score ≥ 8 → send review prompt." Reuses existing nudge + sequence infrastructure. ~3 days of configuration work, not new engineering.
- *Moat = 3:* The moat is the NPS → review prompt pipeline, which is impossible without the survey integration.

**What ships in Phase 2:**
- Pre-built sequence template: "Review Prompt" — triggered by NPS ≥ 8, sends email with deep link to App Store/G2/Google
- Pre-built nudge template: in-app modal asking for review after successful action + high NPS
- Dashboard: configure review destinations (App Store URL, G2 URL, etc.)

**Note:** This barely qualifies as a "feature" — it's really a pre-built template/recipe that demonstrates the platform's interoperability. Ships in Phase 2 because it requires surveys (Phase 1) and nudges (Phase 2) to be live.

---

### P2-16: Tiered Referral Rewards

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 4 | 5 | 4 | **16** |

**Deferred to Phase 2 despite scoring 16.** Depends on Phase 1 referral engine being live with usage data to calibrate tier thresholds.

**What it is:** Extension of the basic referral engine: "Refer 1 = ₹100, Refer 5 = ₹500, Refer 10 = ₹2,000." Turns referrals from a one-shot action into an ongoing game. Top referrers become visible on a leaderboard. Automatic tier progression notifications.

**Pain it kills:** "Our flat referral reward doesn't motivate power referrers. The person who referred 50 users gets the same reward per referral as the person who referred 1."

**Why this score:**
- *Pain = 3:* Most indie teams are happy with flat rewards initially. Tiered rewards become important when the referral program matures and they want to identify/reward super-referrers.
- *Revenue = 4:* Increases the value of the referral module (justifies higher pricing tier). Groww's tiered referral rewards (₹25 base, up to ₹10,000) drove massive growth.
- *Build = 5:* Simple extension. Add tier configuration (thresholds + rewards) to the referral campaign model. Update reward calculation logic. Add tier progression notifications. ~1 week of engineering.
- *Moat = 4:* Tiered rewards + leaderboard + ambassador identification creates a self-reinforcing advocacy loop that standalone referral tools don't have.

**What ships in Phase 2:**
- Dashboard: configure reward tiers (threshold → reward) per referral campaign
- Auto-tier progression: contact automatically moves to next tier when threshold is met
- Tier progression notifications (email + in-app nudge)
- Referral leaderboard: top referrers visible in dashboard

---

### P2-17: Personalised Welcome Sequences (Branching)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 3 | 3 | **13** |

**What it is:** Enhancement of lifecycle email sequences with attribute-based branching. "If contact.signup_source = 'referral' → send Sequence A (highlight social features). If contact.signup_source = 'lead_magnet' AND contact.intent_tag = 'fintech' → send Sequence B (highlight fintech features). Else → send Sequence C (generic welcome)."

**Pain it kills:** "Every new user gets the same welcome email regardless of how they found us or what they're interested in. A referred user and a cold ad click get identical onboarding."

**Why this score:**
- *Pain = 4:* Personalised onboarding reduces time-to-value and churn. Generics feel spammy.
- *Revenue = 3:* Not separately monetisable. Increases sequence effectiveness → better retention for the tenant → lower churn for us.
- *Build = 3:* Moderate. The sequence orchestrator from Phase 1 already supports delays and condition checks. Adding contact-property branching (if/else on traits) extends the existing system. ~2 weeks.
- *Moat = 3:* Moderate. The branching is standard (Customer.io has it). The moat is that GrowthOS branches on data that spans modules: signup source + intent tag + waitlist position + referral status. Customer.io can only branch on data it has, which is a subset.

**What ships in Phase 2:**
- Sequence builder: add "Branch" step — condition on contact properties, segment membership, or event history
- Pre-built branching templates: "Welcome by Source" (referral vs. organic vs. ad vs. waitlist)
- Visual preview of branch paths in dashboard

---

### P2-18: Unified Contact Scoring

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 2 | 3 | 5 | **13** |

**What it is:** Every event from every module contributes to a single engagement/intent score per contact. Configurable scoring rules: email opened = +1, referral completed = +10, NPS ≥ 9 = +15, inactive 30 days = -20. The score is a first-class property on the contact record and can be used in segments, sequence triggers, and nudge conditions.

**Pain it kills:** "We don't know which users are our most engaged. We'd have to cross-reference email open rates, feature usage, referral activity, and NPS scores across 4 different tools."

**Why this score:**
- *Pain = 3:* Valuable but not urgent for small teams. They can eyeball their most engaged users at 500 contacts. At 5,000+ contacts, scoring becomes essential.
- *Revenue = 2:* Not directly monetisable. Platform capability.
- *Build = 3:* Moderate. Scoring engine that listens to the event bus, applies configurable point rules, and updates the contact score. Dashboard UI for rule configuration. ~3 weeks.
- *Moat = 5:* Maximum. The contact score is a unified metric that no standalone tool can compute because it spans all modules. Once the tenant's growth team starts using the score in segments and triggers, the dependency on GrowthOS is deep.

**What ships in Phase 2:**
- Scoring engine: configurable event → points mapping
- Default scoring template (pre-configured for common events)
- Score as a contact property: usable in segments, sequence triggers, nudge conditions
- Dashboard: score distribution chart, top/bottom contacts, scoring rule editor

---

### P2-31: Stripe Integration (Billing Events Sync)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 3 | 4 | 3 | **14** |

**What it is:** Bi-directional sync with Stripe. Inbound: Stripe webhooks (payment.succeeded, subscription.created, subscription.cancelled, invoice.paid) flow into GrowthOS as events on the corresponding contact. Outbound: GrowthOS can query Stripe for a contact's subscription status, LTV, and plan tier.

**Pain it kills:** "Our email sequences can't reference billing data. We can't send 'Your trial expires in 3 days' because GrowthOS doesn't know when the trial expires. We can't segment by plan tier because plan data lives in Stripe."

**Why this score:**
- *Pain = 4:* Critical for SaaS companies that monetise via subscriptions. Trial management, upgrade prompts, win-back campaigns, and churn analysis all need billing data. Without it, GrowthOS is blind to the most important business events.
- *Revenue = 3:* Not directly monetisable. But enabling billing-aware sequences dramatically increases the platform's stickiness.
- *Build = 4:* Moderate. Stripe webhook listener, event mapping, contact matching (by email), and a Stripe API client for querying subscription data. ~2 weeks.
- *Moat = 3:* Moderate. Once billing events flow into GrowthOS and power email sequences ("Your trial expires in 3 days — here's what you'll lose"), the integration becomes essential. But other platforms also integrate with Stripe.

**What ships in Phase 2:**
- Stripe webhook listener: automatic event ingestion (payment, subscription, invoice)
- Contact enrichment: plan_tier, subscription_status, trial_end_date, total_ltv added to contact properties
- Pre-built sequence templates: "Trial Expiry" (7-day, 3-day, 1-day countdown), "Payment Failed" (retry prompt), "Downgrade Win-Back"
- Segment builders: filter by plan_tier, subscription_status, LTV range

---

### Phase 2 Summary

| # | Feature | Score | Eng. Weeks | Revenue Impact | Key Dependency |
|---|---|---|---|---|---|
| 6 | Segment Builder | 14 | 4 | Platform value ↑ | Contact Graph (P1) |
| 7 | Gated Content / Lead Capture | 14 | 1 | Contact enrichment | Contact Graph (P1) |
| 8 | Onboarding Checklist | 13 | 3 | Retention ↑ | SDK (P1), Sequences (P1) |
| 9 | UTM Attribution Dashboard | 14 | 2 | Platform value ↑ | SDK (P1) |
| 10 | Broadcast / Newsletter Emails | 14 | 2 | Replaces Mailchimp | Email infra (P1) |
| 11 | Coupon / Promo Engine | 14 | 1 | E-commerce expansion | Segments (P2) |
| 12 | Webhook Engine | 13 | 2 | Server-side events | Event Bus (P1) |
| 13 | Employee Amplification | 14 | 3 | Mid-market revenue | Slack integration |
| 14 | In-App Nudges | 13 | 3 | SDK value ↑ | SDK (P1), Segments (P2) |
| 15 | Review Prompt Orchestration | 14 | 0.5 | Template/recipe only | Surveys (P1), Nudges (P2) |
| 16 | Tiered Referral Rewards | 16† | 1 | Referral module ↑ | Referrals (P1) |
| 17 | Personalised Welcome Branching | 13 | 2 | Sequence value ↑ | Sequences (P1) |
| 18 | Contact Scoring | 13 | 3 | Platform moat ↑ | Contact Graph (P1) |
| 31 | Stripe Integration | 14 | 2 | SaaS use case ↑ | Contact Graph (P1) |

**Total Phase 2 engineering: ~29.5 weeks.** With a 4–7 person team over 5 months (20 weeks), this is achievable with parallelisation. Critical path: Segment Builder first (blocks many others), then Webhooks (blocks server-side events), then everything else in parallel.

---

## PHASE 3 — Scale & Sophistication

**Timeline:** Months 10–15
**Team:** 6–10 engineers + 2 designers
**Goal:** Visual orchestration. Multi-channel delivery. Analytics depth. Features that justify $149–$299/mo pricing. Revenue target: $80K–$200K MRR.

**Trigger to begin Phase 3:** ≥ 100 paying customers, ≥ 5 modules in active use per top-quartile tenant, customer NPS ≥ 50, first enterprise inquiry received.

---

### P3-19: Simple Social Proof Widget

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 2 | 5 | 2 | **11** |

**What it is:** An embeddable widget (`<growthOS-social-proof>`) showing real-time dynamic numbers: "427 people signed up today" or "Joined by teams at Google, Flipkart, Razorpay." Pulls live data from the contact graph.

**Pain it kills:** "We manually update our landing page with 'Trusted by X users' every month. It's always stale."

**Why this score:**
- *Pain = 2:* Low. Indie teams can manually put a number on their landing page. Social proof widgets are a "nice touch," not a necessity.
- *Revenue = 2:* Not monetisable. Proof ($29/mo) exists but it's a tiny niche.
- *Build = 5:* Trivial. Widget queries contact count → displays formatted number. ~2 days.
- *Moat = 2:* Low. But it's live data from the contact graph, which is slightly better than static logos.

**Decision rationale:** Scores 11 (barely Phase 3). Ships only because it's near-zero effort and adds polish to the embed widget library. Could be a weekend hack.

---

### P3-20: Cohort Analytics Dashboard

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 2 | 4 | **12** |

**What it is:** "Users acquired via referral in January — what's their Day 7, Day 30, Day 90 retention vs. users acquired via paid ads?" Cohort analysis that cuts across acquisition source, module engagement, and business outcomes. Powered by the unified event stream.

**Pain it kills:** "We use Mixpanel for retention cohorts but it can't break down by referral source vs. ad source because Mixpanel doesn't have our referral data."

**Why this score:**
- *Pain = 3:* Valuable for data-driven teams. Most indie founders don't do cohort analysis at all (they're busy building). This becomes essential at 5K+ users when "why is churn increasing?" requires rigorous analysis.
- *Revenue = 3:* Justifies higher pricing tier. Competes with Mixpanel/Amplitude for specific use cases.
- *Build = 2:* Hard. Requires event aggregation pipelines, time-series computation, retention curve generation, and a good charting UI. Likely requires PostHog/ClickHouse queries under the hood. ~5 weeks.
- *Moat = 4:* High. Cohorts defined by cross-module data (acquisition source + engagement score + NPS + referral activity) are impossible to replicate outside GrowthOS.

**What ships in Phase 3:**
- Dashboard: cohort analysis view — define cohort (signup month × acquisition source), measure retention/conversion over time
- Pre-built cohort views: "Referral vs. Organic retention," "Waitlist VIPs vs. regular signups"
- Export to CSV for further analysis

**Dependency:** Requires Segment Builder (P2), UTM Attribution (P2), and sufficient historical data (3+ months).

---

### P3-21: A/B Testing Framework (Cross-Module)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 2 | 4 | **12** |

**What it is:** Run experiments across any module output: email subject lines, referral reward amounts, waitlist messaging, nudge copy, survey question wording. Variant allocation, statistical significance tracking, and auto-winner selection.

**Pain it kills:** "We want to test whether a $10 referral reward drives more conversions than $25. Right now we'd have to manually run Campaign A for 2 weeks, then Campaign B for 2 weeks, and compare in a spreadsheet."

**Why this score:**
- *Pain = 3:* Important for growth optimisation but indie teams are often pre-optimisation. They need to get the basics working first. A/B testing is a scale-stage concern.
- *Revenue = 3:* Justifies the $149/mo "Scale" tier. Part of the "we're a serious growth platform" story.
- *Build = 2:* Hard. Variant allocation (consistent per-contact), sample size calculation, statistical significance engine, results dashboard. Could leverage PostHog's experiment engine via API. ~5 weeks.
- *Moat = 4:* High. Testing across modules (test referral reward amount AND email subject line AND nudge timing simultaneously) is unique to platforms with unified data.

**What ships in Phase 3:**
- Experiment builder: select module output to test, define variants, set traffic split
- Integration with PostHog feature flags for variant allocation (reuse their infrastructure)
- Results dashboard: variant performance, statistical significance, confidence intervals
- Auto-winner: when significance is reached, auto-deploy winning variant

**Dependency:** Requires PostHog integration (always available), Segments (P2), and sufficient event volume for statistical power.

---

### P3-22: Journey Builder (Visual Canvas)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 4 | 1 | 5 | **13** |

**What it is:** A visual drag-and-drop canvas where growth teams chain modules into multi-step flows: "Lead Magnet Download → Wait 2 days → Welcome Email → If opened, show referral nudge → If referred 3+, invite to Ambassador Program." Cross-module orchestration made visible and configurable.

**Pain it kills:** "I can see each module working individually but I can't visualise or manage the overall customer journey across modules."

**Why this score:**
- *Pain = 3:* Phase 1–2 customers configure modules independently and connect them via trigger rules. This works at small scale. At 10+ active sequences/campaigns, a visual canvas becomes essential for understanding what's happening.
- *Revenue = 4:* This is the flagship feature that justifies premium pricing. Customer.io's journey builder is their #1 selling point. Braze charges $60K/yr partly for this. For GrowthOS, this unlocks $149–$299/mo pricing.
- *Build = 1:* The hardest feature in the entire roadmap. Visual canvas UI (drag-and-drop nodes, connection lines, zoom/pan), cross-module orchestration engine (a journey step can be "send email," "show nudge," "wait for event," "check segment," "add to referral campaign"), state management per contact per journey, error handling, debugging tools. ~8–12 weeks of intensive engineering.
- *Moat = 5:* Maximum. The journey builder ties every module together into a single visual orchestration layer. This is the "platform" moment — when GrowthOS stops being "a collection of modules" and becomes "an integrated growth operating system." Competitor moat: to replicate this, a competitor would need to build every module AND the orchestration layer. The visual canvas becomes the primary interface that growth teams live in daily.

**What ships in Phase 3:**
- Visual canvas: drag-and-drop journey builder with nodes for every module (email, nudge, survey, referral, waitlist, wait, condition)
- Contact journey tracking: see which step each contact is on
- Branch nodes: if/else on contact properties, segment membership, events
- Delay nodes: wait N hours/days, or wait for specific event
- Journey analytics: funnel view, drop-off at each step, time-to-complete

**Dependency:** Requires all Phase 1 modules + Segments (P2) + Contact Scoring (P2) to have meaningful nodes to connect.

---

### P3-23: Multi-Channel Comms: WhatsApp

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 2 | 3 | **13** |

**What it is:** Send messages via WhatsApp Business API (via Gupshup, Twilio, or direct Meta integration). Template messages for transactional (order confirmation, OTP, appointment reminder) and marketing (broadcast, referral invites, win-back). Integrated into the comms engine so any sequence step can choose "WhatsApp" as the channel.

**Pain it kills:** "Our Indian users open WhatsApp at 90%+ rates but email at 18%. We need to reach them on WhatsApp but our growth tools only support email."

**Why this score:**
- *Pain = 4:* Critical for India-focused fintechs and e-commerce. WhatsApp is the default communication channel for 500M+ Indians. But for global SaaS, email is still sufficient. Pain is 4 (not 5) because it's geography-dependent.
- *Revenue = 4:* Opens the Indian fintech/e-commerce market. Unlocks a customer segment that purely email-based tools can't serve. Per-message pricing on top of platform subscription.
- *Build = 2:* Hard. WhatsApp Business API has approval workflows (template messages must be pre-approved by Meta), compliance requirements (TRAI DND registry for India), and integration complexity (Gupshup/Twilio adapter). ~5 weeks.
- *Moat = 3:* Moderate. WhatsApp integration is becoming table stakes for Indian growth tools. But multi-channel orchestration (email + WhatsApp in the same journey, with fallback logic) is harder to replicate.

**What ships in Phase 3:**
- WhatsApp channel adapter (via Gupshup or Twilio)
- Template message management: create, submit for approval, manage status
- Sequence integration: any email step can be changed to WhatsApp (or "WhatsApp with email fallback")
- Delivery analytics: sent, delivered, read, clicked
- DND compliance: TRAI registry check before sending

**Dependency:** Requires comms engine infrastructure (Phase 1 email infra), and the tenant must have a WhatsApp Business Account.

---

### P3-24: Multi-Channel Comms: SMS

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 3 | 2 | **11** |

**What it is:** Send SMS messages via Twilio/MessageBird. Transactional (OTP, verification) and marketing (broadcast, flash sale alerts). DND compliance. Integrated into the comms engine.

**Why this score:**
- *Pain = 3:* SMS is declining in importance relative to WhatsApp (in India) and push notifications (globally). Still relevant for OTP, transactional alerts, and markets where WhatsApp isn't dominant.
- *Revenue = 3:* Per-message pricing. Lower margin than email (SMS costs $0.01–$0.05/message).
- *Build = 3:* Moderate. Twilio adapter, DND compliance, delivery tracking. ~3 weeks.
- *Moat = 2:* Low. SMS is commodity. Every messaging platform supports it.

**Ships in Phase 3:** SMS adapter, sequence integration, delivery tracking, DND compliance.

---

### P3-25: Multi-Channel Comms: Push Notifications

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 3 | 2 | **11** |

**What it is:** Browser push (Web Push API) and mobile push (FCM for Android, APNs for iOS). Triggered by events or sequence steps. Rich notifications with images and action buttons.

**Why this score:**
- *Pain = 3:* Useful for re-engagement ("You have 3 unused invites"). But indie SaaS teams rarely have mobile apps in Phase 1. Browser push has low adoption rates (~5% opt-in).
- *Revenue = 3:* Part of the multi-channel story. Not separately priced.
- *Build = 3:* Moderate. Web Push API for browser, FCM/APNs for mobile. Service worker setup for the tenant. ~3 weeks.
- *Moat = 2:* Low. OneSignal does push notifications for free.

**Ships in Phase 3:** Push adapter, sequence integration, opt-in management, delivery tracking.

---

### P3-26: Milestone Celebration Cards (Wrapped-Style)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 1 | 2 | 3 | 5 | **11** |

**What it is:** Auto-generated, branded, shareable cards when users hit milestones: "You referred 10 friends!" or "Your 1-year anniversary on [App]!" or an annual recap: "Your Year in [App]: you completed 47 trades across 8 sectors." Cards are designed for sharing on social media, driving organic viral loops.

**Pain it kills:** "Spotify Wrapped goes viral every December. We want that for our product but we don't have the engineering resources to build it."

**Why this score:**
- *Pain = 1:* No indie founder is losing sleep over this. It's aspirational, not urgent.
- *Revenue = 2:* Not directly monetisable. Drives organic acquisition for the tenant.
- *Build = 3:* Moderate. Template engine for card generation (HTML → image via Puppeteer/Satori), configurable milestone triggers, social sharing integration. ~3 weeks.
- *Moat = 5:* Maximum. This is the most defensible feature in the entire platform — because the card content is derived from the unified event stream across ALL modules. "You referred 10 friends, attended 3 webinars, and your NPS was 9/10" is data that only GrowthOS has. No standalone tool can generate these cards because no standalone tool has the full picture. Spotify can do Wrapped because they own all the listening data. GrowthOS can do "[Product] Wrapped" because it owns all the growth data.

**Decision rationale:** Scores only 11 because pain is 1 and revenue is 2. But the moat is 5/5 — the highest of any feature. This is a strategic investment that doesn't pay off until Phase 3 customers have 50K+ end-users and 12+ months of historical data. Before that, it's a gimmick.

**What ships in Phase 3:**
- Dashboard: configure milestone triggers (referral count thresholds, time-based anniversaries, custom event counts)
- Card template engine: branded card generation with dynamic data
- Annual recap generator: "Your Year in [App]" cards using 12 months of event data
- Social sharing: one-click share to Twitter, LinkedIn, Instagram, WhatsApp
- Event tracking: card_generated, card_shared → feeds back into the contact graph

---

### P3-27: Ambassador / VIP Program Management

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 3 | 3 | 4 | **12** |

**What it is:** Identify top advocates (by contact score, referral count, community activity, NPS scores) and formalise them into an ambassador program with perks: private community access, early feature access, swag, revenue share. Dashboard for managing ambassador tiers, perks, and activity.

**Pain it kills:** "We know our top 20 users are advocates. We have no formal way to recognise them, give them perks, or coordinate their advocacy."

**Why this score:**
- *Pain = 2:* Low for indie teams. Ambassador programs are a scale-stage play (Notion Ambassadors, Figma Advocates, CRED's invite-only model). At 500 users, you don't need a formal program — you know your top users by name.
- *Revenue = 3:* Part of the premium tier. Justifies $149+/mo pricing.
- *Build = 3:* Moderate. Ambassador identification (automated based on score thresholds), tier management, perk assignment, activity dashboard. ~3 weeks.
- *Moat = 4:* High. Ambassador identification uses cross-module data (referrals + NPS + community + amplification). This automated identification is unique to GrowthOS.

**Ships in Phase 3:** Automated ambassador identification, tier management, perk configuration, ambassador dashboard.

---

### P3-28: User-Generated Testimonial Collector

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 2 | 4 | 3 | **11** |

**What it is:** When a contact has NPS ≥ 9, automatically prompt them to submit a text testimonial, video review, or screenshot. Collected testimonials feed into an embeddable social proof wall (`<growthOS-testimonials>`) on the tenant's website.

**Pain it kills:** "We manually email happy users asking for testimonials. It's slow and inconsistent."

**Why this score:**
- *Pain = 2:* Low urgency. Most indie teams collect testimonials manually and it works.
- *Revenue = 2:* Not monetisable. Indirect value.
- *Build = 4:* Simple. Testimonial submission form (auto-triggered by NPS), storage, and embeddable widget. ~2 weeks.
- *Moat = 3:* The auto-trigger from NPS is the differentiator. Standalone testimonial tools (e.g., Testimonial.to) require manual outreach.

**Ships in Phase 3:** Auto-triggered testimonial prompt, submission form, embeddable testimonial wall widget.

---

### P3-29: Smart Landing Page Builder

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 3 | 2 | 2 | **10** |

**What it is:** Drag-and-drop landing page builder for creating campaign-specific pages. One page per ad set, influencer, or event. Integrated UTM tracking and conversion tracking.

**Pain it kills:** "We use Carrd ($19/yr) for landing pages and it's completely disconnected from our growth tools."

**Why this score:**
- *Pain = 3:* Real but well-served. Carrd, Webflow, Unbounce — the market is saturated with excellent, cheap landing page builders.
- *Revenue = 3:* Could replace Carrd/Unbounce for some customers but we're competing with tools that have 10+ years of refinement.
- *Build = 2:* Hard. Drag-and-drop page builders are engineering-heavy: block system, responsive preview, hosting, custom domains, A/B variants. ~6 weeks minimum for a mediocre version.
- *Moat = 2:* Low. Carrd exists at $19/yr. We can't compete on the builder. The only value is UTM auto-capture + contact graph integration, which we already offer via SDK + UTM ingestion (Phase 2) on ANY landing page.

**Decision rationale:** Scores 10, barely makes Phase 3. Only consider building if >30 customers explicitly request it AND we can't serve them with "use Carrd + embed our SDK." The SDK approach is almost always sufficient.

**Ships in Phase 3 (conditional):** Basic template-based page builder (not drag-and-drop), GrowthOS widgets pre-integrated, UTM auto-capture, custom domain support.

---

### P3-30: Upgrade Prompt Orchestration

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 4 | 3 | 3 | **13** |

**What it is:** Smart, contextual upgrade nudges based on usage patterns rather than static timers. "You've exported 8 of your 10 free reports this month" is 10x more effective than "Upgrade now!" on a schedule. Triggered by Stripe billing data + product usage events + GrowthOS contact properties.

**Pain it kills:** "Our upgrade prompts are generic and poorly timed. We show 'Upgrade to Pro!' to everyone regardless of whether they've used the free features or not."

**Why this score:**
- *Pain = 3:* Important for SaaS conversion optimisation. But indie teams often handle this with simple conditional logic in their own codebase ("if user.exports >= limit, show modal").
- *Revenue = 4:* Directly increases monetisation for the tenant → reduces churn from GrowthOS. Justifies premium tier.
- *Build = 3:* Moderate. Requires Stripe data (P2), contact scoring (P2), and the nudge system (P2). The upgrade prompt itself is a specific type of nudge triggered by usage threshold events. ~2 weeks of configuration + template work.
- *Moat = 3:* Moderate. The unique angle: upgrade prompts informed by cross-module data ("User is in segment 'Power Users' AND has referred 3 people AND is on free plan → they're clearly getting value, prompt now").

**Dependency:** Hard dependency on Stripe Integration (P2), Contact Scoring (P2), and In-App Nudges (P2).

**Ships in Phase 3:** Pre-built upgrade prompt templates, usage threshold triggers (via Stripe events + product events), segment-aware targeting.

---

### P3-32: Slack Integration (Alerts/Notifications)

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 3 | 2 | 5 | 2 | **12** |

**What it is:** Send GrowthOS notifications to Slack channels. "New referral: Priya referred Amit (converted)." "NPS alert: 3 detractors in the last hour." "Waitlist milestone: 1,000 signups reached." Configurable per-channel routing.

**Why this score:**
- *Pain = 3:* Nice-to-have. Growth teams want to see key events in their Slack without opening the GrowthOS dashboard.
- *Revenue = 2:* Not monetisable. Table stakes for any SaaS tool.
- *Build = 5:* Simple. Slack webhook integration with configurable event → channel routing. ~1 week.
- *Moat = 2:* Low. Every tool has Slack integration.

**Ships in Phase 3:** Slack webhook integration, configurable alert rules, pre-built alert templates.

---

### Phase 3 Summary

| # | Feature | Score | Eng. Weeks | Revenue Impact | Key Dependency |
|---|---|---|---|---|---|
| 19 | Social Proof Widget | 11 | 0.5 | Low | Contact Graph (P1) |
| 20 | Cohort Analytics | 12 | 5 | Premium tier | Segments (P2), UTM (P2) |
| 21 | A/B Testing Framework | 12 | 5 | Premium tier | PostHog, Segments (P2) |
| 22 | Journey Builder | 13 | 10 | Flagship feature | All P1 + P2 modules |
| 23 | WhatsApp Channel | 13 | 5 | India market | Comms engine (P1) |
| 24 | SMS Channel | 11 | 3 | Multi-channel | Comms engine (P1) |
| 25 | Push Notifications | 11 | 3 | Multi-channel | SDK (P1) |
| 26 | Milestone Cards (Wrapped) | 11 | 3 | Viral advocacy | Event data (12+ months) |
| 27 | Ambassador Program | 12 | 3 | Premium tier | Scoring (P2), Segments (P2) |
| 28 | Testimonial Collector | 11 | 2 | Indirect | Surveys (P1) |
| 29 | Landing Page Builder | 10 | 6 | Conditional | — |
| 30 | Upgrade Prompts | 13 | 2 | Monetisation ↑ | Stripe (P2), Nudges (P2) |
| 32 | Slack Integration | 12 | 1 | Table stakes | — |

**Total Phase 3 engineering: ~48.5 weeks.** With a 6–10 person team over 6 months (24 weeks), this is achievable with aggressive parallelisation. Critical path: Journey Builder first (longest lead time, highest impact), WhatsApp second (opens India market), A/B Testing + Cohort Analytics in parallel.

---

## PHASE 4 — AI Layer

**Timeline:** Months 16–20
**Team:** 2–3 ML engineers + existing platform team
**Goal:** Intelligence on top of the data. Predictive, not just reactive. Features that justify enterprise pricing ($299+/mo).

**Trigger to begin Phase 4:** ≥ 300 tenants, ≥ 1M total events in the data lake, ≥ 3 months of historical data per average tenant. ML investment only makes sense when there's sufficient data to train on.

---

### P4-33: AI: Send-Time Optimisation

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 3 | 2 | 4 | **11** |

**What it is:** For each contact, predict the optimal time to send emails, WhatsApp messages, and push notifications based on their historical open/click patterns. "Contact A opens emails at 9:15am IST. Contact B opens at 8:30pm EST. Automatically schedule each send to their optimal time."

**Pain it kills:** "We send all emails at 10am IST because that's what some blog post said was best. But our users are in 12 different time zones with different habits."

**Why this score:**
- *Pain = 2:* Low urgency. Most indie teams are happy with a fixed send time. Optimisation matters at scale (10K+ contacts) where even a 5% improvement in open rates moves the needle.
- *Revenue = 3:* Premium feature. Justifies AI tier pricing.
- *Build = 2:* Hard. Requires per-contact engagement history analysis, time-zone detection, statistical model for optimal send time, and integration with the email/WhatsApp/push delivery pipeline to delay sends to the predicted optimal time. ~6 weeks.
- *Moat = 4:* High. The model improves with more data. After 6 months of GrowthOS data, the send-time predictions are personalised per contact — something no standalone tool can compute without the full event history.

**Ships in Phase 4:** Per-contact send-time model, auto-scheduling in sequences, A/B test vs. fixed time to prove lift.

---

### P4-34: AI: Churn Prediction

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 3 | 1 | 4 | **10** |

**What it is:** Predict which contacts are at risk of churning based on engagement pattern decay, NPS trends, billing behaviour, and product usage signals. Auto-create a segment "Predicted Churn Risk" that powers retention campaigns.

**Pain it kills:** "By the time we notice a user is churning, they've already cancelled. We're always reactive, never proactive."

**Why this score:**
- *Pain = 2:* Low for indie teams with 500 users (they can spot churn signals manually). Essential for mid-market with 5K+ users.
- *Revenue = 3:* Premium feature. High willingness to pay from mid-market and enterprise.
- *Build = 1:* Very hard. Requires: feature engineering across all event types, ML model training (gradient boosted trees or similar), model serving infrastructure, calibration, and ongoing retraining. ~8 weeks for a first useful model.
- *Moat = 4:* High. The model uses cross-module signals: NPS trend + email engagement decay + referral activity drop + billing events. No standalone tool has all these signals.

**Ships in Phase 4:** Churn risk score per contact, "Predicted Churn" auto-segment, pre-built retention journey triggered by churn prediction.

---

### P4-35: AI: Auto-Generated Campaign Copy

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 2 | 2 | 3 | 2 | **9** |

**What it is:** LLM-powered copywriting for email subjects, body text, nudge messages, and survey questions. "Generate a win-back email for users who haven't logged in for 14 days" → produces a draft email ready to edit and send.

**Pain it kills:** "Writing email copy is tedious. I wish the tool could generate a first draft based on what I'm trying to achieve."

**Why this score:**
- *Pain = 2:* Low. ChatGPT/Claude already do this in a separate tab. Building it into GrowthOS saves context-switching but doesn't solve a unique problem.
- *Revenue = 2:* Not a strong monetisation driver. AI copy is becoming commoditised.
- *Build = 3:* Moderate. API call to Claude/GPT with prompt engineering for each use case (email, nudge, survey). Template system for structured prompts. ~2 weeks.
- *Moat = 2:* Low. LLM wrappers are trivially replicable.

**Decision rationale:** Scores 9 — borderline kill. Ships in Phase 4 only because the build effort is low (2 weeks) and it adds polish to the dashboard. Not a priority.

**Ships in Phase 4:** "Generate with AI" button in email composer, nudge builder, and survey builder. Context-aware prompts that reference the tenant's product and audience.

---

### P4-36: AI: Module Recommendation Engine

| Pain | Revenue | Build | Moat | Total |
|---|---|---|---|---|
| 1 | 2 | 2 | 3 | **8** |

**What it is:** Analyse the tenant's growth bottleneck and recommend which module to activate next. "Your onboarding completion rate is 45%. Activating the Onboarding Checklist module would likely improve this by 15–25%." "Your referral program has 200 participants but none have referred more than 3 people. Consider activating Tiered Rewards to incentivise power referrers."

**Pain it kills:** "I don't know which GrowthOS module to turn on next. I need guidance."

**Why this score:**
- *Pain = 1:* Very low. This is a "nice feature demo" not a real pain point. Customers can figure out which module to use next by reading the documentation or asking support.
- *Revenue = 2:* Indirect. Drives module adoption → more modules used → higher retention. But not directly monetisable.
- *Build = 2:* Hard. Requires benchmark data across tenants (what conversion rates are "good"?), bottleneck detection heuristics, and recommendation logic. ~4 weeks.
- *Moat = 3:* Moderate. Gets better with more tenant data (network effect at the platform level).

**Decision rationale:** Scores 8 — borderline kill. Include in Phase 4 as a "dogfooding" feature that demonstrates the AI layer's cross-module understanding. If the build turns out to be >4 weeks, kill it.

---

### Phase 4 Summary

| # | Feature | Score | Eng. Weeks | Revenue Impact | Key Dependency |
|---|---|---|---|---|---|
| 33 | Send-Time Optimisation | 11 | 6 | Premium tier | 6+ months event data |
| 34 | Churn Prediction | 10 | 8 | Premium tier | 3+ months event data |
| 35 | Auto-Generated Copy | 9 | 2 | Polish | LLM API |
| 36 | Module Recommendations | 8 | 4 | Internal tool | Tenant benchmarks |

**Total Phase 4 engineering: ~20 weeks.** Dedicated 2–3 ML engineers over 5 months. Churn prediction is the highest-value item; start there.

---

## KILLED FEATURES — Full Rationale

These features scored ≤ 9 and have been permanently removed from the roadmap. Each is annotated with why it was killed and what (if anything) replaces it.

---

### ❌ K-37: Paywalled Feature Gates / Trial Management (Score: 10)

| Pain: 3 | Revenue: 2 | Build: 3 | Moat: 2 |

**Why killed:** Better handled by Stripe + PostHog feature flags. Stripe manages subscription tiers and trial periods. PostHog feature flags gate features by plan. GrowthOS should not insert itself into the billing/access control layer — that's a trust and reliability bar we can't afford to miss. If we introduce a bug in feature gating, the tenant's paying users lose access to features they paid for. The blast radius is too high for a young platform.

**What replaces it:** The Upgrade Prompt Orchestration (P3-30) solves the growth side of this problem — contextual nudges based on usage patterns — without touching the access control layer itself.

---

### ❌ K-38: Pricing Page Experiments (Score: 7)

| Pain: 2 | Revenue: 2 | Build: 2 | Moat: 1 |

**Why killed:** PostHog's experiment + feature flag combination already does this better than we ever could. A/B testing pricing page layouts is PostHog's core competency. Zero reason to rebuild it.

**What replaces it:** Documentation showing how to run pricing experiments with PostHog, integrated with GrowthOS's cohort analytics to measure downstream impact.

---

### ❌ K-39: Community Hub — Self-Hosted (Score: 6)

| Pain: 2 | Revenue: 1 | Build: 1 | Moat: 2 |

**Why killed:** Discourse is free, mature (200K+ deployments), and excellent. Circle is $89/mo with full-service hosting. Building a community platform is a product unto itself — Discourse has 10 years of engineering in forums, moderation, trust levels, and notifications. We would build a worse version. The only value would be if community engagement events feed the contact graph — which we can achieve with a simple webhook integration.

**What replaces it:** Discourse/Circle webhook integration (P2-12: Webhook Engine). Community signup → contact creation. Community engagement events → contact scoring.

---

### ❌ K-40: Contact Sync & Discovery (Score: 9)

| Pain: 2 | Revenue: 2 | Build: 2 | Moat: 3 |

**Why killed:** "5 of your contacts are already here" is powerful for consumer social apps (WhatsApp, CRED, PhonePe) but nearly useless for B2B SaaS. It requires mobile contact upload, which triggers privacy/compliance complexity (GDPR, India's DPDPA). The engineering cost (mobile contact access permissions, server-side matching, privacy-preserving comparison) is high for a narrow use case. Our Phase 1–3 customer is an indie SaaS founder, not a consumer fintech.

**What replaces it:** Nothing directly. Revisit only if GrowthOS pivots to serve consumer fintech/social apps.

---

### ❌ K-41: Interactive Product Tours (Score: 8)

| Pain: 3 | Revenue: 2 | Build: 1 | Moat: 2 |

**Why killed:** This is Appcues ($249/mo), Pendo ($7K+/yr), Userflow ($240/mo) territory. Building a full tooltip-positioning, step-sequencing, element-targeting, in-app tour engine is a product unto itself. We'd be building a worse version of tools that have 5+ years of engineering refinement. The build complexity is 1/5 — it would take 8+ weeks and still be inferior.

**What replaces it:** The In-App Nudge system (P2-14) covers the most impactful use case: showing contextual messages (banner/modal/tooltip) triggered by behaviour. We don't need step-by-step tours — a well-timed nudge ("Haven't tried Feature X yet? Click here to see how it works") achieves 80% of the value at 20% of the build cost. Let Appcues handle complex tours. We integrate via events.

---

### ❌ K-42: Changelog / What's New (Score: 9)

| Pain: 2 | Revenue: 1 | Build: 5 | Moat: 1 |

**Why killed:** LaunchNotes, Beamer, and even a simple blog post handle this. A changelog is content, not a growth engine. No moat, no willingness to pay, no pain. Easy to build but pointless for us to build.

**What replaces it:** Nothing. Use Beamer or a blog. If we ever want changelog-triggered events ("user viewed changelog" → contact scoring), we add it via webhook integration.

---

### ❌ K-43: Streaks & Activity Rewards / Badges / Gamification (Score: 8)

| Pain: 1 | Revenue: 2 | Build: 3 | Moat: 2 |

**Why killed:** Gamification is a vitamin for consumer apps and a distraction for SaaS. CRED and Zerodha can afford badges because they have 10M+ users. Our customer has 500–5,000 users. At that scale, a personal email from the founder beats any badge. The engineering effort (badge system design, streak tracking, visual components, reward logic) is moderate but the return is near-zero for our target market.

**What replaces it:** Nothing. If an indie founder asks for badges, they're optimising the wrong thing. If a fintech/e-commerce customer at Phase 3+ scale asks, revisit as a custom module.

---

### ❌ K-44: Event / Webinar Engine (Score: 8)

| Pain: 2 | Revenue: 2 | Build: 2 | Moat: 2 |

**Why killed:** Luma, Lu.ma, Zoom, and Eventbrite own this space. Building a webinar engine (registration, video hosting, live streaming, recording, reminders, replays) is an entire product. We would build a fraction of what these tools offer.

**What replaces it:** Luma/Eventbrite webhook integration (P2-12: Webhook Engine). RSVP event → contact creation. Attendance event → contact scoring. No-show → trigger re-engagement email. All the growth value without building a webinar platform.

---

### ❌ K-45: Missed-Call-to-WhatsApp Trigger (Score: 10)

| Pain: 3 | Revenue: 3 | Build: 3 | Moat: 1 |

**Why killed:** India-specific. Requires telephony integration (Exotel, Knowlarity) + WhatsApp Business API (Gupshup). Two heavy integrations for a single-country use case. Our Phase 1–2 customer is an indie SaaS founder, not a fintech targeting Tier 3 India. No moat — any developer can build this with Exotel + Gupshup APIs in a week.

**What replaces it:** The Webhook Engine (P2-12) enables the tenant to build this themselves: Exotel webhook → GrowthOS inbound webhook → trigger WhatsApp sequence via the WhatsApp channel (P3-23). We provide the plumbing; the tenant configures the flow.

---

### ❌ K-46: QR Code Engine (Score: 9)

| Pain: 2 | Revenue: 1 | Build: 5 | Moat: 1 |

**Why killed:** QR codes are free (goqr.me, any library). Generating a QR code that links to a GrowthOS-tracked URL (waitlist page, referral link, landing page) is trivially done by the tenant. We don't need a "QR Code Engine" — we need our tracked URLs to work correctly when encoded as QR codes, which they already do.

**What replaces it:** Documentation showing how to generate QR codes for GrowthOS URLs using any free QR generator.

---

### ❌ K-47: Link-in-Bio Page (Score: 8)

| Pain: 1 | Revenue: 1 | Build: 5 | Moat: 1 |

**Why killed:** Linktree is $5/mo. Building a link-in-bio page builder competes with a product that has 40M+ users and near-zero switching cost. No pain, no moat, no revenue potential.

**What replaces it:** Nothing. Use Linktree. Embed GrowthOS widgets (waitlist, referral) via iframe or SDK on the Linktree page.

---

### ❌ K-48: Contest / Giveaway Engine (Score: 8)

| Pain: 2 | Revenue: 2 | Build: 3 | Moat: 1 |

**Why killed:** KickoffLabs ($79/mo) and Gleam ($49/mo) do this well. Contests are ephemeral campaigns, not recurring growth infrastructure. The build effort (multi-action tracking, entry management, winner selection, fraud prevention) is moderate for a feature that most customers would use once per year.

**What replaces it:** The referral engine (P1-02) covers the most valuable mechanic: "Refer friends to earn X." If a customer wants a more complex contest ("follow on Twitter + share on LinkedIn + refer 3 friends = enter to win"), they can use Gleam and feed the result via webhooks.

---

### ❌ K-49: Magic Link / Passwordless Auth (Score: 8)

| Pain: 2 | Revenue: 1 | Build: 4 | Moat: 1 |

**Why killed:** Auth is the tenant's responsibility, not GrowthOS's. We're a growth platform, not an identity provider. Clerk ($25/mo), Auth0, Firebase Auth, and Supabase Auth all handle passwordless auth. Building auth into GrowthOS would require us to manage session tokens, security updates, and compliance — a massive ongoing liability with zero moat.

**What replaces it:** Nothing. The tenant uses their existing auth system. GrowthOS's SDK identifies users via `GrowthOS.identify({userId, email})` after the tenant's auth has already resolved identity.

---

## The Grand Summary

### Feature Distribution by Phase

| Phase | Features | Eng. Weeks | Cumulative Months | Revenue Target |
|---|---|---|---|---|
| **Phase 1** | 5 features | ~20 weeks | Month 1–4 | First $5K MRR |
| **Phase 2** | 14 features | ~30 weeks | Month 5–9 | $20K–$50K MRR |
| **Phase 3** | 14 features | ~49 weeks | Month 10–15 | $80K–$200K MRR |
| **Phase 4** | 4 features | ~20 weeks | Month 16–20 | $200K+ MRR |
| **Killed** | 13 features | 0 weeks | Never | — |

### The Decision At A Glance

| What We're Building | Why |
|---|---|
| Unified Contact Graph | The spine. Makes everything else trustworthy. |
| Referral Engine | The sign-up driver. #1 reason people discover us. |
| Email Sequences | Highest ROI growth lever. Replaces Customer.io. |
| Waitlist | Top-of-funnel. The entry drug. |
| Surveys + Auto-Actions | The interop proof point. Sells the platform story. |
| Segments, Scoring, Webhooks | Platform maturity. Makes modules 10x more powerful. |
| Journey Builder, A/B Testing | The "platform" moment. Justifies premium pricing. |
| WhatsApp, SMS, Push | Multi-channel. Opens India market. |
| AI Layer | Prediction + optimisation. Enterprise pricing. |

| What We're NOT Building | Why Not |
|---|---|
| Community Hub | Discourse is free and better. Webhook integration instead. |
| Product Tours | Appcues has 5 years of head start. Nudges instead. |
| Feature Gating | Stripe + PostHog handle this. Too high-risk for us. |
| Gamification/Badges | Vitamin, not painkiller. Our customer has 500 users, not 5M. |
| Webinar Engine | Luma/Zoom own this. Webhook integration instead. |
| Auth | Clerk/Auth0 handle this. We're growth, not identity. |
| QR Codes / Link-in-Bio / Contests | No moat. Free alternatives are better. |

### The One Principle That Governs Everything

**If a feature can be adequately served by a webhook integration with an existing best-in-class tool, we don't build it. We build the webhook and the growth logic that sits on top.**

We build the growth modules, the unified data layer, and the orchestration engine. We integrate with everything else.
