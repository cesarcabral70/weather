import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";

type Props = {
  moonPhasePercent: number;
};

export default function IconPartlyCloudyNight({ moonPhasePercent }: Props) {
  return (
    <div className={`${styles.icon} ${styles.flurries}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>

      <Moon phase={moonPhasePercent} />
      <h1 className={styles.title}>partly-cloudy-night</h1>
    </div>
  );
}
