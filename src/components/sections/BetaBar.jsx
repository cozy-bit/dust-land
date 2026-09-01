import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

const SOCIALS = [
  {
    name: 'Discord',
    href: '#',
    path: 'M20.317 4.369A19.79 19.79 0 0 0 15.432 2.85a.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.1 14.1 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.245.198.372.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.946 2.418-2.157 2.418z',
  },
  {
    name: 'Telegram',
    href: '#',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
  {
    name: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'Reddit',
    href: '#',
    path: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.562 1.25 1.25a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.11 3.11 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.184.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.197 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.35.35 0 0 1 .377-.24l2.907.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12c-.688 0-1.25.562-1.25 1.25s.562 1.25 1.25 1.25 1.25-.562 1.25-1.25S9.938 12 9.25 12zm5.5 0c-.688 0-1.25.562-1.25 1.25s.562 1.25 1.25 1.25 1.25-.562 1.25-1.25-.562-1.25-1.25-1.25zm-5.466 3.99a.327.327 0 0 0-.232.095.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.07 2.961-.913a.33.33 0 0 0 .024-.463.33.33 0 0 0-.462 0c-.547.533-1.685.73-2.513.73-.827 0-1.978-.196-2.51-.73a.327.327 0 0 0-.232-.095z',
  },
  {
    name: 'Steam',
    href: '#',
    path: 'M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.398 3.398 0 0 1 1.925-.594c.063 0 .125.004.188.006l2.861-4.142V8.91a4.526 4.526 0 0 1 4.524-4.524 4.526 4.526 0 0 1 4.525 4.525 4.526 4.526 0 0 1-4.525 4.524h-.105l-4.076 2.911c0 .052.004.105.004.156a3.395 3.395 0 0 1-3.396 3.397 3.4 3.4 0 0 1-3.336-2.744L.436 15.581C1.862 20.539 6.492 24 11.979 24 18.605 24 24 18.627 24 12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61a2.553 2.553 0 0 0 4.694-1.99 2.553 2.553 0 0 0-3.317-1.416l1.523.63a1.88 1.88 0 1 1-1.45 3.46l.001-.083zm11.328-9.325a3.017 3.017 0 0 0-3.017-3.017 3.017 3.017 0 1 0 0 6.034 3.017 3.017 0 0 0 3.017-3.017zm-5.28-.007a2.266 2.266 0 0 1 2.267-2.264 2.266 2.266 0 0 1 0 4.53 2.266 2.266 0 0 1-2.266-2.266z',
  },
];

export const BetaBar = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-[#0b0b0d]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-orange-600/10 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center gap-7 px-5 py-8 text-center md:px-10 lg:flex-row lg:justify-between lg:gap-12 lg:py-6 lg:pr-14 lg:text-left">
        <p className="max-w-md border-orange-500 text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base lg:border-l-4 lg:pl-5">
          {t('betaBar.subtitle')}
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-5 lg:flex-nowrap lg:gap-10">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              {t('betaBar.socials')}
            </span>
            <ul className="flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-400 [clip-path:polygon(6px_0,100%_0,calc(100%-6px)_100%,0_100%)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="hidden h-10 w-px bg-white/15 lg:block" />

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
            <span className="whitespace-nowrap text-sm font-bold uppercase tracking-wider text-orange-400">
              {t('betaBar.date')}
            </span>
            <Button className="w-full max-w-xs whitespace-nowrap px-8 py-3.5 text-xs tracking-[0.15em] sm:w-auto">
              {t('betaBar.register')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
