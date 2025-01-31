import { useState } from 'react'
import Navbar from './components/Navbar'
import "./app.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="Navbar-app">
          <Navbar className />
        </div>
        <div className="home-app">
          <Home />
        </div>
        <div className="about-app">
          <About/>
        </div>
        <div className="contact-app">
           <Contact />
        </div>
      </div>
    </>
  )
}

export default App
