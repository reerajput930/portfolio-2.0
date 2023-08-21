import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Porjects from "./components/Projects";
import Allprojects from "./components/Allprojects";
import Experiences from "./components/Experiences";
import Contactus from "./components/Contactus";
import Allprojectsdetail from "./components/Allprojectsdetail";
import Reactjs from "./components/Reactjs"
import Js from "./components/Js"
import Native from "./components/Native";
import Mern from "./components/Mern";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About/>
              {/* <Skills /> */}
              {/* <Allprojects /> */}
              <Experiences />
              <Porjects />
              <Allprojectsdetail/>

              <Contactus />
            </>
          }
        />
        {/* <Route path="/allprojectsdetail" element={<Allprojectsdetail />} /> */}
        {/* <Route path="/reactjs" element={<Reactjs/>} />
        <Route path="/mern" element={<Mern/>} />
        <Route path="/js" element={<Js/>} />
        <Route path="/native" element={<Native/>} /> */}
      </Routes>
    </>
  );
}

export default App;
