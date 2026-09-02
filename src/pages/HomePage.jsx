import { HeroSection } from '../components/sections/HeroSection';
import { PromoSection } from '../components/sections/PromoSection';
import { AboutGameSection } from './../components/sections/AboutGameSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { BetaBar } from '../components/sections/BetaBar';
import { ImmerseSection } from '../components/sections/ImmerseSection';
import { SystemRequirementsSection } from '../components/sections/SystemRequirementsSection';
import { BetaDetailsSection } from '../components/sections/BetaDetailsSection';
import { ReleaseSection } from '../components/sections/ReleaseSection';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* 1. Бурхониддин */}
      <HeroSection />
      <PromoSection />

      {/* 2. Бахтовар */}
      <AboutGameSection />

      {/* 3. Шухрат + Амирхон */}
      <FeaturesSection />

      {/* 4. Бурхониддин */}
      <BetaBar />

      {/* 5. Амирхон */}
      <ImmerseSection />
      <SystemRequirementsSection />

      {/* 6. Шухрат */}
      <BetaDetailsSection />

      {/* 7. Бахтовар */}
      <ReleaseSection />
    </div>
  );
};