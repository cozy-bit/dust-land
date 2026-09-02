import React from 'react';
import { useTranslation } from 'react-i18next';
import orangeGlow from '../../assets/images/orange-glow.png';

const REQUIREMENTS_DATA_EN = [
  {
    label: 'OS',
    minimum: 'OS: WINDOWS 10 64 BIT',
    recommended: 'OS: WINDOWS 10 64 BIT',
  },
  {
    label: 'PROCESSOR',
    minimum: 'PROCESSOR: INTEL CORE I5-4430 / AMD FX-6300',
    recommended: 'PROCESSOR: INTEL CORE I5-6600K / AMD RYZEN 5 1600',
  },
  {
    label: 'RAM',
    minimum: 'RAM: 8 GB',
    recommended: 'RAM: 16 GB',
  },
  {
    label: 'GRAPHICS CARD',
    minimum: 'GRAPHICS CARD: NVIDIA GEFORCE GTX 960 TI OR AMD RADEON R7 370, WITH A MINIMUM OF 3GB OF VRAM',
    recommended: 'GRAPHICS CARD: NVIDIA GEFORCE GTX 1060 / AMD RADEON RX 580 4GB',
  },
  {
    label: 'DIRECTX',
    minimum: 'DIRECTX: VERSION 11',
    recommended: 'DIRECTX: VERSION 11',
  },
  {
    label: 'NETWORK',
    minimum: 'NETWORK: BROADBAND INTERNET CONNECTION',
    recommended: 'NETWORK: BROADBAND INTERNET CONNECTION',
  },
  {
    label: 'DISK SPACE',
    minimum: 'DISK SPACE: 50 GB',
    recommended: 'DISK SPACE: 50 GB',
  },
];

const REQUIREMENTS_DATA_RU = [
  {
    label: 'ОС',
    minimum: 'ОС: WINDOWS 10 64 BIT',
    recommended: 'ОС: WINDOWS 10 64 BIT',
  },
  {
    label: 'ПРОЦЕССОР',
    minimum: 'ПРОЦЕССОР: INTEL CORE I5-4430 / AMD FX-6300',
    recommended: 'ПРОЦЕССОР: INTEL CORE I5-6600K / AMD RYZEN 5 1600',
  },
  {
    label: 'ОЗУ',
    minimum: 'ОЗУ: 8 ГБ',
    recommended: 'ОЗУ: 16 ГБ',
  },
  {
    label: 'ВИДЕОКАРТА',
    minimum: 'ВИДЕОКАРТА: NVIDIA GEFORCE GTX 960 TI ИЛИ AMD RADEON R7 370 (МИНИМУМ 3GB VRAM)',
    recommended: 'ВИДЕОКАРТА: NVIDIA GEFORCE GTX 1060 / AMD RADEON RX 580 4GB',
  },
  {
    label: 'DIRECTX',
    minimum: 'DIRECTX: ВЕРСИЯ 11',
    recommended: 'DIRECTX: ВЕРСИЯ 11',
  },
  {
    label: 'СЕТЬ',
    minimum: 'СЕТЬ: ШИРОКОПОЛОСНОЕ ПОДКЛЮЧЕНИЕ К ИНТЕРНЕТУ',
    recommended: 'СЕТЬ: ШИРОКОПОЛОСНОЕ ПОДКЛЮЧЕНИЕ К ИНТЕРНЕТУ',
  },
  {
    label: 'МЕСТО НА ДИСКЕ',
    minimum: 'МЕСТО НА ДИСКЕ: 50 ГБ',
    recommended: 'МЕСТО НА ДИСКЕ: 50 ГБ',
  },
];

