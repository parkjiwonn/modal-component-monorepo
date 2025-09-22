import React from 'react';
import { ModalProvider } from '@my-app/modal';
import '@my-app/modal/src/styles/modal.css';
import TestPage from './components/pages/TestPage';
import styles from './components/pages/ModalTest.module.css';

function App() {
  return (
    <ModalProvider>
      <div className={styles.container}>
        <TestPage />
      </div>
    </ModalProvider>
  );
}

export default App;