import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#08090c] px-5 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmin] w-[92vmin] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.14),transparent_70%)] blur-2xl"
      />

      <h1 className="relative text-center font-extrabold uppercase leading-[0.85] tracking-tight">
        <span className="block text-[clamp(3rem,11vw,8.5rem)] text-[#F2761F]">
          {t('hero.titleLine1')}
        </span>
        <span className="block text-[clamp(3rem,11vw,8.5rem)] text-white">
          {t('hero.titleLine2')}
        </span>
      </h1>
    </section>
  );
};
