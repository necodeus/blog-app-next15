import styles from './MainContainer.module.css';

export const MainContainer = ({ children }: any) => {
    return (
        <main className={styles.mainContainer}>
            { children }
        </main>
    );
};
