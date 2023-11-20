import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";
import useMoonPhase from "@/hooks/useMoonPhase";

export default function IconPartlyCloudyNight() {
  const originalDate = new Date();
  const utcDate = new Date(
    // eslint-disable-next-line prettier/prettier
    originalDate.getTime() - originalDate.getTimezoneOffset() * 60000
  );
  const isoFormattedDate = utcDate.toISOString();

  const { moonPhasePercent } = useMoonPhase({
    date: isoFormattedDate,
  });

  return (
    <div className={`${styles.icon} ${styles.flurries}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>

      <Moon phase={moonPhasePercent} />
      <h1 className={styles.title}>partly-cloudy-night</h1>
    </div>
  );
}
