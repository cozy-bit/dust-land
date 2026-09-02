import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialIcons } from '../ui/SocialIcons';
import logo from '../../assets/images/logo-dustland.png';

export const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t('footer.terms'), to: '/#terms' },
    { label: t('footer.cookies'), to: '/cookies' },
    { label: t('footer.privacy'), to: '/#privacy' },
    { label: t('footer.press'), to: '/#press' },
    { label: t('footer.contact'), to: '/#contact' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#141418] to-[#0a0a0c] pb-10 pt-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
        <Link to="/" aria-label="Dustland">
          <img src={logo} alt="Dustland" className="h-12 w-auto" />
        </Link>

        <SocialIcons names={['Discord', 'YouTube', 'Facebook', 'Telegram', 'Twitter', 'Instagram', 'Reddit', 'Mail']} className="mt-7 flex-wrap justify-center" />

        <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
          {links.map((l, i) => (
            <span key={l.to} className="flex items-center gap-2.5">
              <Link to={l.to} className="transition-colors hover:text-orange-400">
                {l.label}
              </Link>
              {i < links.length - 1 && <span className="text-zinc-600">|</span>}
            </span>
          ))}
        </nav>

        <p className="mt-6 max-w-xl text-[11px] uppercase leading-relaxed tracking-wide text-zinc-500">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};
