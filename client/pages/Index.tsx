import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

import { BurgerMenu } from '@/components/BurgerMenu';
import { HeroSection } from '@/sections/HeroSection';
import { FeaturedSection } from '@/sections/FeaturedSection';
import { TopPicksSection } from '@/sections/TopPicksSection';
import { ActionSection } from '@/sections/ActionSection';
import { MostWatchedSection } from '@/sections/MostWatchedSection';
import { BestOfWeekSection } from '@/sections/BestOfWeekSection';
import { WellnessCollectionSection } from '@/sections/WellnessCollectionSection';
import { CriticsChoiceSection } from '@/sections/CriticsChoiceSection';
import { TrendingSection } from '@/sections/TrendingSection';
import { RomanceSection } from '@/sections/RomanceSection';
import { ThrillerSection } from '@/sections/ThrillerSection';
import { NewReleasesSection } from '@/sections/NewReleasesSection';
import { CookingGridSection } from '@/sections/CookingGridSection';
import { StaffPicksSection } from '@/sections/StaffPicksSection';
import { YogaLandscapeSection } from '@/sections/YogaLandscapeSection';
import { YogaLandscapeSection2 } from '@/sections/YogaLandscapeSection2';
import { YogaLandscapeSection3, YogaLandscapeSection4 } from '@/sections/YogaLandscapeSection3';
import { YogaPortraitSection, YogaPortraitSection2, YogaPortraitSection3 } from '@/sections/YogaPortraitSection';
import { UniverseSection } from '@/sections/UniverseSection';
import { FooterSection } from '@/sections/FooterSection';

export default function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) setScrollProgress((window.scrollY / max) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden bg-black">
      <video
        autoPlay loop muted playsInline
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={e => e.preventDefault()}
        className="fixed inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://vz-32907a33-0f1.b-cdn.net/316cbe69-b0e3-4bfe-a111-95d7cbf6a77d/play_480p.mp4" type="video/mp4" />
      </video>

      <BurgerMenu />

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Scroll-to-top */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <HeroSection onEnter={scrollToContent} />

      <div id="featured-section">
        <FeaturedSection />
      </div>

      {/* Block 1 — Desi content + first yoga portrait */}
      <TopPicksSection />
      <ActionSection />
      <TrendingSection />
      <YogaPortraitSection />

      {/* Block 2 — More desi + landscape yoga */}
      <RomanceSection />
      <MostWatchedSection />

      {/* Block 3 — Desi spotlight + second landscape yoga */}
      <ThrillerSection />
      <BestOfWeekSection />

      {/* Block 4 — Remaining desi + final yoga sections */}
      <CriticsChoiceSection />
      <YogaPortraitSection3 />
      {/* <NewReleasesSection /> */}
      <CookingGridSection />
      <StaffPicksSection />
      <UniverseSection />
      <WellnessCollectionSection />
      <YogaLandscapeSection />
      <YogaPortraitSection2 />
      <YogaLandscapeSection4 />
      <YogaLandscapeSection2 />
      <YogaLandscapeSection3 />
      <FooterSection />
    </div>
  );
}
