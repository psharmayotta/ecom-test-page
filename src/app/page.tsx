import Header from '../components/Header';
import Hero from '../components/Hero';
import SaleBanner from '../components/SaleBanner';
import ProductCarousel from '../components/ProductCarousel';
import CategoriesGrid from '../components/CategoriesGrid';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SaleBanner />
      <ProductCarousel />
      <CategoriesGrid />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