export const SystemRequirementsSection = () => {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language?.startsWith('ru');
  const requirementsData = isRu ? REQUIREMENTS_DATA_RU : REQUIREMENTS_DATA_EN;

  return (
    <section className="relative w-full bg-black text-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Фоновое радиальное оранжевое свечение справа */}
      <img
        src={orangeGlow}
        alt=""
        aria-hidden="true"
        className="absolute -right-24 sm:-right-40 md:-right-56 top-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] lg:w-[980px] pointer-events-none opacity-40 md:opacity-60 select-none z-0 mix-blend-screen"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Заголовок секции */}
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-white text-center uppercase tracking-[0.16em] sm:tracking-[0.24em] leading-[1.08] mb-12 sm:mb-16 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {t('sysReq.titleLine1')}<br />{t('sysReq.titleLine2')}
        </h2>

        {/* ДЕСКТОПНАЯ ТАБЛИЦА (>= md) */}
        <div className="hidden md:block w-full max-w-4xl lg:max-w-5xl shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-2">
            {/* Левая половина хедера: Таб MINIMUM */}
            <div className="grid grid-cols-2 border-l border-b border-[#333d4e] bg-[#0a0d13]">
              <div className="bg-[#424956] py-3 px-6 flex items-center justify-center">
                <span className="text-xs lg:text-sm font-black tracking-[0.22em] text-white uppercase">
                  {t('sysReq.minimum')}
                </span>
              </div>
              <div className="bg-[#0e1219]" />
            </div>

            {/* Правая половина хедера: Таб RECOMMENDED */}
            <div className="grid grid-cols-2 border-r border-b border-[#4a200e] bg-[#140b07]">
              <div className="bg-[#180c07]" />
              <div className="bg-[#e67e22] py-3 px-6 flex items-center justify-center shadow-[0_0_20px_rgba(230,126,34,0.35)]">
                <span className="text-xs lg:text-sm font-black tracking-[0.22em] text-white uppercase">
                  {t('sysReq.recommended')}
                </span>
              </div>
            </div>
          </div>

          {/* Строки спецификаций */}
          <div className="flex flex-col">
            {requirementsData.map((item, idx) => (
              <div key={`req-row-${idx}`} className="grid grid-cols-2">
                <div className="px-6 py-4 flex items-center min-h-[58px] border-l border-b border-r border-[#333d4e] bg-[#080b10]/95">
                  <span className="text-xs lg:text-[13px] font-bold text-zinc-100 uppercase tracking-[0.12em] leading-relaxed text-left max-w-md">
                    {item.minimum}
                  </span>
                </div>

                <div className="px-6 py-4 flex items-center justify-end min-h-[58px] border-r border-b border-[#4a200e] bg-[#0c0806]/95">
                  <span className="text-xs lg:text-[13px] font-bold text-zinc-100 uppercase tracking-[0.12em] leading-relaxed text-right max-w-md">
                    {item.recommended}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ (< md) */}
        <div className="flex md:hidden flex-col gap-6 w-full max-w-md mx-auto">
          {/* Таблица MINIMUM */}
          <div className="w-full border-x border-b border-[#333d4e] bg-[#080b10]/95 backdrop-blur-md shadow-lg overflow-hidden">
            <div className="bg-[#424956] py-2.5 px-4 text-center">
              <span className="text-xs font-black tracking-[0.2em] text-white uppercase">
                {t('sysReq.minimum')}
              </span>
            </div>
            <div className="divide-y divide-[#333d4e]">
              {requirementsData.map((item, idx) => (
                <div key={`mob-min-${idx}`} className="px-4 py-3 flex items-center min-h-[48px]">
                  <span className="text-xs font-bold text-zinc-100 uppercase tracking-wide leading-snug">
                    {item.minimum}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Таблица RECOMMENDED */}
          <div className="w-full border-x border-b border-[#4a200e] bg-[#0c0806]/95 backdrop-blur-md shadow-lg overflow-hidden">
            <div className="bg-[#e67e22] py-2.5 px-4 text-center shadow-[0_0_15px_rgba(230,126,34,0.3)]">
              <span className="text-xs font-black tracking-[0.2em] text-white uppercase">
                {t('sysReq.recommended')}
              </span>
            </div>
            <div className="divide-y divide-[#4a200e]">
              {requirementsData.map((item, idx) => (
                <div key={`mob-rec-${idx}`} className="px-4 py-3 flex items-center min-h-[48px]">
                  <span className="text-xs font-bold text-zinc-100 uppercase tracking-wide leading-snug">
                    {item.recommended}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirementsSection;
