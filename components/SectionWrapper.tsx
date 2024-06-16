type SectionWrapperProps = {
    width?: string;
    aside?: React.ReactNode;
    children: React.ReactNode;
};

export const SectionWrapper = ({
    width = 'auto',
    aside,
    children
}: SectionWrapperProps) => {
    return (
        <div className="flex">
            <div className="desktop flex flex-col items-end component-border-top" style={{ width, minWidth: width }}>
                { aside }
            </div>
            <div className="w-full">
                { children }
            </div>
        </div>
    );
};
