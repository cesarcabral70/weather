import styles from "./../weatherConditions.module.scss";

export default function IconRain() {
  return (
    <div className={`${styles.icon} ${styles.rainy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.rain}></div>
      <h1 className={styles.title}>rain</h1>
    </div>
  );
}
