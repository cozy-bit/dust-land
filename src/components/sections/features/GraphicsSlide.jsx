import React from 'react';
import { useTranslation } from 'react-i18next';
import hudGrid from '../../../assets/images/hud-grid.png';
import imgGraphics from '../../../assets/images/feature-graphics.jpg';
import { FeaturesPagination } from './FeaturesPagination';

const withAccent = (text) =>
  text.split('*').map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[#f58220]">
        {part}
      </span>
    ) : (
      part
    )
  );

export const GraphicsSlide = ({ activeIndex = 2, onSelectSlide }) => {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true });
  const item =
    Array.isArray(items) && items[4]
      ? items[4]
      : {
          title: 'INCREDIBLE GRAPHICS|ON *UNREAL ENGINE 5*',
          text: 'A HIGH LEVEL OF DETAIL AND REALISTIC ATMOSPHERE THAT COMPLETELY IMMERSES YOU IN THE WORLD OF DUSTLAND.',
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
        {/* Слева на десктопе / Снизу на мобилке */}
        <div className="order-2 md:order-1 relative w-full md:w-[55%] flex items-center justify-center">
          <div className="relative w-full">
            <img
              src={imgGraphics}
              alt="Unreal Engine 5 Graphics"
              className="w-full h-auto object-cover border border-zinc-800/80 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative z-10 [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)]"
            />
            <span className="absolute -bottom-1 left-8 h-3 w-16 -skew-x-[35deg] bg-white z-20" />
            <span className="absolute -bottom-1 left-28 h-3 w-8 -skew-x-[35deg] bg-white z-20" />
          </div>
        </div>

        {/* Справа на десктопе / Сверху на мобилке: Текстовый блок */}
        <div className="order-1 md:order-2 w-full md:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left pl-0 md:pl-6 lg:pl-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black uppercase tracking-wider leading-[1.08] mb-4 sm:mb-6 text-white">
            {String(item.title)
              .split('|')
              .map((line, i) => (
                <span key={i} className="block">
                  {withAccent(line)}
                </span>
              ))}
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-zinc-200 uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-relaxed max-w-md">
            {item.text}
          </p>
        </div>
      </div>

      {/* Внизу: Индикатор пагинации */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <FeaturesPagination total={5} activeIndex={activeIndex} onSelect={onSelectSlide} />
      </div>
    </div>
  );
};

export default GraphicsSlide;
