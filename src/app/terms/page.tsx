import { pageMetadata } from "@/lib/metadata";
import siteConfig from "@/data/site_config";
import LegalPage from "@/components/sections/LegalPage";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms for using the ${siteConfig.name} website.`,
  path: "/terms",
});

// DRAFT for review by the company (and ideally a lawyer) before launch.
export default function TermsPage() {
  const { legalName, email } = siteConfig;
  return (
    <LegalPage title="Terms of Service" updated="31 October 2026">
      <p>
        These terms cover your use of www.xyvin.com, operated by {legalName}. By using the site you agree to them.
        Project work is governed by a separate written agreement between you and Xyvin.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may browse the site and share links to it. You may not misuse it, for example by attempting to break its
        security, sending spam through the contact form, or copying large parts of its content without permission.
      </p>

      <h2>Content and intellectual property</h2>
      <p>
        The text, design and code of this site belong to Xyvin unless stated otherwise. Client names, logos and
        project images remain the property of their owners.
      </p>

      <h2>No professional advice</h2>
      <p>
        Articles and other content on this site are for general information. They are not advice for your specific
        situation, and we make no promise that they are complete or up to date.
      </p>

      <h2>Links to other sites</h2>
      <p>We link to client and third-party websites. We are not responsible for their content or practices.</p>

      <h2>Liability</h2>
      <p>
        The site is provided &ldquo;as is&rdquo;. To the extent the law allows, Xyvin is not liable for any loss
        arising from your use of the site.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts of Kochi, Kerala have jurisdiction.</p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms from time to time; the date at the top shows the latest version. Questions? Email{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </LegalPage>
  );
}
