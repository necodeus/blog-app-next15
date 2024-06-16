/* eslint-disable @next/next/no-img-element */

import moment from "moment"
import { sha256 } from 'js-sha256'

import { CommentActions } from '@components/post-comments/CommentActions'
import { CommentContent } from '@components/post-comments/CommentContent'
import { CommentReplyInput } from '@components/post-comments/CommentReplyInput'
import { CommentReply } from '@components/post-comments/CommentReply'

import styles from './CommentList.module.css'

const getGravatarURL = (name: string, size = 40) => {
    const lowercaseName = String(name).trim().toLowerCase()

    const hash = sha256(lowercaseName)

    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=g`
}

type CommentListProps = {
    postId: string;
    comments: {
        id: string;
        author_name: string;
        created_at: string;
        content: string;
        upvotes: number;
        downvotes: number;
        action: {
            value: number;
        };
        replies: {
            id: string;
            author_name: string;
            created_at: string;
            content: string;
            upvotes: number;
            downvotes: number;
            action: {
                value: number;
            };
        }[];
    }[];
};

export const CommentList = ({ comments, postId }: CommentListProps) => {
    return (
        <div>
            {comments.map((comment) => {
                const activeReplyCommentId = null;

                return <div className="mx-[15px] mt-[15px]" key={comment.id}>
                    <div className="mb-2 flex">
                        <div
                            className="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] bg-cover bg-center !rounded-full bg-[#eee] mr-3">
                            <img
                                width="40px"
                                height="40px"
                                src={getGravatarURL(comment.author_name, 40)}
                                alt="post author"
                                className="rounded-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="flex items-center font-medium">{ comment.author_name }</div>
                            </div>

                            <div className={styles.divSeparator}></div>

                            <div className="flex items-center">
                                { moment(comment.created_at).fromNow() }
                            </div>
                        </div>
                    </div>
                    <CommentContent content={comment.content} />
                    <CommentActions
                        postId={postId}
                        commentId={comment.id}
                        upvotes={comment.upvotes}
                        downvotes={comment.downvotes}
                        repliesCount={comment.replies.length}
                        isUpvoted={comment.action?.value === 1}
                        isDownvoted={comment.action?.value === -1}
                        isExpanded={comment.id !== activeReplyCommentId}
                    />
                    {comment.id === activeReplyCommentId && <div>
                        {comment?.replies?.map((reply) => <CommentReply reply={reply} />)}
                        <CommentReplyInput />
                    </div>}
                </div>
            })}
        </div>
    );
};
