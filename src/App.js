import "./App.css";
import { NavigationMain } from "./layout/NavigationMain";
import TestNavigation from "./layout/TestNavigation";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SpojteSluzby from "./pages/SpojteSluzby";
import Internet from "./pages/Internet";
import Telefony from "./pages/Telefony";
import Televize from "./pages/Televize";
import Podpora from "./pages/Podpora";
import Tarify from "./pages/Tarify";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavigationMain /> */}
        <TestNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spojte-sluzby" element={<SpojteSluzby />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/telefony" element={<Telefony />} />
          <Route path="/televize" element={<Televize />} />
          <Route path="/podpora" element={<Podpora />} />
          <Route path="/tarify" element={<Tarify />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
