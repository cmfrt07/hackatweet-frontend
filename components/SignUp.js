import styles from "../styles/signUp.module.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: signUpFirstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          setIsModalVisible(false);
        }
        window.location.assign("Home.js");
      });
  };

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
          <button
            className={styles.firestnameBtn}
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          >
            Firstname
          </button>
          <button
            className={styles.UsernameBtn}
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          >
            Username
          </button>
          <button
            className={styles.PassewordBtn}
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
        </div>
        <div>
          <button className={styles.SignUpBtn} onClick={() => handleRegister()}>
            Sign up
          </button>
        </div>
      </main>
    </div>
  );
}

export default SignUp();
