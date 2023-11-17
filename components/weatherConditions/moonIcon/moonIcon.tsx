import styles from "./../weatherConditions.module.scss";

type Props = {
  phase: number;
};

export default function MoonIcon({ phase }: Props) {
  return (
    <div className={styles.moon}>
      <div
        className={styles.phase}
        style={{
          left: `${phase - 7.5}%`,
        }}
      ></div>
      <div className={styles.mooneffect}></div>
    </div>
  );
}
