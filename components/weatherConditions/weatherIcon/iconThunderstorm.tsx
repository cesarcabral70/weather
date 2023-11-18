import styles from "./../weatherConditions.module.scss";

export default function IconThunderstorm() {
  return (
    <div className={`${styles.icon} ${styles.thunder_storm}`}>
      <div className={styles.cloud}></div>

      <div className={styles.lightning}>
        <div className={styles.bolt}></div>
        <div className={styles.bolt}></div>
      </div>

      <h1 className={styles.title}>thunderstorm</h1>
    </div>
  );
}
