import { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Features,
  Pricing,
  Testimonials,
  Footer,
} from "./components";
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 70);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
