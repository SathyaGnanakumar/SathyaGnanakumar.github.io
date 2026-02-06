import { useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const sectionIds = portfolioData.nav.map((item) => item.id);

const App = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header navItems={portfolioData.nav} sectionIds={sectionIds} />
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
      </main>
      <Footer data={portfolioData.footer} />
    </div>
  );
};

export default App;
