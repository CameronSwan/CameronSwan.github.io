import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './components/_Home';
import { About } from './components/_About';
import { Portfolio } from './components/_Portfolio';
import { Contact } from './components/_Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
