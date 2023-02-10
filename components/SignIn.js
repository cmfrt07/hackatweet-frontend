import styles from "../styles/SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../reducers/user";
import Link from "next/link";

function Signin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const [IsModalVisible, setIsModalVisible] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  function handleConnection() {
    fetch("http://localhost:3000/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: data.firstname,
              password: signInPassword,
              username: signInUsername,
              token: data.token,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
          setIsModalVisible(false);
        }
      });
  }

  return (
    <div>
      <main className={styles.main}>
        <div>
          <img className={styles.logo} src="logo-twitter.png" alt="TweetLogo" />
        </div>
        <div className={styles.text}>
          <h1>Connect to Hackatweet</h1>
        </div>
        <div>
          <div className={styles.button}>
            <input
              type="text"
              placeholder="Username"
              id="signInUsername"
              onChange={(e) => setSignInUsername(e.target.value)}
              value={signInUsername}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="signInPassword"
              onChange={(e) => setSignInPassword(e.target.value)}
              value={signInPassword}
            />
          </div>
        </div>
        <div>
          {/* {user.token( /}
          <Link href="/Home">
            <button
              className={styles.SignInBtn}
              onClick={() => handleConnection()}
            >
              Sign in
            </button>
          </Link>
          {/ )} */}
        </div>
      </main>
    </div>
  );
}

export default Signin;