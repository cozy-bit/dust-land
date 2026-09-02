import React from 'react';

export const FeaturesPagination = ({ total = 5, activeIndex = 0, onSelect }) => {
  return (
    <div className="relative z-20 flex items-center justify-center gap-1.5 sm:gap-2 select-none">
      {Array.from({ length: total }).map((_, idx) => {
        if (idx === activeIndex) {
          // Активный элемент: вытянутый гексагон со стреловидными концами <=====>
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect && onSelect(idx)}
              aria-label={`Slide ${idx + 1} active`}
              className="w-16 sm:w-24 h-3 sm:h-3.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.95)] [clip-path:polygon(6px_0,calc(100%-6px)_0,100%_50%,calc(100%-16px+10px)_100%,6px_100%,0_50%)] transition-all duration-300 cursor-pointer"
            />
          );
        }

        const isLeft = idx < activeIndex;

        if (isLeft) {
          // Неактивные элементы слева: стрелка влево < с вырезом справа
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect && onSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="w-5 sm:w-7 h-3 sm:h-3.5 bg-[#3a404c] hover:bg-[#555d6e] [clip-path:polygon(6px_0,100%_0,calc(100%-6px)_50%,100%_100%,6px_100%,0_50%)] transition-all duration-200 cursor-pointer"
            />
          );
        }

        // Неактивные элементы справа: стрелка вправо > с вырезом слева
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect && onSelect(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="w-5 sm:w-7 h-3 sm:h-3.5 bg-[#3a404c] hover:bg-[#555d6e] [clip-path:polygon(0_0,calc(100%-6px)_0,100%_50%,calc(100%-6px)_100%,0_100%,6px_50%)] transition-all duration-200 cursor-pointer"
          />
        );
      })}
    </div>
  );
};

export default FeaturesPagination;
