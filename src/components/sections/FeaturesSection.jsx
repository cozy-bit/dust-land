import { useTranslation } from 'react-i18next';
import imgGraphics from '../../assets/images/feature-graphics.jpg';

const withAccent = (text) =>
  text.split('*').map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[#F2761F]">
        {part}
      </span>
    ) : (
      part
    )
  );

export const FeaturesSection = () => {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true });
  const item = Array.isArray(items) ? items[4] : { title: '', text: '' };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:46px_46px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[440px] w-[360px] bg-gradient-to-l from-orange-600/15 to-transparent blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-8 h-8 w-40 -skew-x-[30deg] bg-zinc-700/50"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-4 md:px-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src={imgGraphics}
            alt=""
            className="w-full object-cover [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)]"
          />
          <span className="absolute -bottom-1 left-8 h-3 w-16 -skew-x-[35deg] bg-white" />
          <span className="absolute -bottom-1 left-28 h-3 w-8 -skew-x-[35deg] bg-white" />
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white">
            {String(item.title)
              .split('|')
              .map((line, i) => (
                <span key={i} className="block">
                  {withAccent(line)}
                </span>
              ))}
          </h2>
          <p className="mt-5 max-w-sm text-sm uppercase leading-relaxed tracking-wide text-zinc-300">
            {item.text}
          </p>
        </div>
      </div>

      <div className="relative mt-8 flex items-center justify-center gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-6 -skew-x-[30deg] bg-zinc-600" />
        <span className="h-1.5 w-10 -skew-x-[30deg] bg-white" />
        <span className="h-1.5 w-5 -skew-x-[30deg] bg-zinc-600" />
        <span className="h-1.5 w-4 -skew-x-[30deg] bg-zinc-700" />
        <span className="h-1.5 w-3 -skew-x-[30deg] bg-zinc-800" />
      </div>
    </section>
  );
};
