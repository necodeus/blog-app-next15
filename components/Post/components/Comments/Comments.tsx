import { CommentList } from '@components/Post/components/Comments/CommentList';
import { CommentListEmpty } from '@components/Post/components/Comments/CommentListEmpty';
import { SectionTitle } from '@components/components/SectionTitle/SectionTitle';

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
        <div className="font-jost py-[30px] text-[17px]">
            {comments?.length > 0 && <CommentList postId={postId} comments={comments} />}

            {isCommentsVisible && comments?.length === 0 && <CommentListEmpty />}
        </div>
    );
};
