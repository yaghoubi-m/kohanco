import Image from 'next/image';
import styles from './Video.module.css';

const arr = [1, 2, 4, 435, 465, 6557, 3, 234, 14, 6, 57, 35, 23414, 35435];
const Video = () => {
  return (
    <section className={styles.container}>
      <video controls>
        <source src="/images/video.mp4"></source>
      </video>
      <div className={styles.vid_con}>
        {arr.map((i) => (
          <div key={i}>
            <Image src={'/images/play.svg'} width={60} height={60} alt="img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;
