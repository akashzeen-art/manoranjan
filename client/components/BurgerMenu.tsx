import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LINKS = [
  { label: 'Home', path: '/' },
  { label: 'My Account', path: '/account' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-[100] w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:border-emerald-500/50 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-[101] bg-[#0a0a0a] border-l border-white/10 flex flex-col px-8 py-10"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img src="/logo.png" alt="Manoranjan" className="h-14 w-auto object-contain" />
              </div>

              <nav className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => go(link.path)}
                    className="text-left py-3 text-gray-300 hover:text-white font-orbitron text-sm uppercase tracking-widest border-b border-white/5 hover:border-emerald-500/30 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto">
                <p className="text-[10px] text-gray-700 font-orbitron tracking-widest">© 2026 Zeen Digital Solutions LLP</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
