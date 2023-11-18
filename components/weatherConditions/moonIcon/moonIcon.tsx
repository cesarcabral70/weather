import styles from "./../weatherConditions.module.scss";

type Props = {
  phase: number;
};

export default function MoonIcon({ phase }: Props) {
  return (
    <div className={styles.moon}>
      <div className={styles.mooneffect}></div>

      {phase !== 100 && (
        <div
          className={styles.phase}
          style={{
            left: `${phase}%`,
          }}
        ></div>
      )}
    </div>
  );
}
