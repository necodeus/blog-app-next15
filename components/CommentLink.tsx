export const CommentLink = ({ id, children, extraClasses }: any) => {
    const classes = ['cursor-pointer', extraClasses].join(' ');

    return (
        <div className={classes}>
            { children }
        </div>
    );
};
