import './App.css';
import Walker from './components/Walker';
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<Walker/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
