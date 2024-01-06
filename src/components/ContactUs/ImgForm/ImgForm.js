import Comments from '@/components/detail/comments/Comments';
import Image from 'next/image';
import styles from './ImgForm.module.css';
const ImgForm = () => {
  return (
    <section className={styles.container}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: '70vh',
        }}
        src={'/images/blurimg.jpeg'}
        width={500}
        height={400}
        alt="backdrop"
      />
      <Comments s="" />
    </section>
  );
};

export default ImgForm;
