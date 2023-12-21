import Image from 'next/image';
import styles from './Pdf.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Pdf = () => {
  return (
    <section className={styles.container}>
      {arr.map((i) => (
        <div key={i} className={styles.pdf}>
          <Image
            src={'/document.svg'}
            width={54}
            height={65}
            alt="download document icon"
          />
          <span>1</span>
        </div>
      ))}
    </section>
  );
};

export default Pdf;
