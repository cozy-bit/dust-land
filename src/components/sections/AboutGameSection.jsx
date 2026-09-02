import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { SciFiCard } from './card/SciFi';
import aboutBgShape from '../../assets/images/about-bg-shape.png';
import promoLocation from '../../assets/images/promo-location.jpg';
import csgoVideo from '../../video/csgo.mp4';

const VIDEO_CLIP_PATH = `polygon(
  0% 20px,
  20px 20px,
  20px 0%,

  32% 0%,
  35% 12px,
  65% 12px,
  68% 0%,

  calc(100% - 20px) 0%,
  calc(100% - 20px) 20px,
  100% 20px,

  100% calc(100% - 20px),
  calc(100% - 20px) calc(100% - 20px),
  calc(100% - 20px) 100%,

  68% 100%,
  65% calc(100% - 12px),
  35% calc(100% - 12px),
  32% 100%,

  20px 100%,
  20px calc(100% - 20px),
  0% calc(100% - 20px)
)`;

const BOTTOM_PLATE_CLIP_PATH = `polygon(
  0% 16px,
  16px 16px,
  16px 0%,

  30% 0%,
  33% 10px,
  67% 10px,
  70% 0%,

  calc(100% - 16px) 0%,
  calc(100% - 16px) 16px,
  100% 16px,

  100% calc(100% - 16px),
  calc(100% - 16px) calc(100% - 16px),
  calc(100% - 16px) 100%,

  70% 100%,
  67% calc(100% - 10px),
  33% calc(100% - 10px),
  30% 100%,

  16px 100%,
  16px calc(100% - 16px),
  0% calc(100% - 16px)
)`;

export const AboutGameSection = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="game" className="relative w-full bg-[#06080b] py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* 1. Фоновый гранж-шейп (about-bg-shape.png) на темном фоне */}
      <img
        src={aboutBgShape}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover invert opacity-15 pointer-events-none select-none z-0 mix-blend-screen scale-110"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        {/* Заголовок секции */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-[0.16em] sm:tracking-[0.24em] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          {t('aboutGame.title')}
        </h2>

        {/* Карточка 1: Верхний текстовый блок */}
        <SciFiCard>
          <p className="text-xs sm:text-sm md:text-[15px] font-bold text-zinc-100 uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-relaxed sm:leading-[1.9] text-center max-w-3xl whitespace-pre-line">
            {t('aboutGame.text1')}
          </p>
        </SciFiCard>

        {/* Карточка 2: Видео-плеер со скошенным sci-fi контуром и шестиугольной кнопкой Play */}
        <div
          className="relative w-full max-w-4xl mx-auto p-[1.5px] bg-zinc-600/80 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
          style={{ clipPath: VIDEO_CLIP_PATH }}
        >
          <div
            className="relative w-full aspect-[16/9] bg-black overflow-hidden flex items-center justify-center group"
            style={{ clipPath: VIDEO_CLIP_PATH }}
          >
            <video
              ref={videoRef}
              src={csgoVideo}
              poster={promoLocation}
              controls={isPlaying}
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />

            {/* Шестиугольная кнопка Play по центру (скрывается во время воспроизведения) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayToggle}
                aria-label="Play Trailer Video"
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 bg-[#323946]/90 hover:bg-[#df8445] text-white flex items-center justify-center [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)] shadow-[0_0_30px_rgba(0,0,0,0.9)] hover:shadow-[0_0_30px_rgba(223,132,69,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group/btn"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Карточка 3: Нижний текстовый блок */}
        <SciFiCard>
          <p className="text-xs sm:text-sm md:text-[15px] font-bold text-zinc-100 uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-relaxed sm:leading-[1.9] text-center max-w-3xl whitespace-pre-line">
            {t('aboutGame.text2')}
          </p>
        </SciFiCard>

        {/* Карточка 4: Нижняя серая плашка с призывом */}
        <div
          className="relative w-full max-w-3xl mx-auto bg-[#3e4450] px-6 sm:px-12 py-5 sm:py-6 shadow-[0_15px_35px_rgba(0,0,0,0.85)] flex items-center justify-center text-center"
          style={{ clipPath: BOTTOM_PLATE_CLIP_PATH }}
        >
          <p className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-snug sm:leading-relaxed whitespace-pre-line">
            {t('aboutGame.banner')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGameSection;
