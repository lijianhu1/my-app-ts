import React from 'react';
import 'antd/dist/antd.css'
import './style/app.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './router'
const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className="wrap">
                <Router/>
            </div>
        </BrowserRouter>

    </div>
  );
};

export default App;
