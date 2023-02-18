import { getBlogContent } from "@/app/apis";
import dayjs from "dayjs";

type Props = {
  params: {
    id: string;
  };
};

/**
 * Blog Content Component
 */
export default async function BlogContent({ params: { id } }: Props) {
  const blog = await getBlogContent({ id });
  return (
    <div className="flex items-center justify-center px-4">
      <article>
        <div className="rounded border border-solid bg-slate-100 p-4 shadow  dark:bg-slate-800">
          <small>
            公開：
            <time dateTime={blog.publishedAt}>
              {dayjs(blog.publishedAt).format("YYYY/MM/DD HH:mm")}
            </time>
          </small>
          <span className="block h-1" />
          <h1 className="text-xl">{blog.title}</h1>
        </div>
        <span className="block h-4" />
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </article>
    </div>
  );
}
