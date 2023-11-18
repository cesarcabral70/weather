import styles from "./../weatherConditions.module.scss";

export default function IconCloudy() {
  return (
    <div className={`${styles.icon} ${styles.flurries}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
      <h1 className={styles.title}>cloudy</h1>
    </div>
  );
}
