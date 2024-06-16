type CommentContentProps = {
    content: string;
};

export const CommentContent = ({ content }: CommentContentProps) => {
    return (
        <div className="mb-2">
            { content }
        </div>
    );
};
