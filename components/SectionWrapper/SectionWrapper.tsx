type Props = {
    width?: string;
    aside?: React.ReactNode;
    children: React.ReactNode;
    extraClasses?: string;
    childrenClasses?: string;
};

export const SectionWrapper = ({
    width = 'auto',
    aside,
    children,
    extraClasses = '',
    childrenClasses = '',
}: Props) => {
    const classes = ['flex', extraClasses].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <div className="flex flex-col items-end" style={{ width, minWidth: width }}>
                { aside }
            </div>
            <div className={'w-full ' + childrenClasses}>
                { children }
            </div>
        </div>
    );
};
