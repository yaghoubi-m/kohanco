import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import NewsField from '@/components/Home/newsfield/NewsField';
import Faq from '@/components/faq/Faq';

import styles from './faq.module.css';
import { Fragment } from 'react';

const arr = [
  {
    answers: 'aaaaaaa',
    question: 'wwwww',
  },
  {
    answers:
      'sadasdasdasfsdvd gre gregreag reg regre gegrgeefr4t434fg dgsdfgfdhjgfjhfsdaavda f gfddfgfdafdgfdfdhfdhfdfds fgfhsdfhfshtr5y5 dsdsv',
    question: 'wwwww',
  },
  {
    answers: 'aaaaaaa',
    question: 'wwwww',
    last: false,
  },
  {
    answers: 'aaaaaaa',
    question: 'wwwww',
    last: false,
  },
  {
    answers: 'aaaaaaa',
    question: 'wwwww',
    last: false,
  },
  {
    answers: 'aaaaaaa',
    question: 'wwwww',
    last: true,
  },
];

const Page = () => {
  return (
    <main className={styles.container}>
      {/* <Header /> */}
      <h1>سوالات متداول</h1>
      <div className={styles.faq_con}>
        {arr.map((i, index) => (
          <Faq key={index} answers={i.answers} question={i.question} last={i.last} />
        ))}
      </div>
      {/* <NewsField /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Page;
