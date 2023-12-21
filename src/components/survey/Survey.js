// Survey.js
'use client';
// Survey.js
import React, { useState } from 'react';
import styles from './Survey.module.css';

const Survey = () => {
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    ratings: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      ratings: rating,
    }));

    console.log('Survey Responses:', responses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.surveyContainer}>
      <h1>نظر سنجی</h1>
      <div className={styles.tab_con}>
        <table className={styles.table} onSubmit={handleSubmit}>
          <tbody>
            <tr className={styles.header}>
              <th></th>
              <th>بد</th>
              <th>متوسط</th>
              <th>خوب</th>
              <th>عالی</th>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.question}>رضایت شما از همکاری با ما چقدر است؟</td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="bad"
                  checked={responses.ratings === 'bad'}
                  onChange={() => handleRatingChange('bad')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="normal"
                  checked={responses.ratings === 'normal'}
                  onChange={() => handleRatingChange('normal')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="good"
                  checked={responses.ratings === 'good'}
                  onChange={() => handleRatingChange('good')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="very good"
                  checked={responses.ratings === 'very good'}
                  onChange={() => handleRatingChange('very good')}
                  className={styles.radioInput}
                />
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.question}>رضایت شما از همکاری با ما چقدر است؟</td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="bad"
                  checked={responses.ratings === 'bad'}
                  onChange={() => handleRatingChange('bad')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="normal"
                  checked={responses.ratings === 'normal'}
                  onChange={() => handleRatingChange('normal')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="good"
                  checked={responses.ratings === 'good'}
                  onChange={() => handleRatingChange('good')}
                  className={styles.radioInput}
                />
              </td>
              <td className={styles.td}>
                <input
                  type="checkbox"
                  name="ratings"
                  value="very good"
                  checked={responses.ratings === 'very good'}
                  onChange={() => handleRatingChange('very good')}
                  className={styles.radioInput}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className={styles.vals}>
          <span>بد</span>
          <span>متوسط</span>
          <span>خوب</span>
          <span>عالی</span>
        </div>
        <div className={styles.questionContainer}>
          <label htmlFor="question1">Question 1:</label>
          <div className={styles.ratingOptions}>
            <input
              type="checkbox"
              name="ratings"
              value="bad"
              checked={responses.ratings === 'bad'}
              onChange={() => handleRatingChange('bad')}
              className={styles.radioInput}
            />
            <input
              type="checkbox"
              name="ratings"
              value="fair"
              checked={responses.ratings === 'fair'}
              onChange={() => handleRatingChange('fair')}
              className={styles.radioInput}
            />
            <input
              type="checkbox"
              name="ratings"
              value="good"
              checked={responses.ratings === 'good'}
              onChange={() => handleRatingChange('good')}
              className={styles.radioInput}
            />
            <input
              type="checkbox"
              name="ratings"
              value="great"
              checked={responses.ratings === 'great'}
              onChange={() => handleRatingChange('great')}
              className={styles.radioInput}
            />
          </div>
        </div> */}
    </div>
  );
};

export default Survey;
