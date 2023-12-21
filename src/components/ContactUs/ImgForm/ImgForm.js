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
          // height: 'auto',
        }}
        src={'/blurimg.jpeg'}
        width={1442}
        height={663}
        alt="backdrop"
      />
      <Comments />
    </section>
  );
};

export default ImgForm;
