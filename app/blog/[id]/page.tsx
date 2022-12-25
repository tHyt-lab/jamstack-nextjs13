import { format } from 'date-fns';
import { use } from 'react';
import { client } from '../../../lib/client';

type ParamsType = {
  id: string;
};

export default function Blog({ params }: { params: ParamsType }) {
  const blog = use(fetchBlog(params.id));

  return (
    <>
      <main>
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <div>{format(new Date(blog.publishedAt), 'yyyy/MM/dd HH:mm:ss')}</div>
        <div
          className="container mt-2"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const data: ContentListProps = await client.get({ endpoint: 'blogs' });
  return data.contents;
}

const fetchBlog = async (id: string): Promise<ContentProps> => {
  const blog: ContentProps = await client.get({ endpoint: 'blogs', contentId: id });

  return blog;
};
