/* eslint-disable @next/next/no-img-element */

import moment from "moment"
import 'moment/locale/pl';

import styles from './PostsListing.module.css';
import Link from "next/link";

type PostsProps = {
    posts: {
        id: string;
        path: string;
        title: string;
        author_name: string;
        author_path: string | null;
        author_picture: {
            [key: string]: string;
        };
        created_at: string;
    }[];
};

export const PostsListing = ({ posts }: PostsProps) => {
    return (
        <ul className="font-jost inline-flex flex-col gap-[30px] p-[30px] component-border-bottom w-full">
            {posts?.map((post) => {
                return <li key={post.id}>
                    <div className="flex items-center">
                        <Link href={post.author_path || '#'} className="flex items-center">
                            <picture>
                                <img
                                    src={post.author_picture?.['25x25']}
                                    alt=""
                                    loading="lazy"
                                    className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                                />
                            </picture>
                            <span className="ml-[10px] text-[16px]">
                                <b className="font-medium">{ post.author_name }</b>
                            </span>
                        </Link>
                        {post.created_at && <div className={styles.divSeparator}></div>}
                        {post.created_at && <span className="text-[16px]">{ moment(post.created_at).fromNow() }</span>}
                    </div>
                    <h1 className="flex mt-[10px]">
                        <Link href={post.path || ''} className="text-[38px]"> { post.title }</Link>
                    </h1>
                </li>
            })}
        </ul>
    )
}