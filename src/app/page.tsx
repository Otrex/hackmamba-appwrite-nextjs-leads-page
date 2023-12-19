import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinSteps from "@/components/JoinSteps";

export default function Home() {
  return (
    <main className="min-h-screen text-center px-24 py-10">
      <div className="max-w-[1000px] mx-auto pb-24 bg-white">
        <Header />
        <About />
        <JoinSteps />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
