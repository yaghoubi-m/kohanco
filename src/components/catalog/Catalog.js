'use client';
import Image from 'next/image';
import styles from './Catalog.module.css';
import Pdf from './pdf/Pdf';
import Video from './video/Video';
import {useState} from "react";

const Catalog = () => {
  const [isPdf, setIsPdf] = useState(true)
  const [isV, setIsV] = useState(false)

  const onPdf = () => {
    setIsV(false)
    setIsPdf(true)
  }
  const onVideo = () => {
    setIsPdf(false)
    setIsV(true)
  }
  return (
      <section className={styles.container}>
        <h1>کاتالوگ</h1>
        <div className={styles.pc}>
          <div className="flex cursor-pointer flex-col justify-center items-center gap-5 text-[1.6rem] rounded-[1rem] bg-[#e4e4e4] p-2"
               onClick={onVideo}>
            <div className={styles.catalog_con}>
              <Image src={'/images/video.svg'} fill alt="video icon"/>
            </div>
            <span>ویدئو کاتالوگ</span>
          </div>
          <div onClick={onPdf}
               className="flex cursor-pointer flex-col justify-center items-center gap-5 text-[1.6rem] rounded-[1rem] bg-[#e4e4e4] p-2">
            <div className={styles.catalog_con}>
              <Image src={'/images/pdf.svg'} fill alt="pdf icon"/>
            </div>
            <span>کاتالوگ PDF</span>
          </div>
        </div>
        {
            isPdf && <Pdf/>
        }
        {isV && <Video/>}
      </section>
  );
};

export default Catalog;
