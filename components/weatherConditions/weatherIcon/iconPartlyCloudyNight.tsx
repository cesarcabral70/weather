import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";
import useMoonPhase from "../../../hooks/useMoonPhase";
import useFormattedDate from "../../../hooks/useFormattedDate";

export default function IconPartlyCloudyNight() {
  const { isoFormattedDate } = useFormattedDate();

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
