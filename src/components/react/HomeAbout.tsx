import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const quickLinks = [
	{ href: '/ark-ascended-hacks/', labelKey: 'home.aboutPillar', hintKey: 'home.aboutPillarHint' },
	{ href: '/ark-esp/', labelKey: 'home.aboutEsp', hintKey: 'home.aboutEspHint' },
	{ href: '/ark-aimbot/', labelKey: 'home.aboutAimbot', hintKey: 'home.aboutAimbotHint' },
	{ href: '/updates/', labelKey: 'home.aboutUndetected', hintKey: 'home.aboutUndetectedHint' },
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home-about" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title" className="home-about__title">
					{t('home.aboutTitle')}
				</h2>
				<p className="home-about__lede">{t('home.aboutP1')}</p>
			</header>

			<div className="home-about__actions">
				<a className="home-about__cta home-about__cta--primary" href="/pricing/">
					{t('home.aboutStoreCta')}
				</a>
				<a className="home-about__cta home-about__cta--ghost" href="/updates/">
					{t('home.aboutStatusCta')}
				</a>
			</div>

			<div className="home-about__grid" role="list">
				{quickLinks.map((link) => (
					<a key={link.href} className="home-about__card" href={link.href} role="listitem">
						<span className="home-about__card-label">{t(link.labelKey)}</span>
						<span className="home-about__card-hint">{t(link.hintKey)}</span>
						<span className="home-about__card-arrow" aria-hidden="true" />
					</a>
				))}
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
