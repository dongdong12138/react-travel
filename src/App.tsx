import React from 'react';
import styles from './App.module.css';
import { TopHeader, Header, Footer } from './components';

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
