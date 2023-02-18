export type Blog = {
  id: string;
  title: string;
  description: string;

  /**
   * Sanitized html string
   */
  content: string;
  publishedAt: string;
};

/**
 * index list
 */
export type GetBlogsApi = {
  contents: {
    id: string;
    title: string;
    publishedAt: string;
  }[];
};

export type GetBlogContentApi = {
  contents: Blog[];
};
