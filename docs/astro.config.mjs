// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
	site: 'https://javajack.github.io',
	base: '/growthos',
	integrations: [
		starlight({
			title: 'GrowthOS',
			description: 'Replace 5+ disconnected growth tools with one integrated platform. Unified contact graph, referral engine, lifecycle emails, surveys, and more — for indie/small SaaS teams.',
			plugins: [
				starlightClientMermaid(),
				starlightImageZoom(),
				starlightLinksValidator({
					errorOnRelativeLinks: false,
				}),
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			head: [
				// Google Consent Mode v2 - MUST load BEFORE gtag.js (synchronous)
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}

						function isGDPRRegion() {
							const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
							const euTimezones = ['Europe/', 'Atlantic/Reykjavik', 'Atlantic/Azores', 'Atlantic/Madeira'];
							return euTimezones.some(zone => tz.startsWith(zone));
						}

						const isGDPR = isGDPRRegion();

						gtag('consent', 'default', {
							'ad_storage': 'denied',
							'ad_user_data': 'denied',
							'ad_personalization': 'denied',
							'analytics_storage': isGDPR ? 'denied' : 'granted',
							'functionality_storage': 'granted',
							'personalization_storage': 'denied',
							'security_storage': 'granted',
							'wait_for_update': 500,
						});

						window.__isGDPRRegion = isGDPR;
					`,
				},
				// Google Analytics 4 (shared GA property across javajack.github.io)
				{
					tag: 'script',
					attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-G986QLPFZ1' },
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-G986QLPFZ1', {
							'anonymize_ip': true,
							'cookie_flags': 'SameSite=None;Secure'
						});
					`,
				},
				// Yandex Webmaster verification (shared across javajack.github.io)
				{ tag: 'meta', attrs: { name: 'yandex-verification', content: '5281e40eca9463d2' } },
				// SEO meta tags
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'growth platform, SaaS growth tools, referral engine, lifecycle emails, NPS surveys, waitlist, contact graph, growth engineering, indie SaaS, product-led growth, marketing automation, unified growth',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Rakesh Waghela',
					},
				},
				// LLM optimization meta tags
				{ tag: 'meta', attrs: { name: 'ai-indexable', content: 'true' } },
				{ tag: 'meta', attrs: { name: 'ai-purpose', content: 'Unified growth platform replacing disconnected SaaS growth tools — product strategy and feature documentation' } },
				{ tag: 'meta', attrs: { name: 'ai-audience', content: 'SaaS founders, growth leads, product managers, growth engineers, investors' } },
				// Open Graph
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://javajack.github.io/growthos/og-image.svg' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:type', content: 'image/svg+xml' } },
				// Twitter / X
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://javajack.github.io/growthos/og-image.svg' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:site', content: '@webiyo' } },
				// Cloudflare Web Analytics (shared across javajack.github.io)
				{ tag: 'script', attrs: { defer: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "7ce325bb227e4b42a8406f369ff4e788"}' } },
				// Structured Data (JSON-LD)
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'SoftwareApplication',
								name: 'GrowthOS',
								url: 'https://javajack.github.io/growthos/',
								applicationCategory: 'BusinessApplication',
								description: 'Unified growth platform for indie/small SaaS teams. Replace 5+ disconnected growth tools with one integrated platform.',
								operatingSystem: 'Web',
								offers: {
									'@type': 'AggregateOffer',
									lowPrice: '0',
									highPrice: '149',
									priceCurrency: 'USD',
								},
								author: { '@id': '#rakesh' },
							},
							{
								'@type': 'Product',
								name: 'GrowthOS — Unified Growth Platform',
								description: 'Replace 5+ disconnected growth tools with one integrated platform. Referral engine, lifecycle emails, viral waitlist, NPS surveys, and embeddable components.',
								brand: { '@type': 'Brand', name: 'GrowthOS' },
								category: 'Growth Marketing Software',
							},
							{
								'@type': 'Person',
								'@id': '#rakesh',
								name: 'Rakesh Waghela',
								url: 'https://www.linkedin.com/in/rakeshwaghela',
								sameAs: [
									'https://x.com/webiyo',
									'https://www.linkedin.com/in/rakeshwaghela',
									'https://topmate.io/rakeshwaghela',
								],
							},
						],
					}),
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/javajack' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/webiyo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakeshwaghela' },
				{ icon: 'external', label: 'Book a Consultation', href: 'https://topmate.io/rakeshwaghela' },
			],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'GrowthOS — Overview', slug: 'index' },
					],
				},
				{
					label: 'Vision',
					items: [
						{ label: 'The Problem', slug: 'vision/problem' },
						{ label: 'The Solution', slug: 'vision/solution' },
						{ label: 'Target Customer', slug: 'vision/target-customer' },
						{ label: 'Market Sizing', slug: 'vision/market-sizing' },
					],
				},
				{
					label: 'Platform',
					items: [
						{ label: 'Architecture', slug: 'platform/architecture' },
						{ label: 'Interoperability', slug: 'platform/interoperability' },
						{ label: 'Developer Experience', slug: 'platform/developer-experience' },
						{ label: 'PostHog Integration', slug: 'platform/posthog-integration' },
					],
				},
				{
					label: 'Business',
					items: [
						{ label: 'Pricing', slug: 'business/pricing' },
						{ label: 'Competitive Landscape', slug: 'business/competitive-landscape' },
						{ label: 'Unit Economics', slug: 'business/unit-economics' },
					],
				},
				{
					label: 'Phase 1 — MLP',
					items: [
						{ label: 'Overview', slug: 'phase-1/overview' },
						{ label: 'Unified Contact Graph', slug: 'phase-1/unified-contact-graph' },
						{ label: 'Referral Engine', slug: 'phase-1/referral-engine' },
						{ label: 'Lifecycle Emails', slug: 'phase-1/lifecycle-emails' },
						{ label: 'Viral Waitlist', slug: 'phase-1/viral-waitlist' },
						{ label: 'Surveys & NPS', slug: 'phase-1/surveys-nps' },
					],
				},
				{
					label: 'Phase 2 — Platform Maturity',
					items: [
						{ label: 'Overview', slug: 'phase-2/overview' },
						{ label: 'Segment Builder', slug: 'phase-2/segment-builder' },
						{ label: 'Gated Content', slug: 'phase-2/gated-content' },
						{ label: 'Onboarding Checklist', slug: 'phase-2/onboarding-checklist' },
						{ label: 'UTM Attribution', slug: 'phase-2/utm-attribution' },
						{ label: 'Broadcast Emails', slug: 'phase-2/broadcast-emails' },
						{ label: 'Coupon Engine', slug: 'phase-2/coupon-engine' },
						{ label: 'Webhook Engine', slug: 'phase-2/webhook-engine' },
						{ label: 'Employee Amplification', slug: 'phase-2/employee-amplification' },
						{ label: 'In-App Nudges', slug: 'phase-2/in-app-nudges' },
						{ label: 'Review Prompts', slug: 'phase-2/review-prompts' },
						{ label: 'Tiered Referrals', slug: 'phase-2/tiered-referrals' },
						{ label: 'Welcome Sequences', slug: 'phase-2/welcome-sequences' },
						{ label: 'Contact Scoring', slug: 'phase-2/contact-scoring' },
						{ label: 'Stripe Integration', slug: 'phase-2/stripe-integration' },
					],
				},
				{
					label: 'Phase 3 — Scale',
					items: [
						{ label: 'Overview', slug: 'phase-3/overview' },
						{ label: 'Social Proof Widget', slug: 'phase-3/social-proof-widget' },
						{ label: 'Cohort Analytics', slug: 'phase-3/cohort-analytics' },
						{ label: 'A/B Testing', slug: 'phase-3/ab-testing' },
						{ label: 'Journey Builder', slug: 'phase-3/journey-builder' },
						{ label: 'WhatsApp', slug: 'phase-3/whatsapp' },
						{ label: 'SMS', slug: 'phase-3/sms' },
						{ label: 'Push Notifications', slug: 'phase-3/push-notifications' },
						{ label: 'Milestone Cards', slug: 'phase-3/milestone-cards' },
						{ label: 'Ambassador Program', slug: 'phase-3/ambassador-program' },
						{ label: 'Testimonial Collector', slug: 'phase-3/testimonial-collector' },
						{ label: 'Landing Page Builder', slug: 'phase-3/landing-page-builder' },
						{ label: 'Upgrade Prompts', slug: 'phase-3/upgrade-prompts' },
						{ label: 'Slack Integration', slug: 'phase-3/slack-integration' },
					],
				},
				{
					label: 'Phase 4 — AI Layer',
					items: [
						{ label: 'Overview', slug: 'phase-4/overview' },
						{ label: 'Send-Time Optimization', slug: 'phase-4/send-time-optimization' },
						{ label: 'Churn Prediction', slug: 'phase-4/churn-prediction' },
						{ label: 'Auto-Generated Copy', slug: 'phase-4/auto-copy' },
						{ label: 'Module Recommendations', slug: 'phase-4/module-recommendations' },
					],
				},
				{
					label: 'Killed Features',
					items: [
						{ label: 'Discounted Ideas', slug: 'killed/discounted-ideas' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'Master Scorecard', slug: 'roadmap/master-scorecard' },
						{ label: 'Anti-Patterns', slug: 'roadmap/anti-patterns' },
					],
				},
			],
		}),
	],
});
