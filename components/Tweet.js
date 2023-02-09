import styles from '../styles/Tweet.module.css';

function Tweets() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Home</h1>
        <div className={styles.tweetBox}>
          <input placeholder="What's up?"></input>
          <div className={styles.charLength}>
            <p>0/280</p>
            <button className={styles.btnTweet}>Tweet</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweets;
