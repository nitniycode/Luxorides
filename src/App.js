import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecategories from './pages/Ecategories'
import Home from './pages/Home'
import Location from './pages/Locations'
import Support from './pages/Support'
import Eservices from './pages/Eservices'
import Ebrands from './pages/Ebrands'
import Oneview from './pages/Oneview'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Forgotpassword from "./pages/Forgotpassword";
import Delhi from "./pages/Delhi";
import Agra from "./pages/Agra";
import Jaipur from "./pages/Jaipur";
import Lucknow from "./pages/Lucknow";
import Travelclass from "./pages/Travelclass";
import Covid from "./pages/Covid";
import Audi from "./pages/Audi";
import Weddingcar from "./pages/Weddingcar";
import Decoration from "./pages/Decoration";
import Mercedes from "./pages/Mercedes";
import About from "./pages/About";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecategories" element={<Ecategories />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/eservices" element={<Eservices />} />
          <Route path="/ebrands" element={<Ebrands />} />
          <Route path="/oneview" element={<Oneview />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/Delhi" element={<Delhi />} />
          <Route path="/Agra" element={<Agra />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/lucknow" element={<Lucknow />} />
          <Route path="/travelclass" element={<Travelclass />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/weddingcar" element={<Weddingcar />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>


  )
}
export default App;
