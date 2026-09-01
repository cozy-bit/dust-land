import { useTranslation } from 'react-i18next';
import soldierImg from '../../assets/images/character-soldier.png';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#08090c] px-5 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)] blur-2xl"
      />

      <img
        src={soldierImg}
        alt={t('hero.imageAlt')}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[82%] max-w-none -translate-x-1/2 object-contain object-bottom opacity-95 drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/55 blur-3xl"
      />

      <h1 className="relative z-10 text-center font-extrabold uppercase leading-[0.85] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
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
