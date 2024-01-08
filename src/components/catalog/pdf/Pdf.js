import Image from 'next/image';
import styles from './Pdf.module.css';

const arr = [1, 2, 3, 4];
const Pdf = () => {
  return (
      <section className={styles.container}>
        {arr.map((i) => (
            <div  key={i} className={styles.pdf}>
              <div  className={styles.img}>
                <Image
                    src={'/images/document.svg'}
                    fill
                    alt="download document icon"
                />
              </div>
              <span>{i}</span>
            </div>
        ))}
      </section>
  );
};

export default Pdf;
