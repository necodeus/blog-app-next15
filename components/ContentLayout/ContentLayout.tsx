import styles from "./ContentLayout.module.css";

export const ContentLayout = ({
  header,
  children,
  leftSidebar,
  rightSidebar,
}: any) => {
  return (
    <div className={styles.www}>
      {header}
      <div className={styles.ccc}>
        <div className={styles.mmm}>{children}</div>
        <div className={styles.sidebar}>
          <div className={styles.left}>
            {leftSidebar}
          </div>
          <div className={styles.right}>
            {rightSidebar}
          </div>
        </div>
      </div>
    </div>
  );
};
