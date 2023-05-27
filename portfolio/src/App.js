import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Porjects from "./components/Projects";
import Allprojects from "./components/Allprojects";
import Experiences from "./components/Experiences";
import Contactus from "./components/Contactus";
import Allprojectsdetail from "./Allprojectsdetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar homestatus={true} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Skills />
              <Porjects />
              <Allprojects />
              <Experiences />
              <Contactus />
            </>
          }
        />
        <Route
          path="/allprojectsdetail"
          element={
            <>
              {" "}
              <Navbar homestatus={false} /> <Allprojectsdetail />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
