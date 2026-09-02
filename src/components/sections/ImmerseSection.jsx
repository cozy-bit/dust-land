import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import immerseBg from '../../assets/images/immerse-bg.png';
import immerseForeground from '../../assets/images/immerse-foreground.png';

export const ImmerseSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(100);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height * 0.5);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        const targetOffset = (1 - clampedProgress) * 120;
        setOffsetY(targetOffset);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full aspect-[16/9] min-h-[460px] sm:min-h-[560px] md:min-h-[660px] lg:min-h-[760px] xl:min-h-[860px] flex flex-col justify-end items-center overflow-hidden select-none bg-black"
    >
      {/* 1. Задний слой (z-0): Фоновое небо и верхний каньон */}
      <img
        src={immerseBg}
        alt="Dustland Atmosphere Sky"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-0"
      />

      {/* 2. Текст (z-10): Гигантская надпись с интерактивным параллакс-подъемом при скролле */}
      <div
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
          willChange: 'transform',
        }}
        className="absolute inset-x-0 top-[31%] sm:top-[29%] md:top-[26%] lg:top-[24%] xl:top-[23%] flex justify-center items-center pointer-events-none select-none z-10 px-2 sm:px-4 transition-transform duration-100 ease-out"
      >
        <h2 className="text-[17.5vw] sm:text-[17vw] md:text-[17vw] lg:text-[220px] xl:text-[260px] font-black tracking-tight text-white uppercase leading-none text-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {t('immerse.title')}
        </h2>
      </div>

      {/* 3. Передний слой (z-20): Слой каньона */}
      <img
        src={immerseForeground}
        alt="Dustland Foreground Canyon"
        className="absolute bottom-0 left-0 right-0 w-full h-[56.2%] object-cover object-bottom pointer-events-none select-none z-20"
      />

      {/* 4. Контент поверх всего (z-30): Информационная плашка и кнопка REGISTER NOW */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 pb-6 sm:pb-8 md:pb-12 lg:pb-14 w-full max-w-3xl">
        {/* Черная плашка с оранжевой полосой снизу */}
        <div className="bg-[#0b0806]/95 border-b-[3.5px] sm:border-b-4 border-b-[#e57d38] px-6 sm:px-12 md:px-16 lg:px-20 py-3.5 sm:py-5 md:py-6 shadow-[0_15px_40px_rgba(0,0,0,0.9)] max-w-full">
          <p className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-white tracking-[0.14em] sm:tracking-[0.18em] uppercase leading-snug sm:leading-relaxed whitespace-pre-line">
            {t('immerse.subtitle')}
          </p>
        </div>

        {/* Скошенная кнопка REGISTER NOW в форме шеврона/гексагона с деликатным свечением */}
        <div className="relative mt-4 sm:mt-5 md:mt-6 group">
          <div className="absolute inset-0 bg-[#df8445]/20 blur-lg rounded-full scale-95 group-hover:scale-105 group-hover:bg-[#df8445]/35 transition-all duration-300 pointer-events-none" />

          <a
            href="#register"
            className="relative px-8 sm:px-12 md:px-16 py-2.5 sm:py-3.5 md:py-4 bg-[#df8445] hover:bg-[#e48c4d] text-white font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_50%,calc(100%-16px)_100%,16px_100%,0_50%)] shadow-[0_0_12px_rgba(223,132,69,0.3)] hover:shadow-[0_0_18px_rgba(223,132,69,0.45)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center select-none"
          >
            {t('immerse.register')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImmerseSection;
