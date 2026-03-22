import Navbar from '../../../pages/Home/components/Navbar/Navbar.jsx';
import Footer from '../../../pages/Home/components/Footer/Footer.jsx';
import Toast from '../../ui/Toast/Toast.jsx';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Toast />
    </div>
  );
}
