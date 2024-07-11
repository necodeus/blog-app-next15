/* eslint-disable @next/next/no-img-element */

import 'moment/locale/pl';

import { sha256 } from 'js-sha256'

import { PublicationDetails } from "@components/components/PublicationDetails/PublicationDetails";

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

export const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div>
            {comments.map((comment) => {
                return <div className="mt-[15px]" key={comment.id}>
                    <PublicationDetails
                        publisher={{
                            name: 'necodeus',
                            path: '/autorzy/necodeus',
                            picture: {
                                '25x25': 'https://images.necodeo.com/1ad0fa37-17ad-4881-9ced-54d7718b35f5/25x25'
                            }
                        }}
                        createdAt={comment.created_at}
                    />

                    <div style={{ margin: '0 65px' }}>
                        { comment.content }
                    </div>
                </div>
            })}
        </div>
    );
};
