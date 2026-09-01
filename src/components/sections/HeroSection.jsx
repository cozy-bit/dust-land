import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#08090c] px-5 py-24">
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
