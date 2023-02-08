import Image from 'next/image';
import Link from 'next/link';

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Awaited<Data[]> = await res.json();
  return posts;
};

export default async function Page() {
  const data = await getPosts();
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <p>
        Google offered in:{' '}
        <Link className="underline text-blue-600" href="/">
          Français
        </Link>
      </p>
      <ul className="flex flex-col gap-4">
        {data.map((item) => (
          <li key={item.id} className="border border-amber-200 p-4 ">
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
