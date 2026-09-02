import { useTranslation } from 'react-i18next';
import { cookiePolicy } from '../data/cookiePolicy';
import { Footer } from '../components/layout/Footer';

export const PolicyPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('ru') ? 'ru' : 'en';
  const data = cookiePolicy[lang] || cookiePolicy.en;

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pb-16 pt-28 md:pt-36">
        <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-[28px]">
          {data.title}
        </h1>

        <div className="mt-8 space-y-5">
          {data.blocks.map((block, i) =>
            block.h ? (
              <p key={i} className="pt-2 text-[13px] font-semibold text-white">
                {block.h}
              </p>
            ) : (
              <p key={i} className="text-[13px] leading-relaxed text-zinc-400">
                {block.p}
              </p>
            )
          )}
        </div>
      </article>

      <Footer />
    </>
  );
};
