"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Company from '@/components/Company';
import Skills from '@/components/Skills';
import { FloatingDock } from '@/components/ui/FloatingDocs';
const dockItems = [
  {
    title: 'Home',
    icon: '/icon/home.svg',
    href: '#',
  },

  {
    title: 'Portfolio',
    icon: '/icon/porto.svg',
    href: '#',
  },

  {
    title: 'GitHub',
    icon: '/icon/git.svg',
    href: '#',
  },
  {
    title: 'WhatsApp',
    icon: '/icon/whatsapp.svg',
    href: '#',
  },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        {/* <FloatingDock
          items={dockItems}
          desktopClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[5000]" // Posisi di bawah tengah untuk desktop
          mobileClassName="fixed bottom-4 right-4 z-[5000]" // Posisi di pojok kanan bawah untuk mobile
        /> */}
        <Hero />

        <Skills />
        <RecentProjects />

        {/* <Clients /> */}
        <Experience />
        <Grid />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
