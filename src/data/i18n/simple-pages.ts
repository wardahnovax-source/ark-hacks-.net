import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP overlays',
				paragraphs: [
					'See players, dinos, loot, and supply crates through terrain with distance and level readouts.',
					'Use filters so the overlay stays clear in caves, bases, and busy PvP fights.',
				],
				list: [
					'Player ESP & skeleton ESP',
					'Dino ESP, boss ESP, alpha dino ESP',
					'Item, loot, and supply crate ESP',
				],
			},
			{
				h2: 'Aimbot & combat',
				paragraphs: [
					'Aim help you can tune for guns and dinos.',
					'Add no recoil, no spread, rapid fire, FOV changer, zoom, and crosshair when you need them.',
				],
				list: ['Smooth aimbot & FOV', 'No recoil / no spread / rapid fire', 'Zoom and crosshair'],
			},
			{
				h2: 'Dino filters',
				paragraphs: [
					'Filter tameable, flying, carnivore, herbivore, aggro, boss, and alpha dinos.',
					'Find the right tame without flooding the screen.',
				],
				list: ['Tameable & flying filters', 'Alpha and boss filters', 'Aggro / diet filters'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches.',
					'Check Status before you play after a patch day.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same aimbot, ESP, and combat tools on monthly and lifetime plans.',
				],
				list: ['Aimbot, ESP, and dino filters', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'ARK Ascended Hacks overview',
		ctaSecondaryHref: '/ark-ascended-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 3 Sep 2026 the package is online for ARK: Survival Ascended on Windows PC. We post a new note here when a game or Easy Anti-Cheat patch needs a rebuild.',
					'If Status is green, you can play. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every session after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'ARK Ascended Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for ARK: Survival Ascended on Windows PC — built for PvP and PvE servers.',
				],
				list: [
					'Aimbot with FOV and smooth aim',
					'Player, dino, loot, and crate ESP',
					'Skeleton, boss, and alpha ESP',
					'No recoil, no spread, rapid fire',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for ASA survival',
				paragraphs: [
					'Spot players before they push your base, find high-level tames, and track loot and supply crates. Tune aimbot and combat tools for guns or dinos.',
				],
				list: [
					'<a href="/ark-esp/">ESP guide</a>',
					'<a href="/ark-aimbot/">Aimbot controls</a>',
					'<a href="/ark-dino-esp/">Dino ESP</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'ark-esp': page({
		title: 'ARK ESP | {brand}',
		description:
			'ARK ESP and wallhack for ARK: Survival Ascended on Windows PC — player boxes, dino levels, loot filters, and clear overlays.',
		h1: 'ESP',
		intro: 'See players, dinos, and loot through walls on ASA servers. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'ARK Ascended Hacks overview',
		ctaSecondaryHref: '/ark-ascended-hacks/',
		galleryTitle: 'ESP in game',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Boxes, distance, levels, and filters for players, dinos, bosses, loot, and crates.'],
				list: ['Player ESP & skeleton ESP', 'Dino, boss, and alpha ESP', 'Item, loot, and supply crate ESP'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear caves, beaches, and base raids without flooding the screen.'],
				list: ['Tune opacity', 'Filter noise', 'Pair with dino filters'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and combat tools in one plan.'],
				list: [
					'<a href="/ark-ascended-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'ark-aimbot': page({
		title: 'ARK Aimbot | {brand}',
		description:
			'ARK aimbot for ARK: Survival Ascended on Windows PC — FOV, smoothness, prediction, and combat helpers you can tune.',
		h1: 'Aimbot',
		intro: 'Aimbot and aim assist you can tune for ASA. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'ARK Ascended Hacks overview',
		ctaSecondaryHref: '/ark-ascended-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, and prediction before you fight.'],
				list: ['Smooth aimbot strength', 'FOV and prediction', 'Hotkeys mid-session'],
			},
			{
				h2: 'Combat helpers',
				paragraphs: ['Add no recoil, no spread, rapid fire, zoom, and crosshair when you need them.'],
				list: ['No recoil / no spread', 'Rapid fire', 'FOV changer, zoom, crosshair'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and dino filters in one license.'],
				list: [
					'<a href="/ark-ascended-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'ARK Dino ESP | {brand}',
		description:
			'ARK dino ESP and filters for ARK: Survival Ascended on Windows PC — tameable, flying, alpha, and boss dinos without clutter.',
		h1: 'Dino ESP',
		intro: 'Dino ESP with filters for tameable, flying, alpha, and boss dinos. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'ARK Ascended Hacks overview',
		ctaSecondaryHref: '/ark-ascended-hacks/',
		galleryTitle: 'Dino ESP overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Dino name, level, distance, and category filters for PvP and PvE.'],
				list: ['Tameable & flying filters', 'Alpha and boss filters', 'Carnivore / herbivore / aggro'],
			},
			{
				h2: 'With player ESP',
				paragraphs: ['Use dino ESP to find tames. Use player ESP when you push a fight.'],
				list: [
					'<a href="/ark-esp/">ESP guide</a>',
					'<a href="/ark-ascended-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
