import Header from './components/header'
import Home from "./components/home"
import About from "./components/about"
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/services" exact element={<Services />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
