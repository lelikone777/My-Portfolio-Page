import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import ScrollToTop from "./utils/scrollToTop";

import './style/main.css';

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/project/:id' element={<SingleProjectPage/>}/>
                <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
