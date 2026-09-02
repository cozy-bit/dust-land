import React from 'react';
import { ChevronDown } from 'lucide-react';

const CHEVRON_DOWN_CLIP = 'polygon(0 0, 50% 8px, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))';

export const ScrollDownButton = ({ targetId, className = '' }) => {
  const handleScrollDown = () => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Если id не указан или элемент не найден — плавно скроллим на высоту первого экрана
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      aria-label="Scroll down to next section"
      className={`group relative flex flex-col items-center justify-center p-[1.5px] bg-zinc-700/60 hover:bg-[#E56A27] transition-all duration-300 cursor-pointer animate-bounce hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(229,106,39,0.5)] ${className}`}
      style={{ clipPath: CHEVRON_DOWN_CLIP }}
    >
      <div
        className="w-10 sm:w-11 h-12 sm:h-13 bg-[#0a0d12]/95 group-hover:bg-[#121620] flex items-center justify-center pt-2 transition-colors duration-300"
        style={{ clipPath: CHEVRON_DOWN_CLIP }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-[#F2761F] group-hover:translate-y-0.5 transition-all duration-300" />
      </div>
    </button>
  );
};

export default ScrollDownButton;
