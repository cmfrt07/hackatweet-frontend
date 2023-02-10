import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Login() {
  const [open, setOpen] = useState(false);

  // const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  // const handleOk = () => {
  //   setOpen(false);
  //   setConfirmLoading(false);
  // };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState("Content of the modal");
  const showModal2 = () => {
    setOpen2(true);
  };
  // const handleOk = () => {
  //   setOpen(false);
  //   setConfirmLoading(false);
  // };
  const handleCancel2 = () => {
    console.log("Clicked cancel button");
    setOpen2(false);
  };

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
          <button className={styles.buttonSignUp} onClick={showModal}>
            Sign Up
          </button>

          <Modal footer={null} open={open} onCancel={handleCancel}>
            <SignUp />
          </Modal>
        </div>
        <div>
          <h6 className={styles.already}>Already have an account?</h6>
          <button className={styles.buttonSignIn} onClick={showModal2}>
            Sign In
          </button>
          <Modal
            bodyStyle={{ border: "solid 2px red", padding: 0 }}
            footer={null}
            open={open2}
            onCancel={handleCancel2}
          >
            <SignIn />
          </Modal>
        </div>
      </container>
    </div>
  );
}

export default Login;
