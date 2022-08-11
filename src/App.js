import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import classes from './App.css';
import EditUser from './pages/EditUser';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editUser/:id' element={<EditUser />} />
        <Route path='/singlePage/:id' element={<SinglePage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
