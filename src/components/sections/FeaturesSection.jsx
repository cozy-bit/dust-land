import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  BaseSlide,
  WeaponsSlide,
  GraphicsSlide,
  MutantsSlide,
  FactionsSlide,
} from './features';

const SLIDES = [
  { id: 'base', component: BaseSlide, indicatorIndex: 0 },
  { id: 'weapons', component: WeaponsSlide, indicatorIndex: 1 },
  { id: 'graphics', component: GraphicsSlide, indicatorIndex: 2 },
  { id: 'mutants', component: MutantsSlide, indicatorIndex: 3 },
  { id: 'factions', component: FactionsSlide, indicatorIndex: 4 },
];

export const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Автопереключение каждые 7 секунд
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handleSelectIndicator = (indicatorIdx) => {
    if (indicatorIdx >= 0 && indicatorIdx < SLIDES.length) {
      setCurrentIndex(indicatorIdx);
    }
  };

  const currentSlideData = SLIDES[currentIndex];
  const CurrentSlideComponent = currentSlideData.component;

  return (
    <section className="relative w-full bg-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none overflow-hidden">
      {/* Заголовок секции FEATURES */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-[0.16em] sm:tracking-[0.24em] mb-10 sm:mb-14 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
        FEATURES
      </h2>

      {/* Обертка слайдера с боковыми кнопками управления */}
      <div
        className="relative w-full max-w-7xl mx-auto flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Кнопка «Назад» слева */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-0 sm:-left-2 md:-left-4 lg:-left-6 z-30 p-2 sm:p-3 bg-[#0a0d12]/80 hover:bg-[#e67e22] text-zinc-300 hover:text-white border border-zinc-700/60 hover:border-[#e67e22] shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(230,126,34,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)] group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Контейнер текущего активного слайда с плавной анимацией перехода */}
        <div className="w-full transition-all duration-500 ease-out">
          <CurrentSlideComponent
            activeIndex={currentSlideData.indicatorIndex}
            onSelectSlide={handleSelectIndicator}
          />
        </div>

        {/* Кнопка «Вперед» справа */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-0 sm:-right-2 md:-right-4 lg:-right-6 z-30 p-2 sm:p-3 bg-[#0a0d12]/80 hover:bg-[#e67e22] text-zinc-300 hover:text-white border border-zinc-700/60 hover:border-[#e67e22] shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(230,126,34,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)] group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
