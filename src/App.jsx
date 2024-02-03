import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Login from './components/login';
import Sign from './components/sign';

import './App.css'

function App() {


  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Sign />}></Route>



      </Routes>



    </Router>
  )
}

export default App
