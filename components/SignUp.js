import styles from "../styles/signUp.module.css";

function SignUp() {
  return (
    <div>
      <main className={styles.main}>
        <div>
          <img className={styles.logo} src="logo-twitter.png" alt="TweetLogo" />
        </div>
        <div className={styles.text}>
          <h1>Create your Hackatweet account</h1>
        </div>
        <div className={styles.button}>
          <button className={styles.firestnameBtn}>Firstname</button>
          <button className={styles.UsernameBtn}>Username</button>
          <button className={styles.PassewordBtn}>Passeword</button>
        </div>
        <div>
          <button className={styles.SignUpBtn}>Sign up</button>
        </div>
      </main>
    </div>
  );
}

export default SignUp();
