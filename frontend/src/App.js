import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Animation from "./pages/Animation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path='/practice' element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
