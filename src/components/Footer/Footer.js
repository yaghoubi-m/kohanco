import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhone, FiMail } from 'react-icons/fi';
// import logo from '../../assets/images/KohanLogo.png';

import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsPinterest, BsTelegram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_container}>
        <div className={styles.link_container}>
          <div>
            <Link href="/">صفحه اصلی</Link>
            <Link href="/projects">پروژه‌ها</Link>
            <Link href="/blogs">بلاگ</Link>
            <Link href="/catalog">کاتالوگ</Link>
            <Link href="/contact-us">تماس با ما</Link>
            <Link href="/about-us">درباره ما</Link>
            <Link href="/faq">سوالات متداول</Link>
          </div>
          <div>
            {/*<Link href="/survey">نظرسنجی</Link>*/}
            {/*<Link href="/">همکاری با ما</Link>*/}
            {/*<Link href="/">پیوندها</Link>*/}
            {/*<Link href="/">همکاران</Link>*/}
          </div>
        </div>
        <div className={styles.md}>
          <Image
            className={styles.logo}
            height={200}
            width={200}
            src={'/images/KohanLogo.png'}
            alt="logo"
          />
          <div className={styles.contact}>
            {/* <p>تماس باما</p> */}
            <div>
              <HiOutlineLocationMarker className={styles.icon} />
              <p>تهران خیابان آیت الله کاشانی بلوار اباذر ساختمان آریا واحد ۲۰۱</p>
            </div>
            <div>
              <FiPhone className={styles.icon} />
              <p>شماره تلفن ۰۲۱۳۷۵۹۶</p>
            </div>
            <div>
              <FiMail className={styles.icon} />
              <p>آدرس ایمیل : info@kohan.ir </p>
            </div>
          </div>
        </div>
        <Image
          className={styles.logo}
          height={200}
          width={200}
          src={'/images/KohanLogo.png'}
          alt="logo"
        />
        <div className={styles.contact}>
          <p>تماس باما</p>
          <div>
            <HiOutlineLocationMarker className={styles.icon} />
            <p>تهران خیابان آیت الله کاشانی بلوار اباذر ساختمان آریا واحد ۲۰۱</p>
          </div>
          <div>
            <FiPhone className={styles.icon} />
            <p>شماره تلفن ۰۲۱۳۷۵۹۶</p>
          </div>
          <div>
            <FiMail className={styles.icon} />
            <p>آدرس ایمیل : info@kohan.ir </p>
          </div>
        </div>
      </div>
      <div className={styles.sec_container}>
        <p>
          شرکت کهن ارائه دهنده خدمات بازسازی و طراحی و ساخت غرفه سازی نمایشگاهی و اداری.
        </p>
        <div className={styles.icons_container}>
          <BiLogoFacebookCircle className={styles.icon} />
          <AiFillTwitterCircle className={styles.icon} />
          <BiLogoInstagram className={styles.icon} />
          <AiFillLinkedin className={styles.icon} />
          <BsPinterest className={styles.icon} />
          <BsTelegram className={styles.icon} />
        </div>
      </div>
      <div className={styles.line}></div>
      <p className={styles.copy}>کلیه حقوق مربوط به شرکت کهن می باشد</p>
    </footer>
  );
};

export default Footer;
