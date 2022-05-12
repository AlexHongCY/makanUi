import React from "react";
import axios from "axios";

function LoginSignup() {
  function onSubmit() {
    axios.post("https://gentle-fortress-35413.herokuapp.com/api/auth/signup", {
      username: "",
      email: "",
      password: "",
    });
  }
  return (
    <h4 className="loginBox">
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Password"></input>
      <button className="submitbutton" type="submit" onClick={onSubmit()}>
        Submit
      </button>
    </h4>
  );
}

// function DropDownLogin() {
//   const [activeMenu, setActiveMenu] = useState("main");
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
//   }, []);

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

// function onSubmit() {
//   axios.post("https://gentle-fortress-35413.herokuapp.com/api/auth/signin", {
//     username: "",
//     email: "",
//     password: "",
//   });
// }

export default LoginSignup;
