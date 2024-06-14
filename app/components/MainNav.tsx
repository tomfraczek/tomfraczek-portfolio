import Link from "next/link";

export const MainNav = () => {
  return (
    <div className="flex flex-row flex-1 items-center justify-center">
      <Link href="/" className="px-3">
        Link
      </Link>
      <Link href="/" className="px-3">
        Link
      </Link>
      <Link href="/" className="px-3">
        Link
      </Link>
      <Link href="/" className="px-3">
        Link
      </Link>
    </div>
  );
};
