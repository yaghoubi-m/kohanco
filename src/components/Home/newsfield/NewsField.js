import styles from './NewsField.module.css';

const NewsField = () => {
  return (
    <section className={styles.container}>
      <p>برای دریافت جدیدترین اخبار و تخفیف‌ها در خبرنامه عضو شوید</p>
      <div className={styles.incon}>
        <input type="text" placeholder="ایمیل خود را وارد کنید" />
        <button>ارسال</button>
      </div>
    </section>
  );
};

export default NewsField;
