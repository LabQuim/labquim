import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Nosotros from 'Pages/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Nosotros" element={<Nosotros/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
