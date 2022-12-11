import * as React from 'react';

import FirstPage from './FirstPage/FirstPage';
import TestPage from './TestPage/TestPage';
import Header from './Header/Header';

import './App.css';

const App = () => {
    const [page, setPage] = React.useState('first');
  return (
    <div className="App">
        <Header />
        <div className="App-content">
            {page === 'first' && <FirstPage onClick={setPage} />}
            {page === 'test' && <TestPage />}
        </div>
        </div>
  );
}

export default App;
