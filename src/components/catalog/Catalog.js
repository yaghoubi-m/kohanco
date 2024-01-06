'use client';
import Image from 'next/image';
import styles from './Catalog.module.css';
import Pdf from './pdf/Pdf';
import Video from './video/Video';
import {useState} from "react";
const Catalog = () => {
  const [isPdf, setIsPdf] = useState(false)
  const onPdf = () => {
    setIsPdf(p=> !p)
  }
  return (
    <section className={styles.container}>
      <h1>کاتالوگ</h1>
      <div className={styles.pc}>
        <div onClick={onPdf} className={styles.catalog_con}>
          <Image src={'/images/video.svg'} width={90} height={90} alt="video icon" />
          <span>ویدئو کاتالوگ</span>
        </div>
        <div onClick={onPdf} className={styles.catalog_con}>
          <Image src={'/images/pdf.svg'} width={90} height={90} alt="pdf icon" />
          <span>کاتالوگ PDF</span>
        </div>
      </div>
      {
        isPdf ?  <Video /> : <Pdf />
      }
    </section>
  );
};

export default Catalog;
