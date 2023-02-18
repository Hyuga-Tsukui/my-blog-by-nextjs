import Link from "next/link";

/**
 * Application Base Header
 * @returns
 */
export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-items-center gap-4 p-3">
      <h1 className="text-2xl">Hyuga.dev</h1>
      <nav role="navigation" className="flex gap-4">
        <Link href="/blogs">Blogs</Link>
        <Link href="/">ScrapBox</Link>
        <Link href="/">AboutMe</Link>
      </nav>
    </header>
  );
};
