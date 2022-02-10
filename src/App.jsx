import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home.jsx';
import Nosotros from 'Pages/Nosotros.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
