#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → ARK Hacks (ARK: Survival Ascended).
 * Domain: arkhacks.net
 * Run from project root: node scripts/adapt-ark.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-radar-hack', 'ark-dino-esp'],
	['undetected-tarkov-cheats', 'undetected-ark-cheats'],
	['tarkov-cheats-2026', 'ark-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'ark-ascended-hacks'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['best-tarkov-cheats', 'best-ark-cheats'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://arkhacks.net'],
	['https://www.tarkovcheats.org', 'https://www.arkhacks.net'],
	['www.tarkovcheats.org', 'www.arkhacks.net'],
	['tarkovcheats.org', 'arkhacks.net'],
	['support@tarkovcheats.org', 'support@arkhacks.net'],
	['/products/escape-from-tarkov', '/products/ark-ascended'],
	['/products/tarkov', '/products/ark-ascended'],
	['project-name=besttarkovcheats', 'project-name=arkhacks'],
	['project-name=tarkovcheats', 'project-name=arkhacks'],
	['name = "besttarkovcheats"', 'name = "arkhacks"'],
	['name = "tarkovcheats"', 'name = "arkhacks"'],
	['"name": "tarkov-cheats"', '"name": "ark-hacks"'],
	['tarkov-esp-player-tags', 'ark-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'ark-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'ark-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'ark-aimbot-skeleton'],
	['tarkov-esp-radar', 'ark-esp-radar'],
	['tarkov-cheats-combat', 'ark-cheats-combat'],
	['tarkov-cheats-logo', 'ark-hacks-logo'],
	['tarkov-hero-banner', 'ark-hero-banner'],
	['tarkov-hero-ghost', 'ark-hero-ghost'],
	['tarkov-hero-source', 'ark-hero-source'],
	['tarkov-cheats-hero', 'ark-hacks-hero'],
	['tarkov-cheats-wallhack', 'ark-hacks-wallhack'],
	['tarkov-cheats-aimbot-view', 'ark-hacks-aimbot-view'],
	['tarkov-cheats-aimbot', 'ark-hacks-aimbot'],
	['tarkov-cheats-radar', 'ark-hacks-dino-esp'],
	['tarkov-cheats-raid', 'ark-hacks-raid'],
	['tarkov-cheats-esp', 'ark-hacks-esp'],
	['undetected-tarkov-cheats', 'undetected-ark-cheats'],
	['best-tarkov-cheats', 'best-ark-cheats'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-cheats-2026', 'ark-cheats-2026'],
	['tarkov-radar-hack', 'ark-dino-esp'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-cheats', 'ark-ascended-hacks'],
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'ark-ascended-hacks'],
	['Escape from Tarkov', 'ARK: Survival Ascended'],
	['Tarkov Cheats', 'ARK Hacks'],
	['Tarkov cheats', 'ARK hacks'],
	['Tarkov cheat', 'ARK cheat'],
	['Tarkov hacks', 'ARK hacks'],
	['Tarkov hack', 'ARK hack'],
	['TarkovCheatsSite', 'ArkHacksSite'],
	['Tarkov Intel', 'ARK Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat (EAC)'],
	['BattlEye maintenance', 'EAC maintenance'],
	['BattlEye bypass', 'EAC bypass'],
	['BattlEye Bypass', 'EAC Bypass'],
	['BattlEye patches', 'EAC patches'],
	['BattlEye patch', 'EAC patch'],
	['BattlEye updates', 'EAC updates'],
	['BattlEye update', 'EAC update'],
	['after BattlEye', 'after EAC'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'ark ascended hacks'],
	['tarkov cheat', 'ark cheat'],
	['tarkov hacks', 'ark hacks'],
	['tarkov hack', 'ark hack'],
	['Customs, Woods, and Streets of Tarkov', 'The Island, Scorched Earth, and Aberration'],
	['Customs, Woods and Streets of Tarkov', 'The Island, Scorched Earth and Aberration'],
	['PMC raids and Scav runs', 'PvP and PvE servers'],
	['PMC & Scav', 'PvP & PvE'],
	['PMC raids', 'PvP sessions'],
	['Scav runs', 'taming runs'],
	['Scav run', 'taming run'],
	['PMCs and Scavs', 'players and dinos'],
	['PMCs', 'players'],
	['Scavs', 'dinos'],
	['Scav', 'dino'],
	['PMC', 'player'],
	['near extracts', 'near bases'],
	['loot and extract', 'loot and crate'],
	['extract cues', 'crate cues'],
	['extract holds', 'base holds'],
	['extract approaches', 'base approaches'],
	['extract timer', 'day cycle'],
	['tarkovImages', 'arkImages'],
	["from './tarkov'", "from './ark'"],
	["from '../data/tarkov'", "from '../data/ark'"],
	["from '../../data/tarkov'", "from '../../data/ark'"],
	['fetch-tarkov-images', 'fetch-ark-images'],
	['tarkov-hack-overlays', 'ark-hack-overlays'],
	['trucos-tarkov', 'trucos-ark'],
	['triche-tarkov', 'triche-ark'],
	['cheats-tarkov', 'cheats-ark'],
	['trucchi-tarkov', 'trucchi-ark'],
	['cheaty-tarkov', 'cheaty-ark'],
	['chity-tarkov', 'chity-ark'],
	['chitov-tarkov', 'chitov-ark'],
	['chitiv-tarkov', 'chitiv-ark'],
	['cheatow-tarkov', 'cheatow-ark'],
	['hile-tarkov', 'hile-ark'],
	['tarkov-hile', 'ark-hile'],
	['tarkov-esp-chity', 'ark-esp-chity'],
	['tarkov-aimbot-chity', 'ark-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-ark-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-ark-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-ark-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-ark'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-ark'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-ark-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-ark'],
	['cheats-tarkov-nedetectabile', 'cheats-ark-nedetectabile'],
	['basta-tarkov-cheats', 'basta-ark-cheats'],
	['tarkov-cheats-funktionen', 'ark-cheats-funktionen'],
	['tarkov-cheats-functies', 'ark-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-ark'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-ark'],
	['recursos-cheats-tarkov', 'recursos-cheats-ark'],
	['escape-from-tarkov', 'ark-survival-ascended'],
	['Buy Tarkov Cheats', 'Buy ARK Hacks'],
	['Tarkov', 'ARK'],
	['tarkov', 'ark'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-ark.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'ark.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → ark.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-ark-images.mjs'],
		['tarkov-hack-overlays.mjs', 'ark-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-ark-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'ark-aimbot': 'ark-aimbot',
		'ark-esp': 'ark-esp',
		'ark-wallhack': 'wallhack',
		'ark-dino-esp': 'radar',
		'undetected-ark-cheats': 'undetected',
		'ark-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'ark-ascended-hacks': 'hacks',
		'ark-cheat-download': 'cheat-download',
		'ark-mod-menu': 'mod-menu',
		'ark-soft-aim': 'soft-aim',
		'best-ark-cheats': 'best-cheats',
		'ark-aimbot-hack': 'aimbot-hack',
		'ark-esp-hack': 'esp-hack',
		'ark-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		let newName = file
			.replace(/tarkov-cheats-logo/g, 'ark-hacks-logo')
			.replace(/tarkov-cheats-hero/g, 'ark-hacks-hero')
			.replace(/tarkov-cheats-wallhack/g, 'ark-hacks-wallhack')
			.replace(/tarkov-cheats-aimbot-view/g, 'ark-hacks-aimbot-view')
			.replace(/tarkov-cheats-aimbot/g, 'ark-hacks-aimbot')
			.replace(/tarkov-cheats-radar/g, 'ark-hacks-dino-esp')
			.replace(/tarkov-cheats-raid/g, 'ark-hacks-raid')
			.replace(/tarkov-cheats-esp/g, 'ark-hacks-esp')
			.replace(/tarkov-cheats-combat/g, 'ark-cheats-combat')
			.replace(/tarkov-esp-player-tags/g, 'ark-esp-player-tags')
			.replace(/tarkov-wallhack-skeleton/g, 'ark-wallhack-skeleton')
			.replace(/tarkov-aimbot-sniper/g, 'ark-aimbot-sniper')
			.replace(/tarkov-aimbot-skeleton/g, 'ark-aimbot-skeleton')
			.replace(/tarkov-esp-radar/g, 'ark-esp-radar')
			.replace(/tarkov-hero-banner/g, 'ark-hero-banner')
			.replace(/tarkov-hero-ghost/g, 'ark-hero-ghost')
			.replace(/tarkov-hero-source/g, 'ark-hero-source')
			.replace(/tarkov/g, 'ark');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → ARK Hacks (arkhacks.net)...\n');
	await renamePageDirs();
	await renameDataTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, images, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
