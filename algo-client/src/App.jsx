
import './App.css';
import HelloWorld from './pages/HelloWorld';
import Selection from './pages/Selection';
import NavBar from './components/Navbar';
import {Route, Routes, useNavigate } from 'react-router-dom'


function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Selection/>}/>
      <Route exact path='/hello' element={<HelloWorld/>} />
    </Routes>
    
    </>
   
  );
}

export default App;
