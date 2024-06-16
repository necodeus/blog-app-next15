/* eslint-disable @next/next/no-img-element */

import moment from "moment"

import styles from './PostList.module.css';
import Link from "next/link";

type PostListProps = {
    posts: {
        id: string;
        path: string;
        author_avatar_url: string;
        author_name: string;
        modified_at: string;
        title: string;
    }[];
};

export const PostList = ({ posts }: PostListProps) => {
    return (
        <ul className="font-jost inline-flex flex-col">
            {posts?.map((post) => {
                return <li className={styles.list} key={post.id}>
                    <div className="flex items-center">
                        <picture>
                            <img
                                src={post.author_avatar_url}
                                alt="post author"
                                loading="lazy"
                                className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                            />
                        </picture>
                        <span className="ml-[10px] text-[16px]"><b className="font-semibold">{ post.author_name }</b></span>
                        <div className={styles.divSeparator}></div>
                        <span className="text-[16px]">{ moment(post.modified_at).fromNow() }</span>
                    </div>
                    <h1 className="flex mt-[10px]">
                        <span className="text-[38px]">{ post.title }</span>
                    </h1>
                    <Link href={post.path} className="w-full h-full top-0 bottom-0 right-0 left-0 absolute"></Link>
                </li>
            })}
        </ul>
    )
}