import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home.jsx';
import Nosotros from 'Pages/Nosotros.jsx';
import Agronomia from 'Pages/Agronomia';
import NoPage from 'Pages/NoPage';
import Cotizacion from 'Pages/Cotizacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Agronomia" element={<Agronomia/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Cotizacion" element={<Cotizacion/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
