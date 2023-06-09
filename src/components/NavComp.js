import navcl from './NavComp.module.css'
import StIf from '../Assets/stockInfo.jpg'
import hbgIcon from '../Assets/hbg.JPG'
import {Outlet, NavLink} from "react-router-dom"
import { useState } from 'react'


function NavBar() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function switchMenu(){
      const windowSize = window.innerWidth;
      setMenuIsOpen(current => !current);
      if (windowSize < 1900){
        if (menuIsOpen){
          return document.querySelector('nav').style.display = 'flex';
        }
        else{
          return document.querySelector('nav').style.display = 'none';
        }
      }
    }

    return (  
      <div>
        <div className={navcl.navOrganizer}>
          <div className={navcl.navLogo}>
            <img src={StIf} alt='' />
          </div>
          <nav className={navcl.navMenu}>
            <ul>
              <li><NavLink to='/' className={navcl.navigLink} onClick={switchMenu}> Home</NavLink></li>
              <li><NavLink to='/tech' className={navcl.navigLink} onClick={switchMenu}>Tech</NavLink></li>
              <li><NavLink to='/beverage' className={navcl.navigLink} onClick={switchMenu}>Beverage</NavLink></li>
              <li><NavLink to='/energy' className={navcl.navigLink} onClick={switchMenu}>Energy</NavLink></li>
              <li><NavLink to='/automotive' className={navcl.navigLink} onClick={switchMenu}>Automotive</NavLink></li>
            </ul>
          </nav>
          <div className={navcl.menuOpenerContainer} onClick={switchMenu}>
            <img src={hbgIcon} alt='' />
          </div>
        </div>
        <Outlet/>
      </div>
    );
  }
  
  export default NavBar;