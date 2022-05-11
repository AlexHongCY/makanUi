import './App.css';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as MessangerIcon } from './icons/messenger.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as PriceIcon } from './icons/price.svg';
import { ReactComponent as LocationIcon } from './icons/location.svg';
import { ReactComponent as CuisineIcon } from './icons/cuisine.svg';
import { ReactComponent as RatingIcon } from './icons/rating.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <>
    <img src={require('./Assets/Logo.png')} className="logo" alt="Logo"/>
    <Navbar>
      <NavItem icon={<CaretIcon />} >
        <DropDownMenu></DropDownMenu>
      </NavItem>
    </Navbar>
    <h1>Deals of the week</h1>
    </>
  );
}

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  )
}

function NavItem(props){

  const [open, setOpen] = useState(false);

  return(
    <li className='nav-item'>
      <a href="#" 
      crossorigin="anonymous" 
      className='icon-button'
      onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

function DropDownMenu(){

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props){
    return(
      <a href="#" className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<SearchIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="filter">
            Filter search
          </DropdownItem>
          <DropdownItem 
            leftIcon={<MessangerIcon />}>
            Contact Us
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>


        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Module</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>is</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>TOO HARD!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'filter'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          </DropdownItem>
          <DropdownItem leftIcon={<PriceIcon />}>Price</DropdownItem>
          <DropdownItem leftIcon={<LocationIcon />}>Location</DropdownItem>
          <DropdownItem leftIcon={<CuisineIcon />}>Cuisine</DropdownItem>
          <DropdownItem leftIcon={<RatingIcon />}>Rating</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
