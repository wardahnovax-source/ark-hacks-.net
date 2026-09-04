/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'ARK Hacks',
	/** Short product label if needed */
	shortName: 'ARK',
	/** Canonical origin — no trailing slash */
	url: 'https://arkhacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@arkhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fark-ascended',

	/** Game this template instance targets */
	game: 'ARK: Survival Ascended',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/ark-hacks-logo.webp',
	logoRaster: '/images/ark-hacks-logo.png',
	logoRasterWidth: 256,
	logoRasterHeight: 256,
	logoAlt: 'ARK Hacks logo',
	defaultOgImage: '/images/ark-hacks-hero-1920w.webp',
	heroImage: '/images/ark-hacks-hero-1920w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Tuned to ASA jungle / sunset hero (warm gold accent, deep green canvas).
	 */
	theme: {
		accent: '#e8900c',
		bg: '#07110c',
		soft: '#c9e6b8',
		deep: '#c2410c',
		hover: '#f5b041',
		panel: '#0a1610',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'ark ascended hacks',
		list: [
			'ark ascended hacks',
			'ARK hacks',
			'ARK cheat',
			'ARK aimbot',
			'ARK ESP',
			'ARK cheats PC',
			'best ARK hacks',
			'ARK cheat download',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /ark-ascended-hacks/ owns the head term. */
		homeTitle: 'ARK Hacks | Official Windows PC Site',
		homeDescription:
			'Official ARK Hacks site for Windows PC. Compare features, store plans, and live status — then buy aimbot, ESP, and combat tools in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — aimbot, player ESP, dino ESP, loot ESP, and patch updates after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same aimbot, ESP, and combat features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you join a server on Windows PC today.',
		/** Money page meta — primary target for "ark ascended hacks". */
		previewTitle: 'ARK Ascended Hacks | ESP & Aimbot',
		previewDescription:
			'Buy undetected ark ascended hacks for ARK: Survival Ascended on Windows PC. Aimbot, player ESP, dino ESP, and EAC patch updates in one license.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for ARK: Survival Ascended — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, ESP, dino filters, and patch updates for ARK: Survival Ascended on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — taming tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC survivors.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, and combat tools for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, player ESP, dino ESP, loot ESP, and combat tools, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected aimbot, player ESP, and dino ESP for ARK: Survival Ascended on Windows PC.',
		blogLabel: 'ARK Intel',
		ctaBuy: 'Buy Now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for ARK: Survival Ascended — aimbot, player ESP, dino ESP, loot ESP, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, dino filters, and support.',
		chipEsp: 'Player & Dino ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Loot ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-09-03',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/ark-screenshot-1.webp',
				title: 'ARK Ascended ESP overlay',
				caption: 'Player and dino ESP boxes with level and distance readouts',
			},
			{
				src: '/images/ark-screenshot-2.webp',
				title: 'ARK Ascended aimbot and combat tools',
				caption: 'Aimbot and combat helpers live in ARK: Survival Ascended',
			},
			{
				src: '/images/ark-screenshot-3.webp',
				title: 'ARK Ascended skeleton and dino ESP',
				caption: 'Skeleton ESP, player ESP, and dino stats through terrain',
			},
			{
				src: '/images/ark-hacks-hero-1920w.webp',
				title: 'ARK Hacks cinematic hero',
				caption: 'ARK: Survival Ascended landscape for ARK Hacks on Windows PC',
			},
			{
				src: '/images/ark-hacks-dino-esp.webp',
				title: 'Dino ESP and filters',
				caption: 'Alpha, boss, tameable, and flying dino filters',
			},
			{
				src: '/images/ark-hacks-esp.webp',
				title: 'Player ESP in ARK Ascended',
				caption: 'Compressed ESP screenshot for fast page loads',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
