import React from 'react';
import { useTranslation } from 'react-i18next';
import hudGrid from '../../../assets/images/hud-grid.png';
import bewareBgShape from '../../../assets/images/beware-bg-shape.png';
import mutantScorpion from '../../../assets/images/mutant-scorpion.png';
import mutantDog from '../../../assets/images/mutant-dog.png';
import { FeaturesPagination } from './FeaturesPagination';

export const MutantsSlide = ({ activeIndex = 3, onSelectSlide, duration = 7000, isPaused = false }) => {
  const { t } = useTranslation();
  const rawTitle = t('features.items.3.title');
  const text = t('features.items.3.text');

  const renderTitle = () => {
    const lines = rawTitle.split('|');
    return lines.map((line, lIdx) => {
      const parts = line.split('*');
      return (
        <React.Fragment key={lIdx}>
          {parts.map((p, pIdx) =>
            pIdx % 2 === 1 ? (
              <span key={pIdx} className="text-[#f58220] drop-shadow-[0_0_15px_rgba(245,130,32,0.4)]">
                {p}
              </span>
            ) : (
              <span key={pIdx} className="text-white">
                {p}
              </span>
            )
          )}
          {lIdx < lines.length - 1 && ' '}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-[#07090c]/95 border border-zinc-800/80 shadow-[0_0_50px_rgba(0,0,0,0.95)] p-6 sm:p-8 md:p-12 lg:p-14 overflow-hidden select-none">
      {/* 1. HUD Сетка карточки на фоне */}
      <img
        src={hudGrid}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none z-0"
      />

      {/* Мягкий оранжевый акцент свечения в правом верхнем углу */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f58220]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Основной контент карточки */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
        {/* Слева на десктопе: Многослойная композиция (shape -> scorpion -> dog) */}
        <div className="order-2 md:order-1 relative w-full md:w-[55%] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-center justify-center">
          <img
            src={bewareBgShape}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0 opacity-85 scale-95 md:scale-100"
          />

          <img
            src={mutantScorpion}
            alt="Mutant Scorpion"
            className="absolute right-0 sm:right-[2%] md:right-[2%] top-0 sm:top-[2%] md:top-[1%] w-[70%] sm:w-[74%] md:w-[76%] h-auto object-contain pointer-events-none select-none z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
          />

          <img
            src={mutantDog}
            alt="Mutant Beast"
            className="absolute left-[2%] sm:left-[4%] md:left-[2%] bottom-[2%] sm:bottom-[4%] md:bottom-[2%] w-[44%] sm:w-[46%] md:w-[48%] h-auto object-contain pointer-events-none select-none z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]"
          />
        </div>

        {/* Справа на десктопе: Текстовый блок */}
        <div className="order-1 md:order-2 w-full md:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left pl-0 md:pl-6 lg:pl-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-wider leading-none mb-4 sm:mb-6">
            {renderTitle()}
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-zinc-200 uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-relaxed max-w-md">
            {text}
          </p>
        </div>
      </div>

      {/* Внизу: Индикатор пагинации с плавной анимацией таймера */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <FeaturesPagination
          total={5}
          activeIndex={activeIndex}
          onSelect={onSelectSlide}
          duration={duration}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
};

export default MutantsSlide;
