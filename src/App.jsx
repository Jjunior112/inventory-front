import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/navBar';
import Login from './components/login';
import Sign from './components/sign';
import Footer from './components/footer';

import './App.css'

function App() {


  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path='/signin' element={<Sign />}></Route>



      </Routes>

      <Footer />

    </Router>
  )
}

export default App
