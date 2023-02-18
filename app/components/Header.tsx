import Link from "next/link";
import { siZenn } from "simple-icons";

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
        <Link href="/scraps">Scraps</Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://zenn.dev/dimdim1996"
        >
          <div className="flex items-center">
            <svg
              height={14}
              width={14}
              viewBox="0 0 24 24"
              className="fill-[#3EA8FF]"
            >
              <path d={siZenn.path} />
            </svg>
            Zenn
          </div>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://almondine-ground-128.notion.site/Profile-51516a23c81f4b0fa43760ae6d33f6db"
        >
          AboutMe
        </Link>
      </nav>
    </header>
  );
};
