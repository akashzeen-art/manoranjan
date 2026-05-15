import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FooterSection } from '@/sections/FooterSection';
import { BurgerMenu } from '@/components/BurgerMenu';

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-gray-200 w-full">
      <BurgerMenu />

      {/* Header */}
      <div className="w-full bg-black border-b border-white/10 px-6 sm:px-12 py-5 flex items-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-orbitron text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl mx-auto px-6 sm:px-12 py-12">

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-wide mb-2">Contact Us</h1>
          <p className="text-gray-400 text-[15px]">We'd love to hear from you. Feel free to reach out.</p>
        </div>

        {/* Info box */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden mb-6">

          <ContactRow icon="🏢" label="Company" value="Zeen Digital Solutions LLP" />
          <div className="border-t border-white/5" />
          <ContactRow icon="📍" label="Address" value="Sector 49, Gurugram, Haryana, 122018" />
          <div className="border-t border-white/5" />
          <ContactRow icon="📞" label="Phone">
            <a href="tel:+918929836907" className="text-emerald-400 hover:underline">+91 8929836907</a>
          </ContactRow>
          <div className="border-t border-white/5" />
          <ContactRow icon="✉️" label="Email">
            <a href="mailto:marketing@zeendigital.world" className="text-emerald-400 hover:underline">marketing@zeendigital.world</a>
          </ContactRow>
          <div className="border-t border-white/5" />

          {/* CTA button row */}
          <div className="px-6 py-5">
            <a
              href="https://forms.gle/CJS6wXQis9hKe7Da8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-orbitron font-bold uppercase text-sm rounded-lg transition-colors"
            >
              ✉️ Send Us a Message
            </a>
          </div>
        </div>

        {/* Alert box */}
        <div className="flex items-start gap-4 bg-emerald-950/40 border border-emerald-500/20 rounded-xl px-6 py-5 mb-12">
          <span className="text-2xl leading-none mt-0.5">⚡</span>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Need faster support?</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email us at{' '}
              <a href="mailto:marketing@zeendigital.world" className="text-emerald-400 hover:underline">
                marketing@zeendigital.world
              </a>{' '}
              for the quickest response.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-orbitron text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>

      <FooterSection />
    </div>
  );
}

function ContactRow({ icon, label, value, children }: { icon: string; label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 px-6 py-5">
      <span className="text-xl leading-none mt-0.5">{icon}</span>
      <div>
        <p className="text-gray-500 font-orbitron text-[10px] uppercase tracking-widest mb-1">{label}</p>
        <p className="text-gray-200 text-sm leading-relaxed">{value ?? children}</p>
      </div>
    </div>
  );
}
