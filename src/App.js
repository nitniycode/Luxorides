import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecategories from './pages/Ecategories'
import Home from './pages/Home'
import Location from './pages/Locations'
import More from './pages/More'
import Support from './pages/Support'
import Eservices from './pages/Eservices'
import Ebrands from './pages/Ebrands'
import Oneview from './pages/Oneview'
import Signin from "./pages/Signin";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecategories" element={<Ecategories />} />
          <Route path="/location" element={<Location />} />
          <Route path="/more" element={<More />} />
          <Route path="/support" element={<Support />} />
          <Route path="/eservices" element={<Eservices />} />
          <Route path="/ebrands" element={<Ebrands />} />
          <Route path="/oneview" element={<Oneview />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>


  )
}
export default App;
