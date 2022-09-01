import { BrowserRouter, Route, Routes } from "react-router-dom";
import "atropos/atropos.css";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";
import Modal from "./components/modal/Modal";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";


function App() {

  //loading state
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.addEventListener('load', (event) => {
  //     setLoading
  //   });
    
  // }, [])

  const Home = lazy(() => import("./views/home/Home"));

  return (
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/loading" element={<Loading />} />

    </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
