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
        return (
            <div className="p-[30px] component-border-bottom">Brak wpisów</div>
        )
    }

    return (
        <div className="grid p-[30px] gap-[30px] component-border-bottom">
            {posts.map((post) => (
                <Link className="flex flex-col sm:flex-row items-center gap-[30px]" href={post.path || null} key={post.id}>
                    <img
                        // 3 lines only!
                        className="sm:min-w-[150px] sm:max-w-[150px] sm:min-h-[95px] sm:max-h-[95px] block object-cover rounded-[3px] overflow-hidden opacity-[0.6]"
                        src={post.image}
                    />
                    <div className="flex flex-col gap-[5px]">
                        <div className="text-[18px] font-medium">{post.title}</div>
                        <div className="text-[14px] line-clamp-3">{post.teaser}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
