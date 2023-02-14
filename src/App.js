import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore'
import Home from './pages/Home'
import Location from './pages/Locations'
import About from './pages/About'
import Support from './pages/Support'
import Header from "./components/Header";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>


  )
}
export default App;
