import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo-dustland.png';

const ARROW =
  'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)';

const NAV = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.game', to: '/#game' },
  { key: 'nav.features', to: '/#features' },
];

const Tab = ({ children, className = '', fillClass = 'bg-[#101014]', ...props }) => (
  <div
    style={{ clipPath: ARROW }}
    className={`bg-white/25 p-px ${className}`}
    {...props}
  >
    <div
      style={{ clipPath: ARROW }}
      className={`flex h-full items-center justify-center px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] ${fillClass}`}
    >
      {children}
    </div>
  </div>
);

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const lang = i18n.language?.startsWith('ru') ? 'ru' : 'en';

  const setLang = (l) => i18n.changeLanguage(l);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 md:px-10">
        <Link to="/" aria-label="Dustland" className="shrink-0">
          <img src={logo} alt="Dustland" className="h-12 w-auto md:h-16" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-stretch lg:flex">
          <span
            aria-hidden="true"
            style={{ clipPath: ARROW }}
            className="mr-[-12px] w-4 self-stretch bg-white/25"
          />

          {NAV.map((item) => (
            <NavLink key={item.key} to={item.to} className="ml-[-12px] first:ml-0">
              {({ isActive }) => (
                <Tab
                  fillClass={
                    isActive
                      ? 'bg-[#1b1b22] text-white'
                      : 'bg-[#101014] text-zinc-300 hover:text-white'
                  }
                >
                  {t(item.key)}
                </Tab>
              )}
            </NavLink>
          ))}

          <Tab className="ml-[-12px]" fillClass="bg-[#101014] gap-1.5">
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}
            >
              ENG
            </button>
            <span className="text-zinc-600">/</span>
            <button
              onClick={() => setLang('ru')}
              className={lang === 'ru' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}
            >
              RU
            </button>
          </Tab>

          <a href="#register" className="ml-[-12px]">
            <Tab
              className="bg-[#F26D1F] shadow-[0_0_35px_rgba(242,109,31,0.5)]"
              fillClass="bg-[#F26D1F] text-white font-extrabold hover:brightness-110"
            >
              {t('nav.playBeta')}
            </Tab>
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-y border-white/10 bg-[#0b0b0d] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-bold uppercase tracking-[0.15em] text-zinc-200"
              >
                {t(item.key)}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.15em]">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white' : 'text-zinc-500'}>
                ENG
              </button>
              <span className="text-zinc-600">/</span>
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-white' : 'text-zinc-500'}>
                RU
              </button>
            </div>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F26D1F] px-6 py-3 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-white [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)]"
            >
              {t('nav.playBeta')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
