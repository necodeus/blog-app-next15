export const BasicSection = ({ width = 'auto', background = 'none', children, extraClasses }: any) => {
    return (
        <section style={{ width, minWidth: width, background }} className={extraClasses}>
            { children }
        </section>
    );
};
