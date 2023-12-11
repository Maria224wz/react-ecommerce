
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './views/LandingPage';
import ProductInfo from './views/ProductInfo';
import CheckOut from './views/CheckOut';


function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/views/Home" element={<Home />} /> */}
            <Route path="/views/LandingPage" element={<LandingPage />} />
            <Route path="/views/ProductInfo" element={<ProductInfo />} />
            <Route path="/views/CheckOut" element={<CheckOut />} />

          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  )

}

export default App;
