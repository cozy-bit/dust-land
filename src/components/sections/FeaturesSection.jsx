import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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

const SLIDE_DURATION = 7000;

export const FeaturesSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Автопереключение каждые 7 секунд
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handleSelectIndicator = (indicatorIdx) => {
    if (indicatorIdx >= 0 && indicatorIdx < SLIDES.length) {
      setDirection(indicatorIdx >= currentIndex ? 'next' : 'prev');
      setCurrentIndex(indicatorIdx);
    }
  };

  const currentSlideData = SLIDES[currentIndex];
  const CurrentSlideComponent = currentSlideData.component;

  return (
    <section id="features" className="relative w-full bg-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center select-none overflow-hidden">
      {/* Заголовок секции FEATURES */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-[0.16em] sm:tracking-[0.24em] mb-10 sm:mb-14 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
        {t('features.title')}
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

        {/* Контейнер текущего активного слайда с плавной кинематографичной анимацией скольжения и фейда */}
        <div className="w-full overflow-hidden">
          <div
            key={currentIndex}
            style={{
              animation: `${direction === 'next' ? 'slideInRight' : 'slideInLeft'} 550ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            }}
            className="w-full will-change-transform"
          >
            <CurrentSlideComponent
              activeIndex={currentSlideData.indicatorIndex}
              onSelectSlide={handleSelectIndicator}
              duration={SLIDE_DURATION}
              isPaused={isPaused}
            />
          </div>
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
