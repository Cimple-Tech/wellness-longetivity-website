import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import { SERVICES_DATA } from '@/data/salonData';

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  return {
    title: `${service.seoTitle || service.name} | Mantra Spa & Salon`,
    description: service.seoDescription || service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-aura-bg">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-36">
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  );
}
