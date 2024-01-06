import styles from './Desc.module.css';

const Description = () => {
  return (
    <section className={styles.container}>
      <h3>پروژه‌ها</h3>
      <p>
        غرفه سازی در نمایشگاه‌های مختلف از سال ۲۰۰۹ با بیش از ۴۰۰ پروژه با موفقیت در کشور
        و نمایشگاه‌های بین المللی اجرا کرده‌ایم.
      </p>
      {/*<div className={styles.filter_container}>*/}
      {/*  <div>*/}
      {/*    <p>غرفه سازی داخلی</p>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <p>غرفه سازی خارجی</p>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <p>غرفه سازی شرکتی</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default Description;
