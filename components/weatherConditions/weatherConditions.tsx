// SOURCE: https://codepen.io/front-end-developer/pen/vREwzJ

import Moon from "./moonIcon/moonIcon";
import styles from "./weatherConditions.module.scss";

export default function WeatherConditions() {
  return (
    <>
      <div className={`${styles.icon} ${styles.sun_shower}`}>
        <div className={styles.cloud}></div>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
        <div className={styles.rain}></div>
      </div>

      <div className={`${styles.icon} ${styles.thunder_storm}`}>
        <div className={styles.cloud}></div>

        <div className={styles.lightning}>
          <div className={styles.bolt}></div>
          <div className={styles.bolt}></div>
        </div>
      </div>

      <div className={`${styles.icon} ${styles.cloudy}`}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
      </div>

      <div className={`${styles.icon} ${styles.flurries}`}>
        <div className={styles.cloud}></div>
        <div className={styles.snow}>
          <div className={styles.flake}></div>
          <div className={styles.flake}></div>
        </div>
      </div>

      <div className={`${styles.icon} ${styles.sunny}`}>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
      </div>

      <div className={`${styles.icon} ${styles.sunny}`}>
        <Moon phase={50} />
      </div>

      <div className={`${styles.icon} ${styles.sunny}`}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>

        <Moon phase={0} />
        <div className={styles.rain}></div>
      </div>

      <div className={`${styles.icon} ${styles.flurries}`}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>

        <Moon phase={100} />
      </div>

      <div className={`${styles.icon} ${styles.rainy}`}>
        <div className={styles.cloud}></div>
        <div className={styles.rain}></div>
      </div>
    </>
  );
}
