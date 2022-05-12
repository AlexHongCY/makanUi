import React from "react";
import axios from "axios";

function LoginSignup() {
  function onSubmit() {
    axios.post("https://gentle-fortress-35413.herokuapp.com/api/auth/signup", {
      username: "group1",
      email: "group1@gmail.com",
      password: "12345",
    });
  }
  //require a useState to capture username, email and password.
  return (
    <>
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Password"></input>
      <button type="submit" onClick={onSubmit()}>
        Submit
      </button>
    </>
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
