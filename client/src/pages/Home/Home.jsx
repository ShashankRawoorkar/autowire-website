import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Process from './components/Process/Process.jsx';
import TechMarquee from './components/TechMarquee/TechMarquee.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <TechMarquee />
      <ContactForm />
    </>
  );
}
