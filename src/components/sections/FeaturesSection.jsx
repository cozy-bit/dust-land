import { useTranslation } from 'react-i18next';
import imgWays from '../../assets/images/feature-ways.jpg';
import imgArsenal from '../../assets/images/feature-arsenal.jpg';
import imgBeware from '../../assets/images/feature-beware.jpg';
import imgFactions from '../../assets/images/feature-factions.jpg';
import imgGraphics from '../../assets/images/feature-graphics.jpg';

const IMAGES = [imgWays, imgArsenal, imgBeware, imgFactions, imgGraphics];
const FRAMED = [true, false, false, false, true];

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

const GridTexture = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:46px_46px]"
  />
);

const ChevronNav = () => (
  <div className="mt-6 flex items-center justify-center gap-1.5" aria-hidden="true">
    <span className="h-1.5 w-6 -skew-x-[30deg] bg-zinc-600" />
    <span className="h-1.5 w-10 -skew-x-[30deg] bg-white" />
    <span className="h-1.5 w-5 -skew-x-[30deg] bg-zinc-600" />
    <span className="h-1.5 w-4 -skew-x-[30deg] bg-zinc-700" />
    <span className="h-1.5 w-3 -skew-x-[30deg] bg-zinc-800" />
  </div>
);

const FeatureRow = ({ item, index }) => {
  const imageLeft = index % 2 === 0;
  const framed = FRAMED[index];

  return (
    <div className="relative">
      <GridTexture />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-5 py-8 md:px-10 lg:grid-cols-2 lg:gap-14 lg:py-12">
        <div className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
          {framed ? (
            <div className="relative">
              <img
                src={IMAGES[index]}
                alt=""
                className="w-full object-cover [clip-path:polygon(0_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%)]"
              />
              <span className="absolute -bottom-1 left-6 h-3 w-16 -skew-x-[35deg] bg-white" />
              <span className="absolute -bottom-1 left-24 h-3 w-8 -skew-x-[35deg] bg-white" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center py-4">
              <span
                aria-hidden="true"
                className="absolute h-28 w-4/5 -skew-x-[30deg] bg-white/[0.06]"
              />
              <img
                src={IMAGES[index]}
                alt=""
                className="relative max-h-[340px] w-auto object-contain"
              />
            </div>
          )}
        </div>

        <div
          className={`flex flex-col items-center text-center ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <h3 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white">
            {withAccent(item.title)}
          </h3>
          <p className="mt-5 max-w-sm text-sm uppercase leading-relaxed tracking-wide text-zinc-300">
            {item.text}
          </p>
        </div>
      </div>
      <ChevronNav />
    </div>
  );
};

export const FeaturesSection = () => {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true });

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[380px] bg-gradient-to-l from-orange-600/15 to-transparent blur-2xl"
      />

      <h2 className="relative text-center text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold uppercase tracking-tight text-white">
        {t('features.title')}
      </h2>

      <div className="relative mt-10 flex flex-col gap-8 lg:mt-14 lg:gap-12">
        {Array.isArray(items) &&
          items.map((item, i) => <FeatureRow key={i} item={item} index={i} />)}
      </div>
    </section>
  );
};
