import styles from "./../weatherConditions.module.scss";

export default function IconWindy() {
  return (
    <div className={`${styles.icon} ${styles.rainy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
      <div className={styles.wind}></div>
      <h1 className={styles.title}>wind</h1>
    </div>
  );
}
