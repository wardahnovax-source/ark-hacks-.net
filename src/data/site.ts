export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/ark-ascended-hacks/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/ark-ascended-hacks/' },
	{ label: fillBrandTokens('{game} esp'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/ark-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/ark-ascended-hacks/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} dino ESP'), href: '/ark-dino-esp/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/ark-ascended-hacks/' },
	{ label: 'Aimbot', href: '/ark-aimbot/' },
	{ label: 'ESP', href: '/ark-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/ark-ascended-hacks/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/ark-aimbot/' },
	{ label: fillBrandTokens('{game} dino ESP'), href: '/ark-dino-esp/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for ARK: Survival Ascended on Windows PC. It includes aimbot, player ESP, dino ESP, loot ESP, and combat tools, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-ark-ascended-hacks',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected aimbot, ESP, and combat tools for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you join. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-ark-ascended-hacks-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work on PvP and PvE servers?',
		answer:
			'Yes. Aimbot and ESP are built for {game} — reading players and dinos, spotting loot and crates, and staying aware near bases.',
		slug: 'pvp-and-pve-servers',
		seoTitle: 'PvP and PvE Support | FAQ',
		seoDescription:
			'{brand} works on PvP and PvE servers — aimbot, ESP, and dino filters for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, aimbot, or combat tools?',
		answer:
			'{brand} bundles player ESP, dino ESP, loot ESP, skeleton ESP, aimbot, no recoil, no spread, rapid fire, and dino filters in one license. See Features for the full list.',
		slug: 'esp-aimbot-or-combat-tools',
		seoTitle: 'What Is Included: ESP, Aimbot, Combat | FAQ',
		seoDescription:
			'One {brand} license includes aimbot, player ESP, dino ESP, loot ESP, and combat tools for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an ARK: Survival Ascended or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an ARK: Survival Ascended or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows players, dinos, and loot through walls. {brand} includes distance readouts, crate cues, and toggleable categories.',
		slug: 'what-is-an-ark-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals players, dinos, and loot through walls — with distance, crates, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include dino ESP?',
		answer:
			'Yes. {brand} includes dino ESP with filters for tameable, flying, alpha, boss, carnivore, herbivore, and aggro dinos.',
		slug: 'does-ark-hacks-include-dino-esp',
		seoTitle: 'Does {brand} Include Dino ESP? | FAQ',
		seoDescription:
			'Yes — {brand} includes dino ESP with tameable, flying, alpha, and boss filters.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you play.',
		slug: 'eac-anti-cheat-and-ark-ascended-hacks',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with aimbot, ESP, and combat tools in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-ark-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — aimbot, ESP, and combat tools in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'RaptorKingASA',
		rating: 5,
		text: 'Aimbot in ARK Hacks feels smooth on The Island. The menu took a few minutes to learn. After that, PvP fights felt easy.',
		short: 'Aimbot in ARK Hacks feels smooth on The Island.',
		slug: 'ark-aimbot-review-raptorkingasa',
		seoTitle: 'Aimbot Review by @RaptorKingASA — 5/5 | {brand}',
		seoDescription: '@RaptorKingASA rates {brand} aimbot 5/5 for The Island on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'tameFinder99',
		rating: 4,
		text: 'Dino ESP helps on taming runs. You can see high-level rexes before you waste traps. Still worth the price for ARK Hacks.',
		short: 'Dino ESP helps on taming runs. Still worth the price for ARK Hacks.',
		slug: 'ark-dino-esp-review-tamefinder99',
		seoTitle: 'Dino ESP Review by @tameFinder99 — 4/5 | {brand}',
		seoDescription: '@tameFinder99 rates {brand} dino ESP 4/5 for taming runs on Windows PC.',
		date: '2026-07-19',
		tag: 'Dino ESP',
	}),
	reviewMeta({
		handle: 'tekRaider_',
		rating: 5,
		text: 'I moved to ARK Hacks this season. Setup was simple. It stayed up after the last EAC update when my old cheat failed. Lifetime was a good buy.',
		short: 'ARK Hacks stayed up after the last EAC update. Lifetime was a good buy.',
		slug: 'ark-eac-update-review-tekraider',
		seoTitle: 'Update Review by @tekRaider_ — 5/5 | {brand}',
		seoDescription: '@tekRaider_ rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'noRecoilNox',
		rating: 4,
		text: 'No recoil and aimbot in ARK Hacks are easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'No recoil and aimbot in ARK Hacks are easy to tune on PC.',
		slug: 'ark-no-recoil-review-norecoilnox',
		seoTitle: 'No Recoil Review by @noRecoilNox — 4/5 | {brand}',
		seoDescription: '@noRecoilNox rates {brand} no recoil 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'No recoil',
	}),
	reviewMeta({
		handle: 'caveCrawler07',
		rating: 3,
		text: 'ARK Hacks works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. Player ESP in caves is solid.',
		short: 'Player ESP in caves is solid. Support helped after a slow first launch.',
		slug: 'ark-cheat-setup-review-cavecrawler07',
		seoTitle: 'Setup Review by @caveCrawler07 — 3/5 | {brand}',
		seoDescription: '@caveCrawler07 rates {brand} setup 3/5. Player ESP in caves is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'crateHunterx',
		rating: 5,
		text: 'Loot ESP and supply crate ESP in ARK Hacks pay for the monthly plan. Distance markers make early runs faster.',
		short: 'Loot ESP and supply crate ESP in ARK Hacks pay for the monthly plan.',
		slug: 'ark-loot-esp-review-cratehunterx',
		seoTitle: 'Loot ESP Review by @crateHunterx — 5/5 | {brand}',
		seoDescription: '@crateHunterx rates {brand} loot ESP 5/5 for early runs on Windows PC.',
		date: '2026-08-01',
		tag: 'Loot ESP',
	}),
	reviewMeta({
		handle: 'alphaGrind42',
		rating: 4,
		text: 'I have used ARK Hacks for months. Alpha dino ESP plus aimbot helps on boss routes. Status updates after EAC patches could be clearer, but it came back the next day.',
		short: 'Alpha dino ESP plus aimbot in ARK Hacks helps on boss routes.',
		slug: 'ark-alpha-esp-review-alphagrind42',
		seoTitle: 'Alpha ESP by @alphaGrind42 — 4/5 | {brand}',
		seoDescription: '@alphaGrind42 rates {brand} alpha dino ESP 4/5 for boss routes on Windows PC.',
		date: '2026-07-07',
		tag: 'Alpha ESP',
	}),
	reviewMeta({
		handle: 'baseWatchASA',
		rating: 5,
		text: 'Skeleton ESP in ARK Hacks saved me near enemy bases. Seeing the third party early in duos is huge. Boxes plus skeleton look clean.',
		short: 'Skeleton ESP in ARK Hacks saved me near enemy bases.',
		slug: 'ark-skeleton-esp-review-basewatchasa',
		seoTitle: 'Skeleton ESP Review by @baseWatchASA — 5/5 | {brand}',
		seoDescription: '@baseWatchASA rates {brand} skeleton ESP 5/5 near bases on Windows PC.',
		date: '2026-07-28',
		tag: 'Skeleton ESP',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. ARK Hacks posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'ARK Hacks was back the next morning after a patch.',
		slug: 'ark-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	}),
	reviewMeta({
		handle: 'longShotASA_',
		rating: 5,
		text: 'Aimbot plus player ESP in ARK Hacks is excellent for long shots. Simple and strong.',
		short: 'Aimbot plus player ESP in ARK Hacks is excellent.',
		slug: 'ark-aimbot-esp-review-longshotasa',
		seoTitle: 'Aimbot ESP by @longShotASA_ — 5/5 | {brand}',
		seoDescription: '@longShotASA_ rates {brand} aimbot with ESP 5/5 on Windows PC.',
		date: '2026-08-01',
		tag: 'Aimbot',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
