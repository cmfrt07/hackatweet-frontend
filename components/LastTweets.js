import styles from '../styles/LastTweets.module.css';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LastTweets() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.tweetCreator}>
          <img src="user.png" className={styles.userImg}/>
          <h3>John<span>@JohnCena . a few seconds</span></h3>
        </div>
        <p className={styles.tweetContent}>YOU CANT SEE ME !<a> #cenation</a></p>
        <div className={styles.icons}>
          <FontAwesomeIcon  classname={styles.iconBtn} style={{ "color": "white", "margin-right": "8px"}} icon={faHeart} /><span>0</span>
          <FontAwesomeIcon classname={styles.iconBtn} style={{ "color": "white", "margin-right": "8px"}} icon={faTrashCan} />
        </div>
      </main>
    </div>
  );
}

export default LastTweets;
