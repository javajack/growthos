# GrowthOS — The Brutal Feature Triage

## A Seasoned PM's Take on What Actually Ships, What Gets Parked, and What Gets Killed

---

## The Reality Check Before We Begin

Let me be direct. The 35-module vision we designed is a **destination, not a launch plan**. If we try to build it all, we'll build nothing well. We'll run out of money, time, and credibility.

I've watched growth teams at early-stage companies. Here's what actually happens:

- The founder or a single growth person does everything manually — Notion doc for waitlist, Mailchimp for emails, a Google Sheet tracking referrals, and Canva for social assets
- They don't have "a growth engineering team." They have one developer who is also doing product work, bug fixes, and on-call
- They'll pay for a tool that saves them 5 hours/week. They won't pay for a tool that "enables strategic lifecycle orchestration"
- **They don't need 35 modules. They need 4–5 painkillers that work together better than the 8 separate tools they're duct-taping today**

Our customer is not Braze's customer. Our customer is the founder/growth-lead at a 5–50 person company who is:
- Spending $200–$2,000/mo across 6–10 separate growth tools
- Losing 15–20% of their leads to identity fragmentation (the same person shows up as 3 different records)
- Wasting 2–3 engineering days per month maintaining integrations between these tools
- Unable to answer basic questions like "which channel actually drove our best users?"

**Our job: replace their worst 5 tools with 1 platform that's cheaper, faster to set up, and answers questions the separate tools can't.**

---

## The Scoring Framework

Every feature gets scored on 4 dimensions. If it doesn't score well on at least 3, it's out.

| Dimension | What It Measures | Scale |
|---|---|---|
| **Pain Severity** | How much does the absence of this feature actually hurt an indie/small SaaS team? Would they describe this as a "hair on fire" problem? | 1 (nice-to-have) → 5 (losing money without it) |
| **Revenue Proximity** | How directly does this feature drive our revenue? Does it solve a problem people already pay for? | 1 (hard to monetise) → 5 (clear willingness to pay) |
| **Build Complexity** | Engineering effort + ongoing maintenance burden relative to a small team | 1 (months of work) → 5 (days to build) |
| **Moat / Defensibility** | Can a competitor clone this trivially? Does it create compounding value over time? | 1 (trivially copyable) → 5 (network effects or data moat) |

**Threshold:** Must score ≥ 15/20 total to be a Phase 1 candidate. 12–14 = Phase 2. Below 12 = Kill or Park.

---

## The Triage: Feature by Feature

### TIER 1: PAINKILLERS — Ship These First

These are the features where customers will say "shut up and take my money" because the pain is real, immediate, and currently poorly served.

---

#### ✅ 1. Unified Contact Graph + Attribution

**What it does:** One record per human across all touchpoints — email, phone, anonymous browser session, app user ID. Every interaction attributed to a source (UTM, referral, direct, QR code).

**The pain it kills:**
- "Our Mailchimp list says 4,200 contacts but our app has 3,800 users and our referral tool shows 2,100 participants. How many actual people do we have?" — *Every indie founder ever*
- A user signs up from a blog post, joins the waitlist, completes onboarding, then refers a friend. In 4 separate tools, this is 4 separate identities. You can't see the journey. You can't measure what works.
- Growth teams at 20-person companies spend 3–5 hours/week manually deduplicating and reconciling user lists between Mailchimp, their app DB, Google Analytics, and whatever referral tool they use.

**Why it's a painkiller, not a vitamin:**
This isn't a feature users interact with — it's the infrastructure that makes every other feature trustworthy. Without it, every number in every dashboard is wrong. Indie teams don't know their numbers are wrong, which is worse — they make decisions based on bad data.

**Revenue angle:** This is bundled into the foundation tier. It's the reason people stay, not the reason they sign up. But it's what makes churn near-zero once adopted, because migrating your unified contact graph is painful.

| Pain | Revenue | Complexity | Moat | Total |
|---|---|---|---|---|
| 5 | 4 | 2 | 5 | **16** |

