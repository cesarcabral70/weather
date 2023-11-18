import styles from "./../weatherConditions.module.scss";

export default function IconClearDay() {
  return (
    <div className={`${styles.icon} ${styles.sunny}`}>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
      </div>
      <h1 className={styles.title}>clear-day</h1>
    </div>
  );
}
