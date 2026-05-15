// Hero Section — MANORANJAN: Yoga & Cooking Platform
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

// Cook & Yoga teaser videos for hero background
// Single video plays in loop as background
const BG_VIDEO = 'https://vz-32907a33-0f1.b-cdn.net/316cbe69-b0e3-4bfe-a111-95d7cbf6a77d/play_480p.mp4';

const HERO_BANNERS = [
  '/landscape_new_desicontent/44.png',
  '/landscape_new_desicontent/45.png',
  '/landscape_new_desicontent/46.png',
];

interface HeroSectionProps { onEnter?: () => void; }

export function HeroSection({ onEnter }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bannerIdx] = useState(() => Math.floor(Math.random() * HERO_BANNERS.length));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Banner fallback */}
      <img src={HERO_BANNERS[bannerIdx]} alt=""
        onLoad={() => setBannerLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: bannerLoaded ? (videoLoaded ? 0 : 0.6) : 0 }}
      />

      {/* Teaser video — single looping bg */}
      <video
        ref={videoRef}
        src={BG_VIDEO}
        autoPlay loop muted playsInline
        onCanPlay={() => setVideoLoaded(true)}
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={e => e.preventDefault()}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 0.85 : 0 }}
      />

      {/* Letterbox bars */}
      <div className="absolute top-0 inset-x-0 h-[7vh] bg-black z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[7vh] bg-black z-10 pointer-events-none" />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Main content */}
      <div className="relative z-20 text-center px-5 sm:px-8 max-w-5xl mx-auto w-full">

        {/* Label */}
        <motion.div className="flex items-center justify-center gap-3 mb-5 sm:mb-8"
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-[9px] sm:text-[10px] font-orbitron uppercase tracking-[0.4em] text-emerald-400">
            Thriller · Crime · Drama
          </span>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-emerald-500" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-bebas font-black text-white leading-none mb-4 select-none"
          style={{ fontSize: 'clamp(4rem, 20vw, 12rem)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <motion.span
            animate={{
              textShadow: [
                '0 0 0 transparent',
                '4px 0 0 rgba(16,185,129,0.7), -4px 0 0 rgba(245,158,11,0.7)',
                '0 0 0 transparent',
              ],
            }}
            transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 5 }}>
            MANORANJAN
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-gray-300 text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed font-light px-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          Stream the best desi thriller, crime and drama content — anytime, anywhere.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}>
          <motion.button onClick={onEnter}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-black font-orbitron font-bold uppercase text-sm rounded-sm min-h-[52px]"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Play size={15} className="fill-black" /> Start Watching
          </motion.button>
          {/* <motion.button onClick={onEnter}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 border border-white/30 text-white font-orbitron font-bold uppercase text-sm rounded-sm min-h-[52px] backdrop-blur-sm"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <ChevronDown size={15} /> Explore
          </motion.button> */}
        </motion.div>
      </div>


    </div>
  );
}
