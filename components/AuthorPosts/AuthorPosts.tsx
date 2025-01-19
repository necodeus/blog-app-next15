import Link from "next/link";

type Props = {
  posts: {
    id: string;
    path: string;
    title: string;
    teaser: string;
    tagName: string;
    image: string;
  }[];
};

export const AuthorPosts = ({ posts }: Props) => {
  if (!posts?.length) {
    return <div className="p-[30px] component-border-bottom">Brak wpisów</div>;
  }

  return (
    <ul className="font-jost inline-flex flex-col gap-[30px] p-[30px] component-border-bottom w-full">
      {posts?.map((post) => {
        return (
          <li key={post.id} className="flex flex-col">
            <h1>
              <Link href={post.path || ""} className="text-[38px]">
                {post.title}
              </Link>
            </h1>
            <p className="line-clamp-3 text-[20px] leading-[35px] mt-[20px]">
              {post.teaser}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
