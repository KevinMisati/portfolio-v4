import React,{useEffect} from "react"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import ProjectDetails from "./Pages/ProjectDetails"
import Header from "./Components/Header"
import {
  Routes,
  Route
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
    });
  },[])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:title" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
