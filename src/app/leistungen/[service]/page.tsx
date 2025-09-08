import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ServiceHero from '@/components/ServiceHero';
import ServiceBenefits from '@/components/ServiceBenefits';
import TreatmentSteps from '@/components/TreatmentSteps';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getServiceBySlug, getServiceSlugs } from '@/lib/services';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((service) => ({
    service,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  
  if (!service) {
    return {
      title: 'Service nicht gefunden',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero 
          title={service.title}
          subtitle={service.subtitle}
          heroImage={service.heroImage}
        />
        <ServiceBenefits 
          benefits={service.benefits}
          heroImage={service.heroImage}
          title={service.title}
        />
        <TreatmentSteps steps={service.treatmentSteps} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
