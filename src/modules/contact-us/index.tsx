import { ErrorBoundary } from "react-error-boundary";
import Footer from "./components/Footer";
import HelpDesk from "./components/HelpDesk";
import HeroSection from "./components/HeroSection";
import OtherQuestions from "./components/OtherQuestions";
import PopularQuestions from "./components/PopularQuestions";
import ErroFallbackUi from "../../components/ErroFallbackUi";
import { ContactProvider } from "../../context/ContactContext";

const ContactUs = () => {
  return (
    // Catches errors in any component below and renders error fallback UI
    <ErrorBoundary fallback={<ErroFallbackUi />}>
      {/* Context Provider for Contact Context */}
      <ContactProvider>
        <HeroSection />
        <HelpDesk />
        <PopularQuestions />
        <OtherQuestions />
        <div className="border-t">
          <Footer />
        </div>
      </ContactProvider>
    </ErrorBoundary>
  );
};

export default ContactUs;
