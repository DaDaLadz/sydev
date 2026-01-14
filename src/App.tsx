import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
