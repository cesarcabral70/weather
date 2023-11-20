import styles from "./../weatherConditions.module.scss";
import Moon from "../moonIcon/moonIcon";
import useMoonPhase from "../../../hooks/useMoonPhase";
import useFormattedDate from "../../../hooks/useFormattedDate";

export default function IconClearNight() {
  const { isoFormattedDate } = useFormattedDate();
  const { moonPhasePercent } = useMoonPhase({
    date: isoFormattedDate,
  });

  return (
    <div className={`${styles.icon} ${styles.sunny}`}>
      <Moon phase={moonPhasePercent} />
      <h1 className={styles.title}>clear-night</h1>
    </div>
  );
}
