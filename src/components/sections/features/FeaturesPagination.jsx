import React from 'react';

const CLIP_ACTIVE = 'polygon(6px 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 6px 100%, 0 50%)';
const CLIP_LEFT = 'polygon(6px 0, 100% 0, calc(100% - 6px) 50%, 100% 100%, 6px 100%, 0 50%)';
const CLIP_RIGHT = 'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%, 6px 50%)';

export const FeaturesPagination = ({
  total = 5,
  activeIndex = 0,
  onSelect,
  duration = 7000,
  isPaused = false,
}) => {
  return (
    <div className="relative z-20 flex items-center justify-center gap-1.5 sm:gap-2 select-none py-2">
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === activeIndex;
        const isLeft = idx < activeIndex;
        const clipPath = isActive ? CLIP_ACTIVE : isLeft ? CLIP_LEFT : CLIP_RIGHT;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect && onSelect(idx)}
            aria-label={`Slide ${idx + 1}${isActive ? ' active' : ''}`}
            style={{ clipPath }}
            className={`relative h-3 sm:h-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden ${
              isActive
                ? 'w-16 sm:w-24 bg-[#232936] shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                : 'w-5 sm:w-7 bg-[#3a404c] hover:bg-[#f58220] hover:scale-110 active:scale-95 opacity-80 hover:opacity-100'
            }`}
          >
            {/* Анимированная светящаяся полоса заполнения (плавно бежит 7 секунд, при ховере замирает на месте и не исчезает) */}
            {isActive && (
              <div
                key={`progress-bar-${activeIndex}`}
                className="absolute inset-y-0 left-0 bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
                style={{
                  animation: `slideProgress ${duration}ms linear forwards`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FeaturesPagination;
