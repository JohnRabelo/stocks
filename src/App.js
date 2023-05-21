import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavComp";
import Tech from "./pages/TechPg";
import Home from "./pages/HomePg.js";



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<Tech/>} />
          <Route path='home' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
