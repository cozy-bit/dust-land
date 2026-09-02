import React from 'react';
import { useTranslation } from 'react-i18next';
import hudGrid from '../../../assets/images/hud-grid.png';
import featureBase from '../../../assets/images/feature-base.png';
import featureBaseCornerShape from '../../../assets/images/feature-base-corner-shape.png';
import { FeaturesPagination } from './FeaturesPagination';

export const BaseSlide = ({ activeIndex = 0, onSelectSlide, duration = 7000, isPaused = false }) => {
  const { t } = useTranslation();
  const rawTitle = t('features.items.0.title');
  const text = t('features.items.0.text');

  // Форматирование заголовка с акцентным цветом для *слово*
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
          {lIdx < lines.length - 1 && <br />}
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
        {/* Слева на десктопе: Скриншот базы с шевронами */}
        <div className="order-2 md:order-1 relative w-full md:w-[55%] flex items-center justify-center">
          <div className="relative w-full">
            <img
              src={featureBase}
              alt="Mission Base"
              className="w-full h-auto object-cover border border-zinc-800/80 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative z-10"
            />
            <img
              src={featureBaseCornerShape}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-5 sm:-bottom-7 -left-2 sm:-left-3 w-28 sm:w-40 md:w-48 h-auto object-contain pointer-events-none select-none z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Справа на десктопе: Текстовый блок */}
        <div className="order-1 md:order-2 w-full md:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left pl-0 md:pl-6 lg:pl-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-wider leading-[1.08] mb-4 sm:mb-6">
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

export default BaseSlide;
