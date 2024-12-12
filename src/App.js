import List from './components/List/List'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Container>
 </main>
    );
  
};

export default App;