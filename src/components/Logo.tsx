import styles from '../stylesheets/Logo.module.css';

export const Logo = (): JSX.Element => (
  <h1 className={styles.logo}>
    <span role="img" aria-label="musical keyboard emoji">🎹</span>
    <span role="img" aria-label="musical notes emoji">🎶</span>
  </h1>
);