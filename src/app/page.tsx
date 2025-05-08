import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      
      <section id="services" className="section bg-secondary">
        <Services />
      </section>
      
      <section id="testimonials" className="section">
        <Testimonials />
      </section>
      
      <section id="location" className="section bg-secondary">
        <Map address="Strada Maria Rosetti 26A, București 020487" />
      </section>
      
      <Footer />
      <StickyCallBar phoneNumber="0720.123.123" message="Call to make an appointment" />
    </main>
  );
}
