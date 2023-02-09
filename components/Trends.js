import styles from '../styles/Trends.module.css';

function Trends() {
  return (
    <div>
      <main className={styles.main}>
      <h2>Trends</h2>
        <div className={styles.trend}>
        <div className={styles.trendBox}>
          <h4>#helloWorld</h4>
          <p>3 tweets</p>
        </div>
        <div className={styles.trendBox}>
          <h4>#helloWorld</h4>
          <p>3 tweets</p>
        </div>
        <div className={styles.trendBox}>
        <h4>#helloWorld</h4>
        <p>3 tweets</p>
      </div>
        </div>
      </main>
    </div>
  );
}

export default Trends;
