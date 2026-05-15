import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FooterSection } from '@/sections/FooterSection';
import { BurgerMenu } from '@/components/BurgerMenu';

export default function RefundPolicy() {
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
        <h1 className="font-bebas text-6xl sm:text-7xl text-white mb-1 tracking-wide">Refund Policy</h1>
        <p className="text-emerald-500 font-orbitron text-xs uppercase tracking-widest mb-2">Zeen Digital Solutions LLP</p>
        <p className="text-gray-600 text-sm mb-10">Last Updated: 15-01-2026</p>

        <p className="text-gray-300 leading-relaxed mb-10">
          Thank you for subscribing to Zeen Digital services. We hope you are satisfied with our services, but if not, we're here to help.
        </p>

        <Section title="1. Free Trial">
          Zeen Digital offers no free trial for new users to experience the services before purchasing a subscription. During the trial period, users can cancel their subscription at any time without being charged.
        </Section>

        <Section title="2. Cancellation Policy">
          Subscribers may cancel their recurring subscription at any time. Upon cancellation, your account will remain active until the end of your current billing cycle.
        </Section>

        <Section title="3. Refund Eligibility">
          <p>To be eligible for a refund, you must submit a request within 2 days of your subscription start date. Refunds may be considered on a case-by-case basis and are granted at the sole discretion of Zeen Digital.</p>
          <p className="mt-3">Refund requests can be made if you encounter technical issues that prevent you from using our service and that cannot be resolved by our support team. Proof of the issue may be required.</p>
          <p className="mt-3">Please note that refunds are not guaranteed and may vary depending on the circumstances. Refund requests due to issues beyond Zeen Digital's control (e.g., changes in personal circumstances, third-party hardware or software failures) will not be honoured.</p>
        </Section>

        <Section title="4. Process for Requesting a Refund">
          To request a refund, please contact our customer support team at{' '}
          <a href="mailto:reetesh.kumar@zeendigital.com" className="text-emerald-400 hover:underline">reetesh.kumar@zeendigital.com</a>.
          {' '}Include your account information, subscription details, and a brief explanation of why you are requesting a refund.
        </Section>

        <Section title="5. Refund Processing">
          <p>Once your refund request is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.</p>
          <p className="mt-3">If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7 working days. Please note that refunds can only be made back to the original payment method used at the time of purchase.</p>
        </Section>

        <Section title="6. Changes to Refund Policy">
          Zeen Digital reserves the right to modify this refund policy at any time. Changes will take effect immediately upon their posting on the website. By continuing to use our services after changes are made, you agree to be bound by the revised policy.
        </Section>

        <Section title="7. Contact Us">
          If you have any questions about our refund policy, please contact us at{' '}
          <a href="mailto:reetesh.kumar@zeendigital.com" className="text-emerald-400 hover:underline">reetesh.kumar@zeendigital.com</a>
        </Section>

        {/* Scenarios */}
        <div className="mt-4 mb-2">
          <h2 className="font-bebas text-4xl text-white mb-6 tracking-wide">Scenarios Where Refunds Would Typically Be Granted</h2>
          <Section title="1. Technical Issues">
            The customer experiences persistent technical issues that prevent them from using the SaaS product effectively, despite multiple attempts by the support team to resolve the problem. For example, the software fails to load or crashes frequently, impeding the customer's ability to perform necessary tasks.
          </Section>
          <Section title="2. Billing Error">
            The customer was incorrectly charged due to a billing error on Zeen Digital's part. For example, they were billed twice in one month, or charged after cancelling their subscription in accordance with the cancellation policy.
          </Section>
        </div>

        <div className="mt-4 mb-2">
          <h2 className="font-bebas text-4xl text-white mb-6 tracking-wide">Scenarios Where Refunds Would Not Typically Be Granted</h2>
          <Section title="1. Change of Mind">
            The customer decides they no longer want or need the SaaS product after the refund eligibility period has passed. For example, they found a different product they prefer, or they no longer need the service due to changes in their business.
          </Section>
        </div>

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
