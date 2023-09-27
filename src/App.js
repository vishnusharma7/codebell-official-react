import './App.css';
import About from './components/About';
import Asked from './components/Asked';
import Customer from './components/Customer';
import Download from './components/Download';
import Footer from './components/Footer';
import Gettouch from './components/Gettouch';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurLatest from './components/OurLatest';
import Ourblog from './components/Ourblog';
import Product from './components/Product';
import Usergallery from './components/Usergallery';
import Whychoose from './components/Whychoose';
import "./components/layout.css"
import './components/main.css'
import "./components/darkmode"
import "./components/main"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Whychoose />
      <OurLatest />
      <Download />
      <Asked />
      <Customer />
      <Usergallery />
      <Ourblog />
      <Gettouch />
      <Footer />
    </div>
  );
}

export default App;
