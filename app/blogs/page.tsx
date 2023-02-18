import dayjs from "dayjs";
import Link from "next/link";
import { getBlogs } from "../apis";

/**
 * Blog Index Component
 */
export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div>
      <ul
        role="list"
        className="flex flex-col items-center justify-center gap-2"
      >
        {blogs.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="relative w-[80%] rounded border border-solid bg-slate-100 p-4 shadow transition hover:cursor-pointer hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <small>
              <time dateTime={item.publishedAt}>
                {dayjs(item.publishedAt).format("YYYY/MM/DD")}
              </time>
            </small>
            <h2>{item.title}</h2>
            <Link
              className="absolute top-0 left-0 h-full w-full"
              href={`/blogs/${item.id}`}
            />
          </article>
        ))}
      </ul>
    </div>
  );
}
