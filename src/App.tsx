import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookLessons from "./pages/BookLessons";
import Experience from "./pages/Experience";
import Index from "./pages/Index";
import MissionStatement from "./pages/MissionStatement";
import Music from "./pages/Music";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <h1>
        <Link to="/">Guitar Strategies</Link>
      </h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/book-lessons" element={<BookLessons />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
};

export default App;
