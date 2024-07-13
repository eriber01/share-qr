import { Home } from "@/components/Home";
import { About } from "@/components/Home/About";
import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* header section */}
      <Header />
      {/* home section */}
      <Home />
      {/* about app session */}
      <About />
      {/* sugerence session */}
      <Footer />
    </div>
  );
}
