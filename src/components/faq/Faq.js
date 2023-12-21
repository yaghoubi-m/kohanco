'use client';
import { useState } from 'react';
import styles from './Faq.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const Faq = ({ question, answers, last }) => {
  const [isOpen, setIsOpen] = useState(false);
  const FAQItem = {
    // marginBottom: '10px',
    overflow: 'hidden',
    transition: 'all 13s',
    cursor: 'pointer',
    // fontSise: '1.6rem'
  };

  const Question = {
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: '20px',
  };

  const Answer = {
    padding: '0',
    fontSize: '1.6rem',
    // borderBottom: last ? '0' : '1px solid #000',
    // width: '90%',
    // margin: '0 auto',
    backgroundColor: '#eee',
    color: '#838383',
  };
  const [expanded, setExpanded] = useState(false);

  const toggleFAQ = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={styles.container} style={{ ...FAQItem }}>
        <div className={styles.dropdown} style={Question} onClick={toggleFAQ}>
          <p>{question}</p>
          <IoIosArrowDown />
        </div>
        <div
          style={{
            ...Answer,
            height: expanded ? 'auto' : 0,
            padding: expanded ? '20px' : 0,
          }}
        >
          {expanded && <div>{answers}</div>}
        </div>
      </div>
    </>
  );
};

export default Faq;
