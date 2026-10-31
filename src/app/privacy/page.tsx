import { pageMetadata } from "@/lib/metadata";
import siteConfig from "@/data/site_config";
import LegalPage from "@/components/sections/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects personal data submitted through this website.`,
  path: "/privacy",
});

// DRAFT for review by the company (and ideally a lawyer) before launch.
export default function PrivacyPage() {
  const { legalName, email, addressLines } = siteConfig;
  return (
    <LegalPage title="Privacy Policy" updated="31 October 2026">
      <p>
        This policy explains how {legalName} (&ldquo;Xyvin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
        personal data collected through www.xyvin.com. We follow India&apos;s Digital Personal Data Protection Act, 2023,
        and apply the same care to visitors from other countries.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, and optionally your phone number, company, the service
          you&apos;re interested in, and your message.
        </li>
        <li>
          <strong>Analytics (only if you accept cookies):</strong> pages visited, how you arrived at the site, device and
          browser type, and approximate location, collected by Google Analytics.
        </li>
        <li>
          <strong>Server logs:</strong> our hosting provider records technical data such as IP address and browser
          type to keep the site secure and working.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and discuss a possible project with you.</li>
        <li>To understand how the site is used and improve it.</li>
        <li>To protect the site against spam and abuse.</li>
      </ul>
      <p>We do not sell your personal data or use it for advertising.</p>

      <h2>Who we share it with</h2>
      <p>We use a small number of service providers that process data on our behalf:</p>
      <ul>
        <li>Vercel, which hosts this website.</li>
        <li>Resend, which delivers contact form messages to our inbox.</li>
        <li>Google (Google Analytics and Google Workspace), for analytics and email.</li>
      </ul>
      <p>These providers may store data outside India. We only share what they need to provide their service.</p>

      <h2>Cookies</h2>
      <p>
        We only set analytics cookies after you click &ldquo;Accept&rdquo; in the cookie notice. If you decline, no
        analytics cookies are set. You can change your choice at any time by clearing this site&apos;s data in your
        browser, which will show the notice again.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries for as long as needed to respond and, if we work together, for the duration of that
        relationship plus any period required by law. Analytics data is kept for 14 months.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal data we hold about you, or withdraw consent you have
        given. Email us at <a href={`mailto:${email}`}>{email}</a> and we&apos;ll respond within 30 days.
      </p>

      <h2>Contact</h2>
      <p>
        {legalName}
        <br />
        {addressLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </LegalPage>
  );
}
