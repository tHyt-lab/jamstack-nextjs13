import Link from 'next/link';
import { use } from 'react';
import { client } from '../lib/client';

type Props = {
  datas: any[];
};

const fetchBlogs = async (): Promise<Props> => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    datas: data.contents,
  };
};

export default function Home() {
  const blog = use(fetchBlogs());

  return (
    <div>
      <ul>
        {blog.datas.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
