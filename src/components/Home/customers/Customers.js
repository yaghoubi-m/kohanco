import Image from 'next/image';
import img from '/images/Space.png';
import styles from './Customer.module.css';
const Customers = () => {
  const images = [img, img, img, img, img, img, img];
  return (
    <section className={styles.customers_container}>
      <h3>مشتریان ما</h3>
      <p>غرفه سازی برای شرکت‌های مختلف</p>
      <div className={styles.logo_container}>
        {images.map((img, index) => (
          <Image key={index} width={200} height={200} src={img} alt="2" />
        ))}
      </div>
    </section>
  );
};

export default Customers;
