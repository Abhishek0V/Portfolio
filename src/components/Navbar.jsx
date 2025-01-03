import React, { useEffect, useState } from 'react'
import "../CSS/Navbar.css";

const Navbar = () => {
    const [Menu, setMenu] = useState(false);
    const [screen, setScreen] = useState({ width: window.innerWidth, height: window.innerHeight });

    console.log(screen);

const Menuhandler = () => {
    setMenu(Menu == true ? false : true);
    
    }
return (
    <div>
        <div className="nav-container">
            <div className="nav-left">
                <h3>Portfolio</h3>
                {/* <ul class="slider" style={{ display: Menu == true ? 'flex' : 'none' }}>
                    <li className='cancel-btn'><div className="cancel-btn-frame" onClick={Menuhandler}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#71FB00"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></div></li>
                    <li className='m-item'><a href="#home">Home</a></li>
                    <li className='m-item'><a href="#about">Skill</a></li>
                    <li className='m-item'><a href="#services">About Me</a></li>
                    <li className='m-item'><a href="#contact">Contact Me</a></li>
                </ul> */}
            </div>
            <div className="nav-center">
                <ul className={Menu == true ? "slider":"navbar"}>
                    <li className='m-item'><a href="#home">Home</a></li>
                    <li className='m-item'><a href="#about">Skill</a></li>
                    <li className='m-item'><a href="#services">About Me</a></li>
                    <li className='m-item'><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <button className='menu-btn' onClick={Menuhandler}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#71FB00"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" /></svg></button>
                <button className='dw-cv-btn'>Dowload CV</button>
            </div>
        </div>
    </div>
)
}

export default Navbar
