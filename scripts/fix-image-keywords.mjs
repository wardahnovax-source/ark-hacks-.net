#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'ark ascended hacks', espWallhack: 'ark ascended hacks wallhack', aimbotCombat: 'ark ascended hacks aimbot', squadFight: 'ark ascended hacks', playerEsp: 'ark ascended hacks esp', headerArt: 'ark ascended hacks aimbot', cheatsPackage: 'ark ascended hacks radar', rebootFight: 'ark ascended hacks aimbot', battleRoyale: 'ark ascended hacks', battleRoyaleIsland: 'ark ascended hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'ARK ESP player tags hack'", "imageAlt: 'ark ascended hacks esp'"],
	["imageAlt: 'ARK ESP radar hack'", "imageAlt: 'ark ascended hacks radar'"],
	["imageAlt: 'ARK aimbot sniper kill'", "imageAlt: 'ark ascended hacks aimbot'"],
	["imageAlt: 'ARK aimbot skeleton targeting'", "imageAlt: 'ark ascended hacks aimbot'"],
	["imageAlt: 'ARK hacks ADS combat'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks setup PC activation'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks updates EAC maintenance'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks FAQ ESP aimbot'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks support license help'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'Undetected ark ascended hacks ESP wallhack'", "imageAlt: 'undetected ark ascended hacks'"],
	["imageAlt: 'ARK wallhack skeleton ESP'", "imageAlt: 'ark ascended hacks wallhack'"],
	["imageAlt: 'EAC bypass ark ESP aimbot'", "imageAlt: 'ark ascended hacks eac'"],
	["imageAlt: 'ARK hacks 2026 ESP aimbot'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks combat aimbot'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK cheat download ESP aimbot'", "imageAlt: 'ark ascended hacks download'"],
	["imageAlt: 'ARK mod menu ESP aimbot'", "imageAlt: 'ark ascended hacks mod menu'"],
	["imageAlt: 'ARK soft aim aimbot settings'", "imageAlt: 'ark ascended hacks soft aim'"],
	["imageAlt: 'Best ark ascended hacks 2026 ESP'", "imageAlt: 'best ark ascended hacks'"],
	["imageAlt: 'ARK aimbot hack combat'", "imageAlt: 'ark ascended hacks aimbot'"],
	["imageAlt: 'ARK ESP hack wallhack'", "imageAlt: 'ark ascended hacks esp'"],
	["imageAlt: 'ARK unlock all ESP aimbot guide'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks privacy policy'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks refund policy'", "imageAlt: 'ark ascended hacks'"],
	["imageAlt: 'ARK hacks terms of use'", "imageAlt: 'ark ascended hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `ARK ${meta.altKeyword}`")
	.join("imageAlt: 'ark ascended hacks'")
	.split("galleryTitle: `ARK Hacks ${topicName}`")
	.join("galleryTitle: 'ark ascended hacks'")
	.split("imageAlt: `ARK hacks ${kind} policy`")
	.join("imageAlt: 'ark ascended hacks'")
	.split("galleryTitle: `ARK Hacks ${kind} resources`")
	.join("galleryTitle: 'ark ascended hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
