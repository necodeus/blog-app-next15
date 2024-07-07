import styles from './AsideContainer.module.css';

export const AsideContainer = ({ children, extraClasses }: any) => {
    const classes = [styles.asideContainer, extraClasses].join(' ');

    return (
        <aside className={classes}>
            { children }
        </aside>
    );
};
