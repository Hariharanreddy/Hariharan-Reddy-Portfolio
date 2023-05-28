import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"

import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo } from "../assets"
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css"

const Navbar = () => {

  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    // <nav className={`${styles.paddingX} w-full flex 
    // items-center py-5 fixed top-0 backdrop-blur-[5px] z-20`}>
    //   <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
    //     <Link
    //       to="/"
    //       className="flex items-center gap-2"
    //       onClick={() => {
    //         setActive("");
    //         window.scrollTo(0, 0);
    //       }}>
    //       <img src={logo} alt="logo"
    //         className='w-9 h-9 object-contain' />
    //       <p className='text-white text-[18px] 
    //         font-bold cursor-pointer flex flex-col sm:flex-row'>
    //         <span>Hariharan &nbsp;</span>
    //         <span>Reddy</span>
    //       </p>
    //     </Link>
    //     <ul className='list-none hidden sm:flex flex-row gap-10'>
    //       {
    //         navLinks.map((Link) => (
    //           <li
    //             key={Link.id}
    //             className={`${active === Link.title ? "text-white" : "green-text-gradient"
    //               } hover:text-white text-[18px] hover:font-medium cursor-pointer`}
    //             onClick={() => setActive(Link.title)}>

    //             <a href={`#${Link.id}`}>{Link.title}</a>

    //           </li>
    //         )
    //         )
    //       }
    //     </ul>

    //     {/* //navigation bar for mobile */}
    //     <div className='sm:hidden flex flex-1 justify-end items-center backdrop-blur-md'>
    //       <img
    //         src={toggle ? close : menu}
    //         alt="menu"
    //         className='w-[28px] h-[28px] object-contain cursor-pointer'
    //         onClick={() => setToggle(!toggle)}
    //       />
    //       <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 
    //         my-2 min-w-[140px] z-10 rounded-xl`}>
    //         <ul className='list-none flex justify-end items-start flex-col gap-4'>
    //           {
    //             navLinks.map((Link) => (
    //               <li
    //                 key={Link.id}
    //                 className={`${active === Link.title ? "text-white" : "green-text-gradient"
    //                   } font-poppins font-medium cursor-pointer text-[16px] `}
    //                 onClick={() => {
    //                   setToggle(!toggle);
    //                   setActive(Link.title);
    //                 }}>

    //                 <a href={`#${Link.id}`}>{Link.title}</a>

    //               </li>
    //             )
    //             )
    //           }
    //         </ul>
    //       </div>
    //     </div>

    //   </div>
    // </nav>

    <header className={`${styles.paddingX}`} >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}>
        <img src={logo} alt="logo"
          className='w-9 h-9 object-contain' />
      </Link>
      <nav ref={navRef}>
        {
          navLinks.map((Link) => (

            <a
              key={Link.id}

              className={`${active === Link.title ? "text-white" : "text-[#26ce80]"} font-poppins font-medium cursor-pointer text-[20px]`}

              onClick={() => {
                showNavbar();
                setActive(Link.title);
              }}

              href={`#${Link.id}`}>{Link.title}
            </a>
          ))

        }
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar