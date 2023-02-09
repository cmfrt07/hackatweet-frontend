import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.home}>
      <main>
        <img
          className={styles.image}
          src="twitter-accueil-1360x1058.jpg"
          alt="TweetImage"
        />
      </main>
      <container className={styles.container}>
        <div>
          <img className={styles.logo} src="logo-twitter.png" alt="TweetLogo" />
        </div>
        <div className={styles.slogan}>
          <h1>See what's</h1>
          <h1>happening</h1>
        </div>
        <div>
          <h4 className={styles.join}>Join Hackatweet today.</h4>
          <button className={styles.buttonSignUp}>Sign Up</button>
        </div>
        <div>
          <h6 className={styles.already}>Already have an account?</h6>
          <button className={styles.buttonSignIn}>Sign In</button>
        </div>
      </container>
    </div>
  );
}

export default Login;
