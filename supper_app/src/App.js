import "./App.css";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as MessangerIcon } from "./icons/messenger.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as PriceIcon } from "./icons/price.svg";
import { ReactComponent as LocationIcon } from "./icons/location.svg";
import { ReactComponent as CuisineIcon } from "./icons/cuisine.svg";
import { ReactComponent as RatingIcon } from "./icons/rating.svg";
import { ReactComponent as UserIcon } from "./icons/user.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodDeals from "./components/FoodDeals";
import SearchResults from "./components/results";
import LoginSignup from "./components/LoginSignup";
import useToken from "./components/App/useToken";
import API from "./screens/API";
import Restaurants from "./components/locationAll";



function App() {

  const [location, setLocation] = useState([]);

  const getLocation = async() => {
    const res = await API.get("/public/location");

    if(res.status === 200) {
      console.log(res);
      setLocation(res.data);
    }
  }

  useEffect(()=> {
    getLocation();
  }, []);

  const {token, setToken} = useToken();

  if(!token) {
    
  



  return (
    <div>
      <Navbar>
        <NavItem icon={<UserIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropDownMenu></DropDownMenu>
        </NavItem>
      </Navbar>
      <img src={require("./Assets/Logo.png")} className="logo" alt="Logo" />
      <Router>
      <h2>
          <Link to="/Login" className="links">
            Login
          </Link>
        </h2>
        <h2>
          <Link to="/FoodDeals" className="links">
            Food Deals
          </Link>
        </h2>
        <h2>
          <Link to="/Restaurants" className="links">
            Restaurants
          </Link>
        </h2>


        <div className="content">
          <Switch>
            <Route path="/Login">
              <LoginSignup  setToken={setToken} />
              </Route>
            <Route path="/FoodDeals">
              <FoodDeals />
            </Route>
            <Route path="/Restaurants">
              <Restaurants data={location} />
            </Route>
            <Route path="/SearchRes">
              <SearchResults />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        crossorigin="anonymous"
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<SearchIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="filter"
          >
            Filter search
          </DropdownItem>
          <DropdownItem leftIcon={<MessangerIcon />}>Contact Us</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Complaints</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Module</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>is</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>TOO HARD!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "filter"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}></DropdownItem>
          <DropdownItem leftIcon={<PriceIcon />}>
            <p>
              Price:
              <select id="price" class="select">
                <option disabled selected></option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
                <option value="$$$$$">$$$$$</option>
              </select>
            </p>
          </DropdownItem>
          <DropdownItem leftIcon={<LocationIcon />}>
            <p>
              Location:
              <select id="location" class="select">
                <option disabled selected></option>
                <option value="Anywhere">Anywhere</option>
                <option value="North">North</option>
                <option value="Central">Central</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="Neast">North East</option>
              </select>
            </p>
          </DropdownItem>
          <DropdownItem leftIcon={<CuisineIcon />}>
            <p>
              Cuisine:
              <select id="cuisine" class="select">
                <option disabled selected></option>
                <option value="Western">Western</option>
                <option value="Muslim">Muslim</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Thai">Thai</option>
                <option value="Korean">Korean</option>
              </select>
            </p>
          </DropdownItem>
          <DropdownItem leftIcon={<RatingIcon />}>
            <p>
              Rating:
              <select id="rating" class="select">
                <option disabled selected></option>
                <option value="*">Any rating</option>
                <option value="**">** and above</option>
                <option value="***">*** and above</option>
                <option value="****">**** and above</option>
                <option value="*****">*****</option>
              </select>
            </p>
          </DropdownItem>
          <button className="searchbutton">Search</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
