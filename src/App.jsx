import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 异步加载组件
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
