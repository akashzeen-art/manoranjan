// FooterSection — Bharat+ / EatMe style footer
import { useState } from 'react';
import { motion } from 'framer-motion';

const FOOTER_BANNERS = [
  '/landscape_new_desicontent/42.png',
  '/landscape_new_desicontent/43.png',
];

export function FooterSection() {
  const [bannerIdx] = useState(() => Math.floor(Math.random() * FOOTER_BANNERS.length));
  const [bannerLoaded, setBannerLoaded] = useState(false);

  return (
    <footer className="relative w-full bg-black overflow-hidden">

      {/* Cinematic banner strip */}
      <div className="relative h-36 sm:h-48 md:h-64 overflow-hidden">
        <img
          src={FOOTER_BANNERS[bannerIdx]} alt=""
          onLoad={() => setBannerLoaded(true)}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: bannerLoaded ? 0.40 : 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Brand over banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.img
            src="/logo.png"
            alt="Bharat+"
            className="h-20 sm:h-28 md:h-36 w-auto object-contain select-none"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-300 text-xs sm:text-sm font-orbitron uppercase tracking-[0.3em] mt-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}
          >
            Thriller · Crime · Drama
          </motion.p>
        </div>
      </div>

      {/* Main footer — EatMe style */}
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
          >
            {/* Logo */}
            {/* <img
              src="/logo.png"
              alt="Bharat+"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              onError={(e) => {
                // fallback if logo.png doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            /> */}

            {/* Tagline */}
            <p className="text-gray-400 text-sm sm:text-base max-w-xs leading-relaxed">
              Your gateway to premium desi thriller, crime & drama content
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6 w-full space-y-3">
              <p className="text-gray-500 text-xs sm:text-sm font-orbitron">
                Copyright © 2026, Zeen Digital Solutions LLP All Rights Reserved
              </p>

              {/* Links */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap">
                <a href="/terms"
                  className="text-gray-500 hover:text-white transition-colors font-orbitron uppercase tracking-widest text-[10px] sm:text-xs">
                  Terms of Services
                </a>
                <span className="text-gray-700">|</span>
                <a href="/refund"
                  className="text-gray-500 hover:text-white transition-colors font-orbitron uppercase tracking-widest text-[10px] sm:text-xs">
                  Refund Policy
                </a>
                <span className="text-gray-700">|</span>
                <a href="/privacy"
                  className="text-gray-500 hover:text-white transition-colors font-orbitron uppercase tracking-widest text-[10px] sm:text-xs">
                  Privacy Policy
                </a>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-[10px] text-gray-700 font-orbitron tracking-widest">
                  All systems operational
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
