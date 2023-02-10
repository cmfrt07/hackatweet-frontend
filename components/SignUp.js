import styles from "../styles/signUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../reducers/user";
import Link from "next/link";

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const [IsModalVisible, setIsModalVisible] = useState("");
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
              firstname: data.firstname,
              password: signUpUsername,
              username: signUpPassword,
              token: data.token,
            })
          );
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          setIsModalVisible(false);
        }
        // let userSection;
        // if (user.token) {
        //   userSection = (
        //     <div className={styles.logoutSection}>
        //       <p>Welcome {user.username} / </p>
        //       <button onClick={() => handleLogout()}>Logout</button>
        //       <FontAwesomeIcon
        //         onClick={handleRemoveHiddenClick}
        //         className={styles.userSection}
        //         icon={faEye}
        //       />
        //     </div>
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

    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Firstname"
        id="signUpFirstname"
        onChange={(e) => setSignUpFirstname(e.target.value)}
        value={signUpFirstname}
      />
    </div>
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Username"
        id="signUpUsername"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
    </div>
    <div>
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        id="signUpPassword"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />
    </div>

    <div>
      {/* {user.token( */}
      <Link href="/home">
        <button
          className={styles.SignUpBtn}
          onClick={() => handleRegister()}
        >
          Sign up
        </button>
      </Link>
      {/* )} */}
    </div>
  </main>
</div>
  );
}

export default SignUp;