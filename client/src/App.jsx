import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext.jsx';
import AppLayout from './components/layout/AppLayout/AppLayout.jsx';
import Hero from './pages/Home/components/Hero/Hero.jsx';
import Services from './pages/Home/components/Services/Services.jsx';
import Process from './pages/Home/components/Process/Process.jsx';
import TechPage from './pages/Tech/TechPage.jsx';
import ContactForm from './pages/Home/components/ContactForm/ContactForm.jsx';
import WebServicePage from './pages/Services/WebServicePage.jsx';
import AutomationServicePage from './pages/Services/AutomationServicePage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppLayout>
          <Routes>
            <Route path="/"                     element={<Hero />} />
            <Route path="/services"             element={<Services />} />
            <Route path="/services/web"         element={<WebServicePage />} />
            <Route path="/services/automation"  element={<AutomationServicePage />} />
            <Route path="/process"              element={<Process />} />
            <Route path="/tech"                 element={<TechPage />} />
            <Route path="/contact"              element={<ContactForm />} />
          </Routes>
        </AppLayout>
      </ToastProvider>
    </BrowserRouter>
  );
}
