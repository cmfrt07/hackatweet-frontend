import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet';
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.userSection}>
          <img className={styles.logo} src="logo-twitter.png"></img>
          <div className={styles.userPannel}>
            <div className={styles.userBox}>
              <img className={styles.userImg} src="user.png"></img>
                <div className={styles.user}>
                  <h2>{user.firstname}</h2>
                  <p>@{user.username}</p>
                </div>
            </div>
            <button className={styles.logoutBtn}>Logout</button>
          </div>
        </div>
        <div className={styles.tweetSection}>
          <Tweet/>
          <LastTweets/>
        </div>
        <div className={styles.trendSection}>
        <Trends/>
        </div>
      </main>
    </>
  );
}

export default Home;
