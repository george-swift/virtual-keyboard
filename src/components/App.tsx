import { Footer } from './Footer';
import { Logo } from './Logo';
import { Main } from './Main';
import styles from '../stylesheets/App.module.css';

const App = (): JSX.Element => (
  <div className={styles.app}>
    <Logo />
    <main className={styles.content}>
      <Main />
    </main>
    <Footer />
  </div>
);

export default App;
