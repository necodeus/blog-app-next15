export const StickySection = ({ width = 'auto', background = 'none', children }: any) => {
    return (
        <section className="sticky top-0" style={{ width, background }}>
            { children }
        </section>
    );
};
