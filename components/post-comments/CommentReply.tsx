/* eslint-disable @next/next/no-img-element */

import { LikeButton } from '@components/post-comments/LikeButton'
import { DislikeButton } from '@components/post-comments/DislikeButton'

import styles from './CommentReply.module.css'

import moment from "moment"
import 'moment/locale/pl';

import { sha256 } from 'js-sha256'

function getGravatarURL(name: string, size = 40) {
    const lowercaseName = String(name).trim().toLowerCase()

    const hash = sha256(lowercaseName)

    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=g`
}

type CommentReplyProps = {
    reply: {
        author_name: string;
        created_at: string;
        content: string;
        upvotes: number;
        downvotes: number;
        action: {
            value: number;
        };
    };
};

export const CommentReply = ({ reply }: CommentReplyProps) => {
    return (
        <div className="text-[15px] px-3 py-2 bg-[#fbfbfb] [border-left:1px_solid_#eee] mt-1 rounded-[7px]">
            <div className="flex mb-1">
                <div
                    className="min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] bg-cover bg-center !rounded-[50%] bg-[#eee] mr-2">
                    <img
                        width="20px"
                        height="20px"
                        src={getGravatarURL(reply.author_name, 20)}
                        alt="post author"
                        className="rounded-[50%]"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center font-medium">
                        { reply.author_name }
                    </div>
                    <div className={styles.divSeparator}></div>
                    <div className="flex items-center">
                        { moment(reply.created_at).fromNow() }
                    </div>
                </div>
            </div>
            <div className="mb-1">{ reply.content }</div>
            <div className="flex items-center">
                <button className="flex items-center">
                    <LikeButton extraClasses="mr-[5px] w-[16px] h-[16px]" isActive={reply.action?.value === 1} />
                    { reply.upvotes }
                </button>
                <div className={styles.divSeparator}></div>
                <button className="flex items-center">
                    <DislikeButton extraClasses="mr-[5px] w-[16px] h-[16px]" isActive={reply.action?.value === -1} />
                    { reply.downvotes }
                </button>
            </div>
        </div>
    );
};

