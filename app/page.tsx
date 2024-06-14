import Image from "next/image";
import { Hero } from "../components/Hero";
import { StackBanner } from "../components/StackBanner";
import { Journey } from "@/components/Journey";
import { Questions } from "@/components/Questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24  overflow-hidden">
      <Hero />
      <StackBanner />
      <Journey />
      <Questions />
    </main>
  );
}
