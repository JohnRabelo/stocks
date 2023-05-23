import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavComp";
import Tech from "./pages/TechPg";
import Home from "./pages/HomePg.js";
import Ener from "./pages/EnergyPg";
import BVRG from "./pages/BvrgPg";
import AUTO from "./pages/AutoPg";



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<Home/>} />
          <Route path='tech' element={<Tech/>} />
          <Route path='energy' element={<Ener/>} />
          <Route path='beverage' element={<BVRG/>} />
          <Route path='automotive' element={<AUTO/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
