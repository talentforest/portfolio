import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Navigation from './layout/Navigation';
import About from './routes/About';
import Blog from './routes/Blog';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Tech from './routes/Tech';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Tech' element={<Tech />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
