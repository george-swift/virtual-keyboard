import styles from '../stylesheets/Footer.module.css';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://ubonggeorge.com" rel="noopener" target="_blank">
        More on George&apos;s Portfolio
      </a>
      <br />
      {currentYear}
    </footer>
  );
};