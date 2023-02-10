import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useDispatch } from "react-redux";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <main className={styles.main}>
        <div className={styles.userSection}>
          <img className={styles.logo} src="logo-twitter.png"></img>
          <div className={styles.userPannel}>
            <div className={styles.userBox}>
              <img className={styles.userImg} src="user.png"></img>
              <div className={styles.user}>
                <h2>John</h2>
                <p>@JohnCena</p>
              </div>
            </div>
            <Link href="/">
              <button
                className={styles.logoutBtn}
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.tweetSection}>
          <Tweet />
          <LastTweets />
        </div>
        <div className={styles.trendSection}>
          <Trends />
        </div>
      </main>
    </>
  );
}

export default Home;
