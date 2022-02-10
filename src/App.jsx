import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home.jsx';
import Nosotros from 'Pages/Nosotros.jsx';
import Agronomia from 'Pages/Agronomia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Agronomia" element={<Agronomia/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
