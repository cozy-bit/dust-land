import React from 'react';
import { useTranslation } from 'react-i18next';
import betaDetailsBg from '../../assets/images/beta-details-bg.png';
import betaHangarBg from '../../assets/images/beta-hangar-bg.png';
import betaFemaleSoldier from '../../assets/images/beta-female-soldier.png';

export const BetaDetailsSection = () => {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language?.startsWith('ru');

  const specsLeft = isRu
    ? [
        { label: 'КЛАССИФИКАЦИЯ', value: 'AAA' },
        { label: 'ИГРОВОЙ ДВИЖОК', value: 'UE5' },
        { label: 'ПОДДЕРЖИВАЕМАЯ СИСТЕМА', value: 'PC' },
        { label: 'СТАТУС', value: 'БЕТА' },
      ]
    : [
        { label: 'CLASSIFICATION', value: 'AAA' },
        { label: 'GAME ENGINE', value: 'UE5' },
        { label: 'SUPPORTED SYSTEM', value: 'PC' },
        { label: 'STATUS', value: 'BETA' },
      ];

  const specsRight = isRu
    ? [
        { label: 'РАЗРАБОТЧИК', value: 'REDPAD GAMES' },
        { label: 'НАЗВАНИЕ', value: 'DUSTLAND' },
        { label: 'ЖАНР', value: 'MMO/ACTION/SURVIVAL' },
        { label: 'СЕТТИНГ', value: 'ПОСТАПОКАЛИПСИС' },
      ]
    : [
        { label: 'DEVELOPER', value: 'REDPAD GAMES' },
        { label: 'NAME', value: 'DUSTLAND' },
        { label: 'GENRE', value: 'MMO/ACTION/SURVIVAL' },
        { label: 'SETTING', value: 'POST-APOCALYPSE' },
      ];

  return (
    <section id="register" className="relative w-full bg-[#06080b] text-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* 1. Глубокий матовый фон со сферами */}
      <img
        src={betaDetailsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover invert opacity-10 pointer-events-none select-none z-0 mix-blend-screen"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
        {/* А. Верхняя промо-зона */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Визуал с девушкой и ангаром */}
          <div className="order-2 md:order-1 relative w-full md:w-1/2 flex items-center justify-center pt-10 sm:pt-14 md:pt-16">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px]">
              <img
                src={betaHangarBg}
                alt="Dustland Hangar Depot"
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[440px] object-cover border border-zinc-800/80 shadow-[0_20px_45px_rgba(0,0,0,0.95)] relative z-10"
              />

              <img
                src={betaFemaleSoldier}
                alt="Dustland Female Fighter"
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[74%] sm:w-[78%] md:w-[82%] lg:w-[86%] h-auto object-contain pointer-events-none select-none z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Контент промо-блока */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-4 lg:pl-8">
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-[0.95] mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-pre-line">
              {t('betaDetails.titleTop')}
            </h2>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              {t('betaDetails.titleBottom')}
            </h3>

            {/* Плашка 1: Даты */}
            <div className="w-full max-w-md bg-[#0a0c10]/95 border border-zinc-800/80 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] px-6 sm:px-8 py-3.5 sm:py-4 shadow-lg mb-3.5 sm:mb-4">
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-[0.16em] text-center md:text-left">
                {t('betaDetails.date')}
              </p>
            </div>

            {/* Плашка 2: Призы */}
            <div className="w-full max-w-md bg-[#3f454f] [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] px-6 sm:px-8 py-3.5 sm:py-4 shadow-lg mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-black text-white uppercase tracking-[0.16em] text-center md:text-left leading-relaxed whitespace-pre-line">
                {t('betaDetails.prizes')}
              </p>
            </div>

            {/* Кнопка REGISTER */}
            <div className="relative mt-1 sm:mt-2">
              <a
                href="#register"
                className="relative px-12 sm:px-16 py-3 sm:py-3.5 bg-[#df8445] hover:bg-[#e68d4c] text-white font-bold text-sm sm:text-base tracking-[0.22em] uppercase transition-all duration-200 cursor-pointer [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_50%,calc(100%-16px)_100%,16px_100%,0_50%)] hover:scale-105 active:scale-95 flex items-center justify-center select-none shadow-md"
              >
                {t('betaDetails.register')}
              </a>
            </div>
          </div>
        </div>

        {/* Б. Нижняя зона с характеристиками игры */}
        <div className="mt-14 sm:mt-20 md:mt-24 pt-10 sm:pt-14 border-t border-zinc-800/80 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-12 lg:gap-x-20">
          {/* Левая колонка */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {specsLeft.map((spec, idx) => (
              <div key={`spec-l-${idx}`} className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.14em] uppercase font-bold">
                <span className="text-zinc-400">{spec.label}:</span>
                <span className="text-white font-extrabold">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {specsRight.map((spec, idx) => (
              <div key={`spec-r-${idx}`} className="flex items-center gap-2 text-xs sm:text-sm tracking-[0.14em] uppercase font-bold">
                <span className="text-zinc-400">{spec.label}:</span>
                <span className="text-white font-extrabold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaDetailsSection;
