import React, { useState } from 'react'
import { navLinks } from '../constants';
const Navitems= () =>{
  return (
    <ul className="nav-ul">
      
      {navLinks.map(({id,href,name})=>(
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">{name}</a>
        </li>
      ))}

    </ul>
    )
}
const Navbar = () => {
  const [isopen,setIsopen] = useState(false);
  const togglemenu =() => setIsopen((previsopen)=>
    !previsopen);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mxx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Hey, <span className="waving-hand">&#9995;</span>
                </a>
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Welcome to Aryan's Cosmos! 
                </a>
                <button onClick={togglemenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                    
                    <img src={isopen  ? "assets/close.svg": "assets/menu.svg" } alt="toggle" className="w-6 h-6" />
                </button>
                <nav className="sm:flex hidden">
                
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Portfolio: Level 1 
                </a>
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isopen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5">
            <Navitems/>

          </nav>
        </div>

    </header>
  )
}

export default Navbar
