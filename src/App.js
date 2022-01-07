import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import Footer from "./component/Footer";
import About from "./component/About";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/about" element={<About />} />
         </Routes>
       <Footer />
       <ToastContainer theme="dark" />
      </Router>
    </>
  );
}

export default App;
