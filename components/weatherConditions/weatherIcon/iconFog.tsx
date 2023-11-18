import styles from "./../weatherConditions.module.scss";

export default function IconFog() {
  return (
    <div className={`${styles.icon} ${styles.rainy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
      <div className={styles.fog}></div>
      <h1 className={styles.title}>fog</h1>
    </div>
  );
}
