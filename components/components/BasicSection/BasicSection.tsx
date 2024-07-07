export const BasicSection = ({ width = 'auto', background = 'none', children, extraClasses }: any) => {
    return (
        <section className={extraClasses} style={{ width, minWidth: width, background }}>
            { children }
        </section>
    );
};
