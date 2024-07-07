type SectionWrapperProps = {
    width?: string;
    aside?: React.ReactNode;
    children: React.ReactNode;
    extraClasses?: string;
};

export const SectionWrapper = ({
    width = 'auto',
    aside,
    children,
    extraClasses,
}: SectionWrapperProps) => {
    const classes = ['flex', extraClasses].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <div className="desktop flex flex-col items-end" style={{ width, minWidth: width }}>
                { aside }
            </div>
            <div className="w-full">
                { children }
            </div>
        </div>
    );
};
