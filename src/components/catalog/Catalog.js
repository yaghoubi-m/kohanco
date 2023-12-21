import Image from 'next/image';
import styles from './Catalog.module.css';
import Pdf from './pdf/Pdf';
import Video from './video/Video';
const Catalog = () => {
  return (
    <section className={styles.container}>
      <h1>کاتالوگ</h1>
      <div className={styles.pc}>
        <div className={styles.catalog_con}>
          <Image src={'/video.svg'} width={90} height={90} alt="video icon" />
          <span>ویدئو کاتالوگ</span>
        </div>
        <div className={styles.catalog_con}>
          <Image src={'/pdf.svg'} width={90} height={90} alt="pdf icon" />
          <span>کاتالوگ PDF</span>
        </div>
      </div>
      {/* <Pdf /> */}
      <Video />
    </section>
  );
};

export default Catalog;
