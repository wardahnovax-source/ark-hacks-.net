import { siteConfig } from './site';

/** Screenshots used across product pages — ARK Ascended hacks keyword alts. */
export const arkImages = {
	hero: '/images/ark-hacks-hero-1536w.webp',
	espWallhack: '/images/ark-hacks-esp.webp',
	aimbotCombat: '/images/ark-hacks-aimbot.webp',
	aimbotSkeleton: '/images/ark-hacks-aimbot-view.webp',
	playerEsp: '/images/ark-hacks-dino-esp.webp',
	cheatsCombat: '/images/ark-hacks-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to product screenshots */
	cover: '/images/ark-hacks-raid.webp',
	loadoutBuilder: '/images/ark-hacks-dino-esp.webp',
	squadFight: '/images/ark-hacks-aimbot-view.webp',
	cheatsPackage: '/images/ark-hacks-esp.webp',
	headerArt: '/images/ark-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/ark-hacks-raid.webp',
	extractFight: '/images/ark-hacks-aimbot.webp',
	rebootFight: '/images/ark-hacks-aimbot.webp',
	scavRunCombat: '/images/ark-hacks-wallhack.webp',
	scavRunMode: '/images/ark-hacks-esp.webp',
	battleRoyaleIsland: '/images/ark-hacks-esp.webp',
	raidMap: '/images/ark-hacks-esp.webp',
	product: [
		{ src: '/images/ark-screenshot-1.webp', alt: 'ARK Ascended hacks ESP showing player and dino boxes' },
		{ src: '/images/ark-screenshot-2.webp', alt: 'ARK Ascended aimbot and combat overlay in gameplay' },
		{ src: '/images/ark-screenshot-3.webp', alt: 'ARK Ascended player ESP, dino ESP, and skeleton ESP live' },
		{ src: '/images/ark-hacks-esp.webp', alt: 'Player ESP boxes and distance readouts on The Island' },
		{ src: '/images/ark-hacks-wallhack.webp', alt: 'Wallhack outlines for players and dinos' },
		{ src: '/images/ark-hacks-aimbot.webp', alt: 'Aimbot FOV and combat helpers for ARK Ascended' },
	],
	gallery: [
		{ src: '/images/ark-screenshot-1.webp', alt: 'ARK Ascended hacks ESP overlay in gameplay', featured: true },
		{ src: '/images/ark-screenshot-2.webp', alt: 'ARK Ascended aimbot and combat tools screenshot' },
		{ src: '/images/ark-screenshot-3.webp', alt: 'ARK Ascended player ESP, dino ESP, and skeleton ESP' },
		{ src: '/images/ark-hacks-dino-esp.webp', alt: 'Dino ESP with level and distance filters' },
		{ src: '/images/ark-hacks-wallhack.webp', alt: 'Through-wall visibility during an ASA fight' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/ark-screenshot-1.webp', title: '', caption: '' },
		{ src: '/images/ark-screenshot-2.webp', title: '', caption: '' },
		{ src: '/images/ark-screenshot-3.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-dino-esp.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-hero-1024w.webp', title: '', caption: '' },
	],
} as const;
