import dayjs from "dayjs";
import Link from "next/link";
import { getScrapBox } from "../apis";

/**
 * Scraps Index Component
 */
export default async function Scraps() {
  const { pages } = await getScrapBox();
  return (
    <div>
      <ul
        role="list"
        className="flex flex-col items-center justify-center gap-2"
      >
        {pages.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="relative w-[80%] rounded border border-solid bg-slate-100 p-4 shadow transition hover:cursor-pointer hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <small>
              <time dateTime={item.updated}>
                {dayjs.unix(parseInt(item.updated)).format("YYYY/MM/DD")}
              </time>
            </small>
            <h2>{item.title}</h2>
            <Link
              className="absolute top-0 left-0 h-full w-full"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://scrapbox.io/hyuga-tsukui/${item.title}`}
            />
          </article>
        ))}
      </ul>
    </div>
  );
}
