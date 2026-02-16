import { Categories } from "@/src/components/landing/Categories";
import { FAQ } from "@/src/components/landing/FAQ";
import { Footer } from "@/src/components/landing/Footer";
import { Hero } from "@/src/components/landing/Hero";
import { HowItWorks } from "@/src/components/landing/HowItWorks";
import { LeadForm } from "@/src/components/landing/LeadForm";
import { Navbar } from "@/src/components/landing/Navbar";
import { Strategy } from "@/src/components/landing/Strategy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <Strategy />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
