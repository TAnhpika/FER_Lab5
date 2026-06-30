import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/quizzes" element={<Quiz />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

/**
- BrowserRouter bọc toàn app
- Routes + Route map URL → component
- Navbar nằm ngoài Routes → hiện trên mọi trang
 */
