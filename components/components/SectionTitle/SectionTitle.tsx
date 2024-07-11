type Props = {
    children: React.ReactNode;
    withMargin?: boolean;
};

export const SectionTitle = ({ children, withMargin }: Props) => {
    if (withMargin) {
        return (
            <div className="mx-[30px]">
                <div className="mb-[30px] font-jost text-[22px]">
                    { children }
                </div>
            </div>
        );
    }

    return (
        <div className="mb-[30px] font-jost text-[22px]">
            { children }
        </div>
    );
};
