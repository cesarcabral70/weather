import styles from "./../weatherConditions.module.scss";

export default function IconPartlyCloudyDay() {
  return (
    <div className={`${styles.icon} ${styles.cloudy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
      </div>
      <h1 className={styles.title}>partly-cloudy-day</h1>
    </div>
  );
}
