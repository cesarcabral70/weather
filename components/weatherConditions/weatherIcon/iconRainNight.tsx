import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";

type Props = {
  moonPhasePercent: number;
};

export default function IconRainNight({ moonPhasePercent }: Props) {
  return (
    <div className={`${styles.icon} ${styles.sunny}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>

      <Moon phase={moonPhasePercent} />
      <div className={styles.rain}></div>
      <h1 className={styles.title}>rain with night</h1>
    </div>
  );
}
