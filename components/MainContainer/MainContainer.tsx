import styles from './MainContainer.module.css';

export const MainContainer = ({ children }: any) => {
  return (
    <div className={styles.container}>{children}</div>
  );
}
