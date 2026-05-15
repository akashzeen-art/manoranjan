import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FooterSection } from '@/sections/FooterSection';
import { BurgerMenu } from '@/components/BurgerMenu';

export default function PrivacyPolicy() {
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
        <h1 className="font-bebas text-6xl sm:text-7xl text-white mb-1 tracking-wide">Privacy Policy</h1>
        <p className="text-emerald-500 font-orbitron text-xs uppercase tracking-widest mb-2">Zeen Digital Solutions LLP</p>
        <p className="text-gray-600 text-sm mb-10">Last Updated: 15-01-2026</p>

        <p className="text-gray-300 leading-relaxed mb-4">
          This Privacy Policy describes how Zeen Digital Solutions LLP ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you visit or make a purchase from{' '}
          <a href="https://atheletiq.life" className="text-emerald-400 hover:underline">https://atheletiq.life</a> (the "Site") or use any of our services (collectively, the "Services").
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          By using our Services, you agree to the collection and use of information as outlined in this Privacy Policy. If you do not agree, please do not use the Services.
        </p>

        <Section title="1. Information We Collect">
          <SubSection label="a) Information You Provide Directly">
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Contact details: Name, phone number, email address, postal address</li>
              <li>Order details: Product purchase history, billing/shipping information</li>
              <li>Account information: Login credentials, preferences</li>
              <li>Customer support queries and feedback</li>
            </ul>
          </SubSection>
          <SubSection label="b) Automatically Collected Information">
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
            </ul>
            <p className="mt-3">This data is gathered using technologies like cookies and other tracking tools to enhance your browsing experience and improve our services.</p>
          </SubSection>
          <SubSection label="c) Third-Party Sources">
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Payment gateways (e.g., to process transactions)</li>
              <li>Analytics providers (e.g., to analyze traffic and usage patterns)</li>
              <li>Advertising or marketing platforms (e.g., to optimize campaign performance)</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc list-inside space-y-1.5">
            <li>Process and fulfill orders</li>
            <li>Communicate with you about orders, updates, or issues</li>
            <li>Improve the functionality and user experience of the website</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Send promotional emails, newsletters, and marketing offers (you can opt out anytime)</li>
            <li>Monitor and prevent fraudulent transactions and abuse of our Services</li>
          </ul>
        </Section>

        <Section title="3. How We Share Your Information">
          <p className="mb-3">Your personal information may be shared only in limited circumstances:</p>
          <ul className="list-disc list-inside space-y-1.5">
            <li>With service providers such as payment processors, hosting providers, and email service platforms</li>
            <li>With business partners to conduct joint promotions or events (only with your consent)</li>
            <li>With legal authorities where required by law, to protect our rights or in connection with a legal claim</li>
            <li>With affiliates or during business restructuring, such as mergers or acquisitions</li>
          </ul>
          <p className="mt-3">We do not sell your personal information. We do not share sensitive personal information for targeted advertising purposes.</p>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          Cookies help us provide, protect, and improve our services. They enable functionalities like remembering your preferences and measuring user activity. You can manage or disable cookies in your browser settings. However, disabling cookies may affect certain features or functionalities of the website.
        </Section>

        <Section title="5. User-Generated Content">
          If you post content (e.g., reviews or comments) on public areas of the Site, it becomes publicly accessible. We are not responsible for how others use this information.
        </Section>

        <Section title="6. External Links">
          Our website may include links to third-party sites. We are not responsible for the privacy or security practices of these external platforms. Please review their privacy policies separately.
        </Section>

        <Section title="7. Children's Privacy">
          Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information, please contact us for deletion.
        </Section>

        <Section title="8. Security and Retention">
          We take reasonable precautions to protect your personal information. However, no online transmission or storage is completely secure. We retain your information only as long as necessary for our business purposes or to meet legal requirements.
        </Section>

        <Section title="9. Your Rights">
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Access and update your personal information</li>
            <li>Delete your data</li>
            <li>Opt out of marketing communications</li>
            <li>Restrict or object to certain data processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-4">To make any such request, please contact us at:</p>
          <p className="mt-2 text-gray-300 leading-relaxed">
            Zeen Digital Solutions LLP<br />
            Sector 49, Gurgaon, Haryana, 122018
          </p>
        </Section>

        <Section title="10. Updates to this Privacy Policy">
          We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. Updates will be posted on this page with the revised date.
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

function SubSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-gray-200 font-medium mb-1">{label}</p>
      {children}
    </div>
  );
}
