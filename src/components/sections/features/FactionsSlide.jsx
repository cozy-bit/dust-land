import React from 'react';
import hudGrid from '../../../assets/images/hud-grid.png';
import factionsBgShape from '../../../assets/images/factions-bg-shape.png';
import factionSoldierLeft from '../../../assets/images/faction-soldier-left.png';
import factionSoldierCenter from '../../../assets/images/faction-soldier-center.png';
import factionSoldierRight from '../../../assets/images/faction-soldier-right.png';
import { FeaturesPagination } from './FeaturesPagination';

export const FactionsSlide = ({ activeIndex = 4, onSelectSlide }) => {
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
        {/* Слева на десктопе / Сверху на мобилке: Текстовый блок */}
        <div className="w-full md:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left pr-0 md:pr-4 lg:pr-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black uppercase tracking-wider leading-[1.12] mb-4 sm:mb-6">
            <span className="text-white">CHOOSE ONE<br />FROM THE FOUR<br /></span>
            <span className="text-[#f58220] drop-shadow-[0_0_15px_rgba(245,130,32,0.4)]">UNIQUE FACTIONS</span>
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-zinc-200 uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-relaxed max-w-md">
            EACH WITH ITS OWN TERRITORIES,<br className="hidden md:inline" /> WHERE PLAYERS CAN SAFELY TRADE<br className="hidden md:inline" /> AND COLLABORATE.
          </p>
        </div>

        {/* Справа на десктопе / Снизу на мобилке: Многослойная композиция трех бойцов фракций */}
        <div className="relative w-full md:w-[55%] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-end justify-center">
          {/* z-0: Фоновая фигура factions-bg-shape */}
          <img
            src={factionsBgShape}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0 opacity-85 scale-95 md:scale-100"
          />

          {/* z-10: Боец слева */}
          <img
            src={factionSoldierLeft}
            alt="Left Faction Soldier"
            className="absolute left-[2%] sm:left-[6%] md:left-[4%] bottom-0 w-[42%] sm:w-[45%] md:w-[46%] object-contain pointer-events-none select-none z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
          />

          {/* z-10: Боец справа */}
          <img
            src={factionSoldierRight}
            alt="Right Faction Soldier"
            className="absolute right-[2%] sm:right-[6%] md:right-[4%] bottom-0 w-[38%] sm:w-[41%] md:w-[42%] object-contain pointer-events-none select-none z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
          />

          {/* z-20: Боец по центру (перекрывает плечи левого и правого бойцов) */}
          <img
            src={factionSoldierCenter}
            alt="Center Faction Soldier"
            className="relative bottom-0 w-[54%] sm:w-[57%] md:w-[58%] object-contain pointer-events-none select-none z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* Внизу: Индикатор пагинации */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <FeaturesPagination total={5} activeIndex={activeIndex} onSelect={onSelectSlide} />
      </div>
    </div>
  );
};

export default FactionsSlide;
