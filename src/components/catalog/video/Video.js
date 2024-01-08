'use state';

import Image from 'next/image';
import styles from './Video.module.css';
import {useState} from "react";

const arr = [1, 2, 4];
const Video = () => {
  const [url, setUrl] = useState("/images/video.mp4")
  const onUrl = () => {
    setUrl('/images/F.mp4')
    console.log(url)
  }
  return (
    <section className={styles.container}>
      <video src={url} controls>
        {/*<source ></source>*/}
      </video>
      <div className={styles.vid_con}>
        {arr.map((i) => (
          <div className={styles.img} key={i} onClick={onUrl}>
             <Image src={'/images/banner.jpg'} fill />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;
