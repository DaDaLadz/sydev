import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-midnight overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
