import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '../../../context/ToastContext.jsx';
import styles from './Toast.module.css';

export default function Toast() {
  const { toast, hideToast } = useToast();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key="toast"
          className={`${styles.toast} ${styles[toast.type]}`}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="alert"
          aria-live="polite"
        >
          <span className={styles.icon}>
            {toast.type === 'success' ? '✓' : '!'}
          </span>
          <span className={styles.message}>{toast.message}</span>
          <button
            className={styles.close}
            onClick={hideToast}
            aria-label="Dismiss"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
