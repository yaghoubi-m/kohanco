import Comments from '@/components/detail/comments/Comments';
import Image from 'next/image';
import styles from './ImgForm.module.css';
const ImgForm = () => {
  return (
    <section className={styles.container}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '70vh',
      }}>
        <Image
            fill
            src={'/images/blurimg.jpeg'}
            alt="backdrop"
        />
      </div>
      <Comments s="" />
    </section>
  );
};

export default ImgForm;
