import Image from "next/image";
import portrait from "@/public/tomek-portret.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row items-center relative min-h-[550px]">
      <div className="w-11/12 lg:w-2/3 flex flex-col justify-start items-start">
        <span className="text-gray-500 mb-4 block text-2xl mt-16">
          Hi, my name is Tomasz Fraczek
        </span>
        <h1 className="text-5xl tracking-tighter font-sans font-normal">
          I&#39;m a frontend developer, specialized in development of web
          applications using React, Next.js, Node.js & more
        </h1>
        <Link
          href="#contact"
          className="border border-black py-5 px-16 mt-6 block uppercase"
        >
          Get In Touch
        </Link>
      </div>
      <Image src={portrait} alt="portrait" className="max-w-sm lg:self-end" />
    </div>
  );
};
