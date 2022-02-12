import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home.jsx';
import Nosotros from 'Pages/Nosotros.jsx';
import Agronomia from 'Pages/Agronomia';
// import NoPage from 'Pages/NoPage';
import Cotizacion from 'Pages/Cotizacion';
import Blog from 'Pages/Blog';
import Contactanos from 'Pages/Contactanos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Agronomia" element={<Agronomia/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contactanos" element={<Contactanos/>}/>
        <Route path="/Cotizacion" element={<Cotizacion/>}/>
        {/* <Route path="/*" element={<NoPage />} /> */}
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
