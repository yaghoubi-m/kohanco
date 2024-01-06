import styles from './Comments.module.css';

const Comments = ({s}) => {

  return (
    <section style={{position: s}} className={styles.pc}>
      <div className={styles.container}>
        <h3>دیدگاه خود را بنویسید</h3>
        <textarea placeholder="دیدگاه..."></textarea>
        <div className={styles.input_con}>
          <div>
            <input type="text" placeholder="نام (ضروری)" />
            <input type="email" placeholder="ایمیل (ضروری)" />
          </div>
          <div>
            <input type="number" placeholder="شماره تماس" />
            <input type="url" placeholder="وب سایت" />
          </div>
        </div>
        <button>ارسال دیدگاه</button>
      </div>
    </section>
  );
};

export default Comments;
