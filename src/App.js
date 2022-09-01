import { BrowserRouter, Route, Routes } from "react-router-dom";
import "atropos/atropos.css";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";
import Modal from "./components/modal/Modal";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/modal" element={<Modal />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
