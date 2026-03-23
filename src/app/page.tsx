import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Trust />
        <CTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
