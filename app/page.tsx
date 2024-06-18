import Image from "next/image";
import { Hero } from "../components/Hero";
import { StackBanner } from "../components/StackBanner";
import { Journey } from "@/components/Journey";
import { Questions } from "@/components/Questions";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export async function generateMetadata() {
  const siteURL = "https://www.tomfraczek.com";
  return {
    title: "Web & Mobile applications developer - Tomasz Fraczek",
    // keywords,
    // description,
    // openGraph: {
    //   title,
    //   description,
    //   image: image.url,
    // },
    alternates: {
      canonical: siteURL,
    },
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-10 lg:px-28 md:mb-10 overflow-hidden">
      <Hero />
      <StackBanner />
      <Journey />
      <Questions />
      <Experience />
      <Contact />
    </main>
  );
}
