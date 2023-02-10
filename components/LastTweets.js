import styles from '../styles/LastTweets.module.css';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTweet from './NewTweet';


function LastTweets(props) {
  const tweetLength = useSelector((state) => state.tweet.length);
  const tweetList = useSelector((state) => state.tweet.value);
  //console.log(tweetLength)

  
  const [tweetData, setTweetData] = useState([])
  console.log(tweetData.reverse())



  useEffect(() => {
    fetch('http://localhost:3000/getTweet')
    .then(response => response.json())
    .then(data => {
      setTweetData(data.data)
    });
  }, [tweetData]);
  


  const createTweet = tweetData.map((data, i) => {
      return <NewTweet key={i} {...data}/>
  })



  return (
    <div style={{"overflow-y": "auto", "height": "75vh"}}>
      {createTweet}
    </div>
  );
}

export default LastTweets;
