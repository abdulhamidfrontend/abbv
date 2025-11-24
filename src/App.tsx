import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
