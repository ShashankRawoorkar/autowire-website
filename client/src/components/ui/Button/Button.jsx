import styles from './Button.module.css';

/**
 * @param {{ variant?: 'primary'|'ghost'|'accent', size?: 'sm'|'md'|'lg', loading?: boolean, children, className, ...rest }}
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...rest
}) {
  return (
    <button
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        loading ? styles.loading : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
