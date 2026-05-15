import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FooterSection } from '@/sections/FooterSection';
import { BurgerMenu } from '@/components/BurgerMenu';

export default function TermsOfService() {
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

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 py-12">
        <h1 className="font-bebas text-6xl sm:text-7xl text-white mb-1 tracking-wide">Terms of Service</h1>
        <p className="text-emerald-500 font-orbitron text-xs uppercase tracking-widest mb-2">Zeen Digital Solutions LLP</p>
        <p className="text-gray-600 text-sm mb-10">Last Updated: 15-01-2026</p>

        <p className="text-gray-300 leading-relaxed mb-10">
          Please read these Terms of Service ("Terms") carefully before using the services offered by Zeen Digital Solutions LLP ("we", "us", or "our"). By accessing or using our platform, you agree to be bound by these Terms.
        </p>

        <Section title="1. Acceptance of Terms">
          By creating an account or using our services, you confirm that you are at least 18 years of age and agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of our services immediately.
        </Section>

        <Section title="2. Subscription Services">
          <p>Zeen Digital offers subscription-based access to premium yoga, fitness, and wellness video content. Subscriptions are billed on a recurring basis (monthly or annually) as selected at the time of purchase.</p>
          <p className="mt-3">You authorize us to charge your chosen payment method on a recurring basis until you cancel your subscription. Prices are subject to change with prior notice.</p>
        </Section>

        <Section title="3. User Account">
          <p>You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account with others or allow unauthorized access.</p>
          <p className="mt-3">We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.</p>
        </Section>

        <Section title="4. Intellectual Property">
          All content available on our platform — including videos, images, text, and branding — is the exclusive property of Zeen Digital Solutions LLP or its licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
        </Section>

        <Section title="5. Permitted Use">
          <p>Our services are for personal, non-commercial use only. You agree not to:</p>
          <ul className="list-disc list-inside space-y-1.5 mt-3">
            <li>Download, copy, or redistribute any content from our platform</li>
            <li>Use automated tools to scrape or access our services</li>
            <li>Attempt to reverse-engineer or tamper with our platform</li>
            <li>Use our services for any unlawful purpose</li>
          </ul>
        </Section>

        <Section title="6. Cancellation and Termination">
          You may cancel your subscription at any time through your account settings. Upon cancellation, access continues until the end of the current billing period. We reserve the right to terminate your access for violations of these Terms without refund.
        </Section>

        <Section title="7. Disclaimer of Warranties">
          Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free access to our platform. Fitness and wellness content is for informational purposes only and is not a substitute for professional medical advice.
        </Section>

        <Section title="8. Limitation of Liability">
          To the fullest extent permitted by law, Zeen Digital Solutions LLP shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, even if we have been advised of the possibility of such damages.
        </Section>

        <Section title="9. Governing Law">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Haryana, India.
        </Section>

        <Section title="10. Changes to Terms">
          We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes your acceptance of the revised Terms.
        </Section>

        <Section title="11. Contact Us">
          If you have any questions about these Terms, please contact us at:{' '}
          <a href="mailto:reetesh.kumar@zeendigital.com" className="text-emerald-400 hover:underline">
            reetesh.kumar@zeendigital.com
          </a>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Zeen Digital Solutions LLP<br />
            Basement, 9/28, Link Road, Bhatnagar Namkeens,<br />
            Old Faridabad, Faridabad, Haryana, 121002
          </p>
        </Section>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-12 font-orbitron text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>

      <FooterSection />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 pb-8 border-b border-white/5">
      <h2 className="text-white font-semibold text-xl mb-4">{title}</h2>
      <div className="text-gray-400 leading-relaxed text-[15px]">{children}</div>
    </div>
  );
}
