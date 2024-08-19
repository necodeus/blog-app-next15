type Props = {
    children: React.ReactNode;
    withMargin?: boolean;
    containerClass?: string;
};

export const SectionTitle = ({ children, withMargin, containerClass = '' }: Props) => {
    if (withMargin) {
        return (
            <div className={"mx-[30px] mb-[30px] font-jost text-[22px] " + containerClass}>
                { children }
            </div>
        );
    }

    return (
        <div className={"font-jost text-[22px] " + containerClass}>
            { children }
        </div>
    );
};
