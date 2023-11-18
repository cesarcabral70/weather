import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";

type Props = {
  moonPhasePercent: number;
};

export default function IconClearNight(moonPhasePercent: Props) {
  return (
    <div className={`${styles.icon} ${styles.sunny}`}>
      <Moon phase={moonPhasePercent} />
      <h1 className={styles.title}>clear-night</h1>
    </div>
  );
}
