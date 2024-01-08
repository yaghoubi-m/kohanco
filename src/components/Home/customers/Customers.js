import Image from 'next/image';
import styles from './Customer.module.css';

const Customers = async ({images}) => {
    return (
    <section className={styles.customers_container}>
      <h3>مشتریان ما</h3>
      <p>غرفه سازی برای شرکت‌های مختلف</p>
      <div className={styles.logo_container}>

        {images.map((img, index) => (
            <div key={index} className={styles.img}>
              <Image  fill src={img} alt="2" />
            </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
