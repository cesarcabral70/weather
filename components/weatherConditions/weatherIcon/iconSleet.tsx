import styles from "./../weatherConditions.module.scss";

export default function IconSleet() {
  return (
    <div className={`${styles.icon} ${styles.rainy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.sleet}></div>
      <h1 className={styles.title}>sleet</h1>
    </div>
  );
}
