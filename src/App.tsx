import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-gray-700 overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="h-[200vh]">
        <Services />
      </div>
      <div className="h-[200vh]">
        <CaseStudies />
      </div>
      <div className="h-[200vh]">
        <Contact />
      </div>
      <div className="h-[200vh]">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
