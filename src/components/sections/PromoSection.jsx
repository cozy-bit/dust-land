import { useTranslation } from 'react-i18next';

const HEX = 'polygon(18px 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0 50%)';

export const PromoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-[#1b1b20] py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-black/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-black/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-black/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
            {t('promo.lead')}
          </p>

          <h2 className="mt-3 font-extrabold uppercase leading-[0.82] tracking-tight text-white">
            <span className="block text-[clamp(2.75rem,6.5vw,4.75rem)]">{t('promo.titleTop')}</span>
            <span className="block text-[clamp(3.75rem,10vw,7.5rem)]">{t('promo.titleBottom')}</span>
          </h2>

          <p className="mt-6 max-w-md text-lg font-bold uppercase leading-snug text-white sm:text-xl">
            {t('promo.tail')}
          </p>

          <div className="mt-8 w-full max-w-md rounded-xl bg-black/40 px-6 py-5">
            <p className="text-[13px] uppercase leading-relaxed tracking-wide text-zinc-200">
              {t('promo.card1')}
            </p>
          </div>

          <div className="mt-4 flex w-full max-w-md items-center gap-4 rounded-xl bg-zinc-600/30 px-6 py-4 [clip-path:polygon(0_0,100%_0,100%_100%,20px_100%,0_calc(100%-20px))]">
            <p className="flex-1 text-left text-[13px] font-medium uppercase leading-snug tracking-wide text-zinc-100">
              {t('promo.card2')}
            </p>
            <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Steam
            </div>
          </div>

          <a
            href="#"
            style={{ clipPath: HEX }}
            className="mt-9 inline-flex items-center justify-center bg-[#F26D1F] px-14 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_0_40px_rgba(242,109,31,0.35)] transition-[filter] hover:brightness-110"
          >
            {t('promo.register')}
          </a>
        </div>

        <div className="w-full">
          <div className="relative aspect-square w-full overflow-hidden border border-white/10 bg-gradient-to-br from-orange-900/50 via-amber-800/25 to-zinc-900">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]"
            />
            <span className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              {t('promo.imageAlt')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
