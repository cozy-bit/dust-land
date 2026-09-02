import React from 'react';
import { useTranslation } from 'react-i18next';
import { cookiePolicy } from '../data/cookiePolicy';

export const PolicyPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('ru') ? 'ru' : 'en';
  const data = cookiePolicy[lang] || cookiePolicy.en;

  const renderFormattedText = (text) => {
    // Автоматическая подсветка ссылок и email
    if (text.includes('https://dustlandbeta.redpad.games/')) {
      const parts = text.split('https://dustlandbeta.redpad.games/');
      return (
        <>
          {parts[0]}
          <a
            href="https://dustlandbeta.redpad.games/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 underline hover:text-[#f58220] transition-colors"
          >
            https://dustlandbeta.redpad.games/
          </a>
          {parts[1]}
        </>
      );
    }
    if (text.includes('support@redpad.games')) {
      const parts = text.split('support@redpad.games');
      return (
        <>
          {parts[0]}
          <a
            href="mailto:support@redpad.games"
            className="text-zinc-200 underline hover:text-[#f58220] transition-colors"
          >
            support@redpad.games
          </a>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <article className="relative w-full max-w-4xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-24 text-zinc-300 select-text">
      {/* Заголовок страницы */}
      <h1 className="text-2xl sm:text-3xl md:text-[32px] font-black uppercase tracking-[0.14em] text-white mb-8 sm:mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
        {data.title}
      </h1>

      {/* Список разделов политики */}
      <div className="space-y-4 sm:space-y-5 text-xs sm:text-[13.5px] leading-relaxed">
        {data.blocks.map((block, i) =>
          block.h ? (
            <h2
              key={i}
              className="pt-4 text-sm sm:text-[15px] font-bold text-white uppercase tracking-wide"
            >
              {block.h}
            </h2>
          ) : (
            <p key={i} className="text-zinc-300 font-normal leading-relaxed">
              {renderFormattedText(block.p)}
            </p>
          )
        )}
      </div>
    </article>
  );
};

export default PolicyPage;
