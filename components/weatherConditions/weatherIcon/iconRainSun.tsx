import styles from "./../weatherConditions.module.scss";

export default function IconRainDay() {
  return (
    <div className={`${styles.icon} ${styles.sun_shower}`}>
      <div className={styles.cloud}></div>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
      </div>
      <div className={styles.rain}></div>
      <h1 className={styles.title}>rain with sun</h1>
    </div>
  );
}
