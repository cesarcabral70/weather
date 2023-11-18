import styles from "./../weatherConditions.module.scss";

export default function IconSnow() {
  return (
    <div className={`${styles.icon} ${styles.flurries}`}>
      <div className={styles.cloud}></div>
      <div className={styles.snow}>
        <div className={styles.flake}></div>
        <div className={styles.flake}></div>
      </div>
      <h1 className={styles.title}>snow</h1>
    </div>
  );
}