**Complexity note:** This is the hardest thing to build well but it's also the most defensible. The merge logic (deterministic + probabilistic), conflict resolution, and data model are non-trivial. But this is exactly where we should invest our best engineering — it's the spine.

---

#### ✅ 2. Referral Engine with Embeddable Widget

**What it does:** Per-user unique referral links, configurable reward tiers, an embeddable in-app widget, and a tracking dashboard.

**The pain it kills:**
- "We built referrals on a Google Sheet + Zapier + Stripe webhook. It took 3 weeks. It breaks every time we change our billing flow." — *Literally every SaaS founder who tried DIY referrals*
- Dedicated referral tools like Cello ($300–$1,000/mo), ReferralHero ($200/mo), or Rewardful ($49–$99/mo) are expensive for what they do, and they're totally disconnected from your analytics and email tools
- An in-app referral widget increases activation by up to 400% vs. an external portal (per Cello's own research). Most tools force users to a separate dashboard to grab their link — that's a conversion killer

**Why it's a painkiller, not a vitamin:**
Referrals are the #1 acquisition channel for capital-efficient startups. Groww, CRED, Zerodha, Dropbox, PayPal — all scaled on referrals. Every indie SaaS founder wants a referral program. Most give up because it's too hard to build and too expensive to buy. Referral tools are a $3B+ market growing 15%/yr.

**Revenue angle:** This is the #1 "sign-up" feature — the reason people discover GrowthOS. Price competitively against Rewardful/ReferralHero ($29–$99/mo). Once they integrate the referral widget, they discover the contact graph, then the email flows, then they're locked in.

| Pain | Revenue | Complexity | Moat | Total |
|---|---|---|---|---|
| 5 | 5 | 4 | 4 | **18** |

---

#### ✅ 3. Lifecycle Email Sequences (Event-Triggered)

**What it does:** Multi-step email sequences triggered by events: signup, onboarding completion, trial expiry approaching, NPS response, referral activity, inactivity.

**The pain it kills:**
- Customer.io costs $100–$1,000/mo and is overkill for a 20-person SaaS. Mailchimp's automation is primitive and disconnected from product events. Braze is $60K/yr minimum.
- "We want to send an email 3 days after signup if the user hasn't completed onboarding. This requires Segment + Customer.io + our app events + 2 days of engineering." — the current state of affairs
- Most indie teams settle for blast emails (newsletters) because event-triggered emails are too hard to set up. They know it's leaving money on the table but they can't justify the engineering time.

**Why it's a painkiller, not a vitamin:**
Email still drives 4x ROI vs. any other channel. Automated lifecycle emails generate 320% more revenue than manual campaigns (Campaign Monitor). But setting up event-triggered emails currently requires connecting your app → Segment/RudderStack → Customer.io/Sendgrid → custom templates. That's 3–4 integrations and 2–3 weeks of engineering. If GrowthOS already has the contact graph and events (because the user integrated the SDK for referrals), adding lifecycle emails is near-zero incremental integration.

**Revenue angle:** This replaces Customer.io/Mailchimp for most use cases. Price at $29–$79/mo based on contact volume. This is recurring, sticky revenue with high retention because email sequences are the hardest thing to migrate.

| Pain | Revenue | Complexity | Moat | Total |
|---|---|---|---|---|
| 5 | 5 | 3 | 4 | **17** |

---

#### ✅ 4. Waitlist with Viral Mechanics

**What it does:** Embeddable waitlist form with position tracking, "share to move up" mechanics, and automatic invite drip.

**The pain it kills:**
- GetWaitlist ($20–$80/mo) and Prefinery ($49–$199/mo) are single-use tools that die after launch. You pay for 2 months, get your waitlist, then churn. The data sits in their silo forever.
- Building a DIY waitlist is common but the "share to move up" viral mechanic is genuinely hard to implement — it requires referral tracking, position recalculation, and fair queuing
- The real pain: the waitlist captures email addresses that then need to be manually exported to your email tool, losing context about who referred whom, who was most engaged, etc.

**Why it's a painkiller, not a vitamin:**
Every product launch needs a waitlist. ChatGPT, Notion, Linear, CRED, Superhuman — all used invite-only waitlists as a growth mechanic. The pain isn't "I need a waitlist tool" — it's "I need the waitlist data to flow into my referral engine and my email sequences without manual CSV exports." On GrowthOS, a waitlist signup auto-creates a contact, which auto-enters a welcome sequence, which auto-generates a referral link. Zero wiring.

**Revenue angle:** This is the second "sign-up" feature alongside referrals. Free for basic waitlist, paid for viral mechanics. Acts as a top-of-funnel for the platform — founders discover GrowthOS when launching their product.

| Pain | Revenue | Complexity | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 5 | 3 | **16** |

---

#### ✅ 5. Contextual Micro-Surveys / NPS

**What it does:** Lightweight in-app or email-embedded surveys. 1–3 questions. Triggered by events (post-purchase, after 7 days, on cancellation attempt). NPS scores flow into the contact graph and trigger downstream actions.

**The pain it kills:**
- Typeform ($25–$83/mo) and Delighted ($224/mo) are standalone survey tools. The NPS score sits in a dashboard nobody checks. It never triggers an email, never informs who gets a referral invite, never flags a churn risk.
- "Our NPS is 62 but I have no idea which users are detractors and what to do about them" — this is the universal complaint
- The real pain: NPS is useless without action. A detractor should get a personal email within 24 hours. A promoter should get a referral invite. This requires connecting your survey tool → your email tool → your referral tool. Three integrations. Nobody does it.

**Why it's a painkiller, not a vitamin:**
The survey itself is a vitamin. The **automated action triggered by the survey response** is the painkiller. On GrowthOS: NPS ≤ 6 → auto-trigger retention email sequence. NPS ≥ 9 → auto-send referral invite + prompt for app store review. This closed loop is impossible with standalone survey tools and is the #1 example of interoperability value.

**Revenue angle:** Bundled into the platform. Free for 100 responses/mo, paid beyond. The value isn't the survey — it's the automated response.

| Pain | Revenue | Complexity | Moat | Total |
|---|---|---|---|---|
| 4 | 4 | 5 | 4 | **17** |

---

### TIER 2: VITAMINS WORTH BUILDING — Ship in Phase 2

These have real value but aren't urgent enough to be Phase 1. They become much more powerful once the Tier 1 foundation exists.

---

#### 🟡 6. Smart Landing Pages + UTM Tracking

**Score: 14/20** | Pain: 3 | Revenue: 3 | Complexity: 5 | Moat: 3

**Why Phase 2, not Phase 1:** Carrd ($19/yr), Webflow, and Unbounce already do this well and cheaply. The only unique value is if UTM data flows directly into the GrowthOS contact graph. Build this when the core platform has enough users to justify it. For now, just ingest UTM params from the SDK and let users use whatever landing page builder they want.

**Decision:** DEFER. Build UTM ingestion into the SDK now (trivial). Build landing page builder later only if there's demand signal.

---

#### 🟡 7. Onboarding Checklists

**Score: 13/20** | Pain: 4 | Revenue: 3 | Complexity: 3 | Moat: 3

**Why Phase 2, not Phase 1:** Genuine pain for SaaS products. Appcues ($249/mo), Pendo ($7K+/yr), and Userflow ($240/mo) serve this market. The unique play is tying checklist completion events to the GrowthOS contact graph — incomplete onboarding triggers a nudge email, complete onboarding triggers a referral invite. But building a full in-app checklist renderer with tooltip positioning is a significant engineering lift for a small team.

**Decision:** DEFER. Build a lightweight version (embeddable progress bar component + event hooks) in Phase 2. Don't try to replicate Appcues.

---

#### 🟡 8. Employee Social Amplification with Tracking

**Score: 13/20** | Pain: 3 | Revenue: 4 | Complexity: 4 | Moat: 3

**Why Phase 2, not Phase 1:** This was one of the original 10 tools and it's a real problem — but primarily for companies with 30+ employees. Indie teams of 5–15 don't need this yet. The Slack-based asset distribution + individual tracking leaderboard is a nice differentiator but not a day-1 requirement.

**Decision:** DEFER. Build when we have enough mid-stage customers (50+ employees) asking for it. It's a great expansion play.

---

#### 🟡 9. Coupon / Promo Engine

**Score: 13/20** | Pain: 3 | Revenue: 4 | Complexity: 5 | Moat: 2

**Why Phase 2, not Phase 1:** E-commerce bread-and-butter. SaaS uses it for annual billing discounts and win-back. Easy to build, but no moat — Stripe already handles coupon codes. Only valuable on GrowthOS if coupons are segment-aware (send a 20% discount only to contacts who signed up via waitlist AND haven't converted in 14 days). Build this once the segment builder exists.

**Decision:** DEFER. Build as a lightweight module once the segment builder and lifecycle emails are solid.

---

#### 🟡 10. Gated Content / Lead Capture

**Score: 14/20** | Pain: 4 | Revenue: 3 | Complexity: 5 | Moat: 2

**Why Phase 2, not Phase 1:** Genuine pain for B2B SaaS — every content marketing strategy needs gated PDFs/reports. But ConvertKit, Mailchimp, and even Carrd handle basic email capture. The GrowthOS advantage: the lead capture feeds directly into the contact graph with intent tags ("downloaded fintech report" = fintech intent), which feeds into segment-targeted email sequences. Worth building, but not before the core.

**Decision:** DEFER. Build as a simple "email gate" component. The value is in the data flowing into the contact graph, not in the gate itself.

---

### TIER 3: KILL OR PARK INDEFINITELY

These features either have no moat, create more complexity than value, or solve problems that indie/small teams don't actually have.

---

#### ❌ 11. Community Hub (Self-Hosted)

**Score: 8/20** | Pain: 2 | Revenue: 1 | Complexity: 1 | Moat: 2

**Why kill:** Hosting an open-source community platform (Discourse, Forem) is operationally heavy and is NOT a growth tool — it's a community tool. Discourse is free and excellent. Circle is $89/mo. Nobody will pay GrowthOS to host a community when they can host Discourse for free on a $10 VPS. The only value would be if community engagement events feed into the contact graph, which can be done via a simple webhook integration.

**Decision:** KILL as a module. Build a Discourse/Circle webhook integration instead (1 day of work vs. months).

---

#### ❌ 12. Contact Sync & Discovery

**Score: 9/20** | Pain: 2 | Revenue: 2 | Complexity: 2 | Moat: 3

**Why kill:** "5 of your contacts are already here" is powerful for consumer social apps (WhatsApp, CRED, PhonePe). It's nearly useless for B2B SaaS and most indie products. The mobile contact upload also triggers privacy/compliance complexity (GDPR, Indian data protection). The juice isn't worth the squeeze for our target market.

**Decision:** KILL. Only revisit if we pivot to serve consumer fintech/social apps.

---

#### ❌ 13. Interactive Product Tours

**Score: 9/20** | Pain: 3 | Revenue: 2 | Complexity: 1 | Moat: 2

**Why kill:** This is Appcues/Pendo/Userflow territory. Building a full tooltip-positioning, step-sequencing, in-app tour engine is a product unto itself. We'd be building a worse version of a $249/mo product and diluting our focus. Let Appcues do this. We can integrate with them via events.

**Decision:** KILL. Build a simple "nudge" component (banner/modal) for Phase 2 instead. Don't try to replicate tour engines.

---

#### ❌ 14. Pricing Page Experiments

**Score: 7/20** | Pain: 2 | Revenue: 2 | Complexity: 2 | Moat: 1

**Why kill:** PostHog's feature flags + experiments already do this better than we ever could. If a team wants to A/B test their pricing page, they should use PostHog (which we integrate with). Zero reason to rebuild this.

**Decision:** KILL permanently. Document how to do this with PostHog in our integration guide.

---

#### ❌ 15. Changelog / What's New

**Score: 7/20** | Pain: 2 | Revenue: 1 | Complexity: 5 | Moat: 1

**Why kill:** LaunchNotes, Beamer, and even a simple blog post handle this. No pain, no willingness to pay, no moat. A changelog is content, not a growth engine.

**Decision:** KILL permanently.

---

#### ❌ 16. Streaks & Activity Rewards / Badges / Gamification

**Score: 8/20** | Pain: 1 | Revenue: 2 | Complexity: 3 | Moat: 2

**Why kill:** Gamification is a vitamin for consumer apps and a distraction for SaaS. Indie founders don't lie awake thinking "I need a badge system." CRED and Zerodha can afford to build gamification because they have 10M+ users. Our customer has 500–5,000 users. At that scale, a personal email from the founder beats any badge.

**Decision:** KILL. If an indie founder asks for badges, they're solving the wrong problem.

---

#### ❌ 17. Event / Webinar Engine

**Score: 8/20** | Pain: 2 | Revenue: 2 | Complexity: 2 | Moat: 2

**Why kill:** Luma, Lu.ma, Zoom, and Eventbrite own this space. Building a webinar engine is a product, not a feature. The only value is RSVP → contact graph, which is a webhook integration, not a module.

**Decision:** KILL as a module. Build a Luma/Eventbrite webhook integration.

---

#### ❌ 18. Paywalled Feature Gates / Trial Management

**Score: 10/20** | Pain: 3 | Revenue: 2 | Complexity: 3 | Moat: 2

**Why kill for now:** This is better handled by the product's own billing system + PostHog feature flags. Stripe + PostHog flags = feature gating solved. We shouldn't insert ourselves into the billing/access control layer — that's a trust and reliability bar we can't afford to miss.

**Decision:** PARK. Revisit only if customers explicitly ask for "upgrade prompts triggered by usage patterns." The data is already in PostHog; we can build thin orchestration on top later.

---

#### ❌ 19. Missed-Call-to-WhatsApp Trigger

**Score: 10/20** | Pain: 3 | Revenue: 3 | Complexity: 3 | Moat: 1

**Why kill for now:** India-specific. Requires telephony integration (Exotel, Knowlarity) + WhatsApp Business API (Gupshup). Two heavy integrations for a narrow use case. Our Phase 1 customer is an indie SaaS founder, not a fintech targeting Tier 3 India.

**Decision:** PARK. Revisit when/if we serve fintech and e-commerce verticals at scale.

---

#### ❌ 20. QR Code Engine / Link-in-Bio / Contest Engine / Social Proof Widgets

**Score: 8–10/20 each**

**Why kill all four:** These are individually low-value, low-moat features. QR codes are free (goqr.me). Link-in-bio is Linktree ($5/mo). Contests are KickoffLabs ($79/mo). Social proof widgets are Proof ($29/mo). None of these justify engineering time when our core platform isn't built yet. They're "nice to haves" that make the feature page look impressive but don't drive signups, retention, or revenue.

**Decision:** KILL all four. Maybe build a simple social proof widget ("X people signed up today") as a 2-hour hack if a customer asks for it specifically.

---

#### ❌ 21. Milestone Celebration Cards (Wrapped-Style)

**Score: 11/20** | Pain: 1 | Revenue: 2 | Complexity: 3 | Moat: 5

**Why park, not kill:** The moat is genuinely high — Spotify Wrapped drove 21% download spike. But no indie founder has ever said "I need a Wrapped-style card generator." This is a feature for products with 100K+ users and rich behavioural data. Our Phase 1 customer has 500–5,000 users. At that scale, Wrapped-style cards feel performative, not valuable.

**Decision:** PARK. Build this as a "wow" feature in Phase 3 when we have customers with sufficient user bases. It could be a powerful advocacy/viral tool at the right scale.

---

## The Final Priority Stack

### Phase 1 — The Minimum Lovable Product (MLP)

Ship in 3–4 months with a team of 3–5 engineers.

| Priority | Feature | Why First | Revenue Play |
|---|---|---|---|
| P0 | **Unified Contact Graph + SDK** | The spine. Everything depends on this. | Retention moat — bundled free |
| P1 | **Referral Engine + Embeddable Widget** | #1 sign-up driver. Clear willingness to pay. Replaces $49–$300/mo tools. | $29–$99/mo — primary revenue |
| P2 | **Lifecycle Email Sequences** | Highest ROI growth lever. Replaces Customer.io for most indie teams. | $29–$79/mo — high-retention revenue |
| P3 | **Waitlist with Viral Mechanics** | Launch-phase acquisition. Top-of-funnel for GrowthOS itself. | Freemium — free basic, paid for viral mechanics |
| P4 | **Contextual Surveys / NPS → Auto-Actions** | The interop proof point. NPS → email → referral invite in one flow. | Bundled — the demo that sells the platform |

**Total monthly revenue target per customer: $49–$149/mo** (vs. $200–$2,000/mo they're currently paying across 6–10 tools).

**Integration effort for the customer: 1 SDK + 1 API key. Under 30 minutes to first value.**

### Phase 2 — Expansion (Month 5–9)

| Feature | Trigger to Build |
|---|---|
| Simple landing page component (email gate) | When 20+ customers ask for gated content |
| Lightweight onboarding checklist | When analytics show onboarding drop-off is a top customer complaint |
| Coupon/promo engine | When e-commerce customers join the platform |
| Employee amplification | When customers with 30+ employees are a meaningful segment |
| UTM landing pages | When attribution is a top-3 customer request |

### Phase 3 — Scale Features (Month 10+)

| Feature | Trigger to Build |
|---|---|
| Journey builder (visual canvas) | When enough customers have 3+ active modules and need cross-module orchestration |
| Milestone / Wrapped-style cards | When customers have 50K+ end-users and want viral advocacy |
| AI layer (send-time optimisation, churn prediction) | When event volume justifies ML investment |
| WhatsApp/SMS channels | When Indian fintech/e-commerce becomes a primary segment |

---

## The Anti-Patterns We're Deliberately Avoiding

1. **"Platform before product" trap.** Don't build a journey builder before anyone has journeys to build. Ship modules that work independently first. The orchestration comes when customers outgrow manual configuration.

2. **"Feature page" trap.** Don't build 20 shallow features to have a long feature comparison page. Build 5 features that are genuinely best-in-class. An indie founder evaluating GrowthOS vs. Rewardful + Customer.io + Typeform should think: "This referral widget is better than Rewardful AND it connects to my email sequences. I'm sold."

3. **"Enterprise creep" trap.** Don't build for companies with 500+ employees before you've nailed the indie/small SaaS experience. Enterprise needs (SOC2, SSO, custom SLAs, dedicated support) are expensive to deliver and distract from product velocity.

4. **"Open source everything" trap.** The SDK and embeddable components should be open source (drives adoption). The backend modules should be source-available (builds trust). But the hosted platform and commercial features are how we make money. PostHog's model (open core + cloud) is the right template.

5. **"Integration for integration's sake" trap.** Don't build 50 integrations. Build deep integration with PostHog (analytics), Stripe (billing events), and Slack (notifications). Three integrations done perfectly > 50 done superficially.

---

## The Business Model — Simplified

| Tier | Price | What's Included |
|---|---|---|
| **Free** | $0 | 500 contacts, basic waitlist, 1 survey, SDK access, PostHog event forwarding |
| **Growth** | $49/mo | 5,000 contacts, referral engine, lifecycle emails (3 sequences), surveys, embeddable widgets |
| **Scale** | $149/mo | 25,000 contacts, unlimited sequences, A/B testing, priority support, API access, employee amplification |
| **Custom** | Contact us | 100K+ contacts, dedicated support, SLA, custom modules |

**Key unit economics:**
- Marginal cost per customer: ~$3–$8/mo (email delivery + infrastructure)
- Target gross margin: 85%+
- Target CAC payback: <3 months (product-led growth — free tier → paid conversion)
- Target annual churn: <5% (contact graph + email sequences = high switching cost)

---

## One-Line Summary

**GrowthOS Phase 1 = Referrals + Email Sequences + Waitlist + NPS, all sharing one contact graph. Replace 5 tools with 1. Under $50/mo. Under 30 minutes to integrate.**

That's the pitch. Everything else is Phase 2 or later.
