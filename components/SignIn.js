import styles from "../styles/SignIn.module.css";

function Signin() {
  return (
    <div>
      <main className={styles.main}>
        <div>
          <img className={styles.logo} src="logo-twitter.png" alt="TweetLogo" />
        </div>
        <div className={styles.text}>
          <h1>Connect to Hackatweet</h1>
        </div>
        <div className={styles.button}>
          <button className={styles.UsernameBtn}>Username</button>
          <button className={styles.PassewordBtn}>Passeword</button>
        </div>
        <div>
          <button className={styles.SignInBtn}>Sign in</button>
        </div>
      </main>
    </div>
  );
}

export default Signin;
