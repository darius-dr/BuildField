import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Buildfield',
  description: 'Privacy Policy for Buildfield - Your Product Growth Partner',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg-void)]">
      {/* Header */}
      <header className="border-b border-[var(--border-subtle)]">
        <div className="container-custom py-6">
          <Link
            href="/"
            className="text-[var(--text-secondary)] hover:text-[var(--neon-pink)] transition-colors text-sm"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-[var(--text-tertiary)] mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                1. Introduction
              </h2>
              <p>
                Buildfield (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website buildfield.io or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text-primary)]">Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact form or request an audit.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Technical Data:</strong> IP address, browser type, device information, and operating system.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Communication Data:</strong> Records of correspondence if you contact us directly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you relevant information about our services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                4. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. These may include essential cookies for website functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                5. Data Sharing
              </h2>
              <p className="mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations (hosting, analytics)</li>
                <li>Professional advisors (lawyers, accountants) when necessary</li>
                <li>Authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                7. Your Rights
              </h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:{' '}
                <a
                  href="mailto:hello@buildfield.io"
                  className="text-[var(--neon-pink)] hover:underline"
                >
                  hello@buildfield.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
