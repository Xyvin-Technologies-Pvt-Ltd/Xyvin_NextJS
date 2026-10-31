import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <PageHeader breadcrumb={[{ label: title }]} title={title} intro={`Last updated: ${updated}`} />
      <Container className="max-w-3xl py-14 sm:py-20">
        <div className="prose-site">{children}</div>
      </Container>
    </>
  );
}
