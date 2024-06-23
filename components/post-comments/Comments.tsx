import { CommentHeading } from '@components/post-comments/CommentHeading';
import { CommentInput } from '@components/post-comments/CommentInput';
import { CommentList } from '@components/post-comments/CommentList';
import { CommentListEmpty } from '@components/post-comments/CommentListEmpty';
import { CommentReplyInput } from './CommentReplyInput';

type CommentsProps = {
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
    isCommentsVisible: boolean;
};

export const Comments = ({
    postId,
    comments,
    isCommentsVisible,
}: CommentsProps) => {
    return (
        <div
            className="font-jost py-[30px] text-[17px] h-full"
            // v-observe-visibility="commentsVisibility"
        >
            <CommentHeading commentsCount={comments?.length} />
            <CommentReplyInput />
            {isCommentsVisible && comments?.length > 0 && <CommentList
                postId={postId}
                comments={comments}
            />}
            {isCommentsVisible && comments?.length === 0 && <CommentListEmpty />}
        </div>
    );
};
