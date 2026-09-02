import React from 'react';

const CLIP_PATH = `polygon(
  0% 18px,
  18px 18px,
  18px 0%,

  30% 0%,
  32% 10px,
  68% 10px,
  70% 0%,

  calc(100% - 18px) 0%,
  calc(100% - 18px) 18px,
  100% 18px,

  100% calc(100% - 18px),
  calc(100% - 18px) calc(100% - 18px),
  calc(100% - 18px) 100%,

  70% 100%,
  68% calc(100% - 10px),
  32% calc(100% - 10px),
  30% 100%,

  18px 100%,
  18px calc(100% - 18px),
  0% calc(100% - 18px)
)`;

export const SciFiCard = ({ children, className = '' }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto p-[1.5px] bg-zinc-600/80 shadow-[0_15px_40px_rgba(0,0,0,0.9)] ${className}`}
      style={{ clipPath: CLIP_PATH }}
    >
      {/* Внутренний темный фон карточки */}
      <div
        className="relative w-full h-full bg-[#090b0e]/95 px-6 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 flex flex-col justify-center items-center text-center"
        style={{ clipPath: CLIP_PATH }}
      >
        {/* Белые акцентные полоски слева и справа */}
        <span className="absolute left-1.5 top-6 bottom-6 w-[3px] bg-white pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        <span className="absolute right-1.5 top-6 bottom-6 w-[3px] bg-white pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

        {children}
      </div>
    </div>
  );
};

export default SciFiCard;
