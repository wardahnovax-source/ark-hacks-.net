import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	return text.length <= 60 ? text : `${text.slice(0, 57).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — aimbot, ESP, and combat tools for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, player ESP, dino ESP, and loot ESP, with {antiCheat} maintenance after patches.',
	heroLede: 'Hacks and cheats available — 0% detection.',
	blogLabel: '{game} Intel',
	ctaBuy: 'Buy now',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
	previewIntro: 'A quick look at {brand} — aimbot, ESP, dino filters, and updates after patches.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro: 'Real feedback from {brand} buyers — aimbot, ESP, dino filters, and support.',
	chipEsp: 'Player & Dino ESP',
	chipAim: 'Aimbot',
	chipRadar: 'Loot ESP',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: '{brand} | Undetected {primaryKeyword}',
	homeDescription:
		'{primaryKeyword} for Windows PC — aimbot, ESP, and combat tools with {antiCheat} maintenance. Compare plans and buy.',
	featuresTitle: '{game} Features | {brand}',
	featuresDescription:
		'Everything in one {game} license for Windows PC — aimbot, ESP, dino filters, and patch updates.',
	storeTitle: '{game} Store | {brand}',
	storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
	statusTitle: '{game} Status | {brand}',
	statusDescription:
		'Live status for {brand} after {game} or {antiCheat} patches. Check before you join.',
	previewTitle: '{game} Preview | {brand}',
	previewDescription:
		'Quick preview of {brand} — aimbot, ESP, dino filters, and updates after {game} patches.',
	setupTitle: '{game} Setup | {brand}',
	setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
	supportTitle: '{game} Support | {brand}',
	supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
	faqTitle: '{game} FAQ | {brand}',
	faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
	reviewsTitle: '{brand} Reviews | Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — aimbot, ESP, dino filters, and patch updates on Windows PC.',
	blogTitle: '{game} Intel | {brand}',
	blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		esp: [
			'Player ESP with level and distance',
			'Dino ESP with level and tameable filters',
			'Item ESP and loot ESP',
			'Supply crate ESP',
			'Skeleton ESP',
			'Boss ESP and alpha dino ESP',
		],
		aimbot: [
			'Aimbot with FOV and prediction',
			'Smooth aim controls',
			'No recoil and no spread',
			'Rapid fire',
			'FOV changer, zoom, and crosshair',
		],
		radar: ['Dino filters', 'Carnivore / herbivore / aggro filters', 'Flying and tameable dino filters'],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
			'Setup guide and support',
		],
	},
} as const;
