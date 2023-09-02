import React from 'react';
import styles from './App.module.css';
import TopHeader from './components/TopHeader/TopHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className={styles.App}>
        <TopHeader />
        <Header />
        <Footer />
      </div>
  );
}

export default App;
