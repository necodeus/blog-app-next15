import { LikeButton } from '@components/Post/components/Comments/LikeButton';
import { DislikeButton } from '@components/Post/components/Comments/DislikeButton';
import { RepliesButton } from '@components/Post/components/Comments/RepliesButton';

import styles from './CommentActions.module.css';

type CommentActionsProps = {
    postId: string;
    commentId: string;
    upvotes: number;
    downvotes: number;
    repliesCount: number;
    isUpvoted: boolean;
    isDownvoted: boolean;
    isExpanded?: boolean;
};

export const CommentActions = ({ upvotes, downvotes, repliesCount, isUpvoted, isDownvoted, isExpanded = false }: CommentActionsProps) => {
    return (
        <div className="mb-2 mt-1">
            <div className="flex items-center">
                <button className="flex items-center font-medium">
                    <LikeButton extraClasses="mr-[5px] w-[18px] h-[18px]" isActive={isUpvoted} />
                    { upvotes }
                </button>
                <div className={styles.divSeparator}></div>
                <button className="flex items-center font-medium">
                    <DislikeButton extraClasses="mr-[5px] w-[18px] h-[18px]" isActive={isDownvoted} />
                    { downvotes }
                </button>
                <div className={styles.divSeparator}></div>
                <button
                    className="flex items-center font-medium"
                    style={{
                        transition: 'opacity 0.15s ease-in-out',
                        opacity: isExpanded ? 1 : 0.5,
                    }}
                >
                    <RepliesButton extraClasses="mr-[5px] w-[18px] h-[18px]" isActive={isExpanded} />
                    { repliesCount }
                </button>
            </div>
        </div>
    );
};
