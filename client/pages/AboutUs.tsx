import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FooterSection } from '@/sections/FooterSection';
import { BurgerMenu } from '@/components/BurgerMenu';

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-gray-200 w-full">
      <BurgerMenu />

      {/* Header */}
      <div className="w-full bg-black border-b border-white/10 px-6 sm:px-12 py-5 flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-orbitron text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>

      {/* Hero banner */}
      <div className="w-full bg-gradient-to-br from-emerald-950/40 via-black to-black border-b border-white/5 px-6 sm:px-12 py-16 sm:py-24">
        <p className="text-emerald-500 font-orbitron text-xs uppercase tracking-[0.4em] mb-4">Who We Are</p>
        <h1 className="font-bebas text-6xl sm:text-8xl text-white tracking-wide leading-none mb-4">About Us</h1>
        <p className="text-gray-400 font-orbitron text-sm uppercase tracking-widest">Zeen Digital Solutions LLP</p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 py-12">

        <p className="text-gray-300 leading-relaxed text-[15px] mb-5">
          We are a leading digital content platform specializing in premium yoga, mindfulness and cooking video content. Our mission is to make high-quality yoga sessions, wellness programs and culinary classes accessible to everyone through our subscription-based streaming service.
        </p>
        <p className="text-gray-300 leading-relaxed text-[15px] mb-12">
          With a diverse library of expertly crafted content, we cater to enthusiasts of all levels — from beginners to advanced practitioners. Our platform offers unlimited access to yoga flows, meditation sessions, cooking masterclasses and wellness guides designed to help you achieve your health and lifestyle goals.
        </p>

        {/* What We Offer */}
        <div className="mb-12 pb-12 border-b border-white/5">
          <h2 className="font-bebas text-4xl text-white mb-8 tracking-wide">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Premium yoga, meditation & cooking content',
              'Unlimited streaming on any device',
              'Expert-led yoga flows & cooking masterclasses',
              'Flexible subscription plans',
              'New content added regularly',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-lg px-5 py-4">
                <span className="text-emerald-400 text-lg leading-none mt-0.5">✓</span>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details */}
        <div className="mb-12">
          <h2 className="font-bebas text-4xl text-white mb-8 tracking-wide">Company Details</h2>
          <div className="space-y-5">
            <DetailRow label="Registered Name" value="Zeen Digital Solutions LLP" />
            <DetailRow label="Address" value="Basement, 9/28, Link Road, Bhatnagar Namkeens, Old Faridabad, Faridabad, Haryana, 121002" />
            <DetailRow label="Phone">
              <a href="tel:+919667687077" className="text-emerald-400 hover:underline">+91 9667687077</a>
            </DetailRow>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-4 font-orbitron text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>

      <FooterSection />
    </div>
  );
}

function DetailRow({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 pb-5 border-b border-white/5">
      <span className="text-gray-500 font-orbitron text-xs uppercase tracking-widest min-w-[140px]">{label}</span>
      <span className="text-gray-200 text-sm leading-relaxed">{value ?? children}</span>
    </div>
  );
}
