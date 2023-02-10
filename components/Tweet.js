import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet, removeTweet } from '../reducers/tweet';

function Tweets() {

  const dispatch = useDispatch();
  const[str, setStr] = useState('')
  const tweetArray = useSelector((state) => state.tweet.value);
  const user = useSelector((state) => state.user.value);
  const tweetUsername = user.username;
  const tweetFirstname = user.firstname;



  const handleCreateTweet = () => {
    console.log("hello")
    fetch('http://localhost:3000/tweet', {
      method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ content: str, username: tweetUsername, firstname: tweetFirstname}),
    }).then(response => response.json())
    .then(data => {
      if(data.result) {
        console.log(data)
        dispatch(addTweet({tweet: data.tweet}))
        setStr('')
      }
    });
  }
  
  return (
    <div>
      <main className={styles.main}>
        <h1>Home</h1>
        <div className={styles.tweetBox}>
          <input maxLength="280" placeholder="What's up?" onChange={(e) => setStr(e.target.value)} value={str}></input>
          <div className={styles.charLength}>
            <p>{str.length}/280</p>
            <button className={styles.btnTweet} onClick={() => handleCreateTweet()}>Tweet</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweets;
