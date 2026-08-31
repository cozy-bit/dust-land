import { HeroSection } from '../components/sections/HeroSection';
import { BetaBar } from '../components/sections/BetaBar';
import { PromoSection } from '../components/sections/PromoSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { BetaDetailsSection } from '../components/sections/BetaDetailsSection';
import { AboutGameSection } from '../components/sections/AboutGameSection';
import { ImmerseSection } from '../components/sections/ImmerseSection';
import { SystemRequirementsSection } from '../components/sections/SystemRequirementsSection';
import { ReleaseSection } from '../components/sections/ReleaseSection';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* 1. Бурхониддин */}
      <HeroSection />
      <BetaBar />
      <PromoSection />

      {/* 2. Шухрат (+ слайды Амирхона) */}
      <FeaturesSection />
      <BetaDetailsSection />

      {/* 3. Бахтовар */}
      <AboutGameSection />

      {/* 4. Амирхон */}
      <ImmerseSection />
      <SystemRequirementsSection />

      {/* 5. Бахтовар (предфутерный блок) */}
      <ReleaseSection />
    </div>
  );
};
