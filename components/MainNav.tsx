import Link from "next/link";

export const MainNav = () => {
  return (
    <div className="flex flex-row flex-1 items-center justify-center">
      <Link href="#journey" className="px-3">
        Journey
      </Link>
      <Link href="#stories" className="px-3">
        Stories
      </Link>
      <Link href="#skills" className="px-3">
        Skills & Experiance
      </Link>
      <Link href="#contact" className="px-3">
        Contact
      </Link>
    </div>
  );
};
