import styles from "../styles/newTweet.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewTweet(props) {
  const [heartCount, setHeartcount] = useState(0);
  const tweetList = useSelector((state) => state.tweet.value);
  //console.log(tweetList);
  const user = useSelector((state) => state.user.value);
  //console.log(user)
  const [deleteTweet, setDeleteTweet] = useState(false)



  const handleLikeTweet = () => {
    setHeartcount(heartCount + 1);
    let heartIconStyle = { cursor: "pointer", color: "white" };
    if (heartCount > 0) {
      heartIconStyle = { color: "red", cursor: "pointer" };
    }
  };




  let style = {};

  const HandleClickDelete = () => {
    setDeleteTweet(true)
  }
  if (deleteTweet){
    style={"display": "none"}
  }
  

  let trashcan;
  if(user.username == props.username){
    trashcan = <FontAwesomeIcon classname={styles.iconBtn} onClick={() => HandleClickDelete()} style={{ "color": "white", "margin-right": "8px"}} icon={faTrashCan} />
  }

  return (
    <div style={style}>
      <main className={styles.main}>
        <div className={styles.tweetCreator}>
          <img src="user.png" className={styles.userImg} />
          <h3>
            {props.username}
            <span>@{props.firstname} . a few seconds</span>
          </h3>
        </div>
        <p className={styles.tweetContent}>{props.content}</p>
        <div className={styles.icons}>
          <FontAwesomeIcon
            className="like"
            // style={heartIconStyle}
            icon={faHeart}
            onClick={() => handleLikeTweet()}
          />
          <span>({heartCount})</span>
          <FontAwesomeIcon
            classname={styles.iconBtn}
            style={{ color: "white", "margin-right": "8px" }}
            icon={faTrashCan}
          />
          {trashcan}
        </div>
      </main>
    </div>
  );
}

export default NewTweet;
