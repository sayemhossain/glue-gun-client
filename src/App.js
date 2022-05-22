import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
