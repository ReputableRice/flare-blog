import React from 'react';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Flare - Legal Documents | Terms & Privacy',
    description: 'Detailed Terms of Service, Privacy Policy, and other legal documents for Flare.',
  };
};

export default function LegalPage(): JSX.Element {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0 mb-16">
      <section className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">Legal Documents</h1>

        {/* Terms of Service */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Terms of Service</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>Last updated: November 20, 2024</p>
            <p>Please read these Terms of Service carefully when using Flare.</p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">1. Acceptance of Terms</h3>
            <p>By accessing or using Flare, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use immediately.</p>
            <ul>
              <li>These Terms constitute a legal agreement between you and Flare.</li>
              <li>We reserve the right to update these Terms at any time.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">2. Service Description</h3>
            <p>Flare provides real-time wildfire alerts and safety information. While we strive for accuracy, the information provided may not always be up-to-date or complete.</p>
            <ul>
              <li>The service is intended for informational purposes only.</li>
              <li>We do not guarantee uninterrupted or error-free access to the platform.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">3. User Responsibilities</h3>
            <p>As a user, you are responsible for:</p>
            <ul>
              <li>Ensuring the accuracy of information you provide to us.</li>
              <li>Using the service in compliance with applicable laws and regulations.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">4. Limitation of Liability</h3>
            <p>Flare is not liable for any damages resulting from:</p>
            <ul>
              <li>Use of or inability to use the service.</li>
              <li>Reliance on information provided by the service.</li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>Last updated: November 20, 2024</p>
            <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data.</p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">1. Information Collection</h3>
            <p>We collect the following types of information:</p>
            <ul>
              <li>Personal information: Name, email, and phone number provided by you.</li>
              <li>Usage data: Interaction patterns, IP address, and device information.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">2. Use of Information</h3>
            <p>We use the information collected to:</p>
            <ul>
              <li>Provide and improve the services we offer.</li>
              <li>Personalize your experience on the platform.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">3. Sharing of Information</h3>
            <p>We may share your information with third parties in the following situations:</p>
            <ul>
              <li>To comply with legal requirements or respond to lawful requests.</li>
              <li>With service providers who assist us in delivering the platform.</li>
              <li>During a business transaction, such as a merger or acquisition.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8">4. Data Security</h3>
            <p>We implement industry-standard measures to protect your data from unauthorized access, disclosure, or destruction.</p>
            <ul>
              <li>However, no method of transmission over the internet is 100% secure.</li>
              <li>We cannot guarantee the absolute security of your data.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export const revalidate = 3600; // Revalidate every hour
