import './App.css';
import { Space, Typography, Layout } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <div className='navbar'> 
    <Navbar/>
    </div>
    
    <div className='main'>
      <Layout>
        <div className='routes'>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
      <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>
    </div>
    </Layout>
     <div className='footer'>
    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
    </div> 
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
