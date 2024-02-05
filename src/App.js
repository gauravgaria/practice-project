import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AppNavbar from './components/AppNavbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppNavbar/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
