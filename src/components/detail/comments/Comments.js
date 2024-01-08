'use client'

import styles from './Comments.module.css';
import {useState} from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Comments = ({s, id}) => {
  const [formData, setFormData] = useState({
    // projectId: id,
    ProjectDetailId: id,
    FullName: '',
    EmailAddress: '',
    PhoneNumber: '',
    Message: '',
    WebsiteAddress: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.BASEURL}/api/Project/AddReview?projectId=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Review submitted successfully!');
        // Reset the form after successful submission if needed
        setFormData({
          // projectId:id,
          ProjectDetailId: id,
          FullName: '',
          EmailAddress: '',
          PhoneNumber: '',
          Message: '',
          WebsiteAddress: '',
        });
      } else {
        console.error('Failed to submit review.');
        // Handle error or show a user-friendly message
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error or show a user-friendly message
    }
  };

  return (
      <section style={{position: s}} className={`${styles.pc} ${s ? styles.pcs : ''}`}>
        <form onSubmit={(e)=> handleSubmit(e)} className={styles.container}>
          <h3>دیدگاه خود را بنویسید</h3>
          <textarea id="message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows="4"
                    required
                    placeholder="دیدگاه..."></textarea>
          <div className={styles.input_con}>
            <div>
              <input type="text"
                     placeholder="نام (ضروری)"
                     id="fullName"
                     name="FullName"
                     value={formData.FullName}
                     required
                     onChange={handleChange}/>
              <input id="email" value={formData.EmailAddress}
                     onChange={handleChange} name="EmailAddress" required type="email" placeholder="ایمیل (ضروری)"/>
            </div>
            <div>
              <input id="phoneNumber"
                     name="PhoneNumber"
                     value={formData.PhoneNumber}
                     onChange={handleChange} type="number" placeholder="شماره تماس"/>
              <input id="website"
                     name="WebsiteAddress"
                     value={formData.WebsiteAddress}
                     onChange={handleChange} type="url" placeholder="وب سایت"/>
            </div>
          </div>
          <button type="submit">ارسال دیدگاه</button>
        </form>
      </section>
  );
};

export default Comments;
