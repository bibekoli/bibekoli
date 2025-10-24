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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="description" content="I am a Full Stack Developer from Jhapa, Nepal." />
        <meta property="og:title" content="Bibek Oli - Full Stack Developer" />
        <meta property="og:description" content="I am a Full Stack Developer from Jhapa, Nepal." />
        <meta property="og:image" content="/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://bibekoli.com" />
      </Head>
      <main className="bg-secondary text-quaternary min-h-screen" id="home">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navigation />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}