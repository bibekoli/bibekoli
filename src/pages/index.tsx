import Head from "next/head";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibek Oli - Full Stack Developer</title>
      </Head>
      <main className="bg-primary text-quaternary" id="home">
        <Hero />
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}