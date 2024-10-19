import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bubbles}>
        {/* Generate bubbles */}
        {[...Array(128)].map((_, i) => (
          <div
            key={i}
            className={styles.bubble}
            style={{
              '--size': `${2 + Math.random() * 4}rem`,
              '--distance': `${4 + Math.random() * 2}rem`,
              '--position': `${-5 + Math.random() * 110}%`,
              '--time': `${2 + Math.random() * 2}s`,
              '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.info}>
      <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
