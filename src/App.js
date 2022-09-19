import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path='/home' element={<MainPage/>}/>
          
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
