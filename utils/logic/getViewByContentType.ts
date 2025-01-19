import dynamic from "next/dynamic";

import Redirection from "@/views/Redirection";

const Error501NotImplemented = dynamic(() => import('@/views/Error501NotImplemented'));
const Error404NotFound = dynamic(() => import('@/views/Error404NotFound'));
const Posts = dynamic(() => import('@/views/Posts'));
const Post = dynamic(() => import('@/views/Post'));
const Authors = dynamic(() => import('@/views/Authors'));
const Author = dynamic(() => import('@/views/Author'));

const components = {
    POSTS: Posts,
    POST: Post,
    AUTHORS: Authors,
    AUTHOR: Author,
    REDIRECTION: Redirection,
} as {
    [key: string]: React.ComponentType<any>;
};

export const getViewByContentType = (contentType: string): React.ComponentType<any> => {
    if (!contentType) {
        return Error501NotImplemented
    }

    const View = components?.[contentType];

    if (!View) {
        return Error404NotFound;
    }

    return View;
}
