import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore'
import Home from './pages/Home'
import Location from './pages/Locations'
import More from './pages/More'
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
          <Route path="/more" element={<More />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>


  )
}
export default App;
