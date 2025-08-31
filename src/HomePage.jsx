import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>首页</h1>
        <p>
          欢迎来到首页！
        </p>
        <button className="App-link" onClick={goToAbout} style={{ background: 'none', border: 'none', color: '#61dafb', cursor: 'pointer', textDecoration: 'underline' }}>
          转到关于页面
        </button>
      </header>
    </div>
  );
}

export default HomePage;