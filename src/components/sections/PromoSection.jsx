import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

const withAccents = (text) =>
  text.split('*').map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-orange-500">
        {part}
      </span>
    ) : (
      part
    )
  );

export const PromoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]"
      />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-400 sm:text-base">
            {t('promo.lead')}
          </p>

          <h2 className="mt-3 text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-orange-500">
            {t('promo.title')}
          </h2>

          <p className="mt-4 max-w-xl text-[clamp(1.125rem,2.2vw,1.6rem)] font-bold uppercase leading-snug tracking-tight text-white">
            {withAccents(t('promo.tail'))}
          </p>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t('promo.text')}
          </p>

          <Button className="mt-8 px-9 py-4 text-xs tracking-[0.15em] sm:text-sm">
            {t('promo.register')}
          </Button>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-900 [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]"
            />
            <span className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              {t('promo.imageAlt')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
