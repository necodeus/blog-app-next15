export const BasicSection = ({ width = 'auto', background = 'none', children, extraClasses }: any) => {
    return (
        <section className={"component-border-top " + extraClasses} style={{ width, minWidth: width, background }}>
            { children }
        </section>
    );
};
