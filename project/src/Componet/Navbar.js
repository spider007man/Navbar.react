import React, { useState } from 'react'
import { Menuitem } from './Menuitem'
import "./Navbar.css"
    
    const Navbar = () => {
      const [click,setClick] = useState(false)
      const handleClick = () => setClick(!click)
      return (
        <>
          <nav className='menubar'>

          <h1 className='nav-logo'>Green<i class="fa-solid fa-seedling"/></h1>
          <div className='mob-icon' onClick={handleClick}>
            <i className={click? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Menuitem.map((item,index) => {
                return(
            <li className='nav-icon'> 
            <a className={item.cName} href={item.url}> <i className={item.icon}/> {item.titel}</a>
            </li>

                )
            })}
          </ul>
          </nav>
        </>
      )
    }
    export default Navbar
    
    