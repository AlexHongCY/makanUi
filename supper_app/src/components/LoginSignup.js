import React, { useState } from "react";
import PropTypes from 'prop-types';
//import axios from "axios";

// function LoginSignup() {
//   function onSubmit() {
//     axios.post("https://gentle-fortress-35413.herokuapp.com/api/auth/signup", {
//       username: "group1",
//       email: "group1@gmail.com",
//       password: "12345",
//     });
//   }
//   //require a useState to capture username, email and password.
//   return (
//     <h4 className="loginBox">
//       <input type="text" placeholder="Username"></input>
//       <input type="text" placeholder="Email"></input>
//       <input type="text" placeholder="Password"></input>
//       <button className="submitbutton" type="submit" onClick={onSubmit()}>
//         Submit
//       </button>
//     </h4>
//   );
// }

// export default LoginSignup;

async function loginUser(credentials) {
  return fetch("http://localhost:5000/login/signup", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const LoginSignup = (setToken) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      email,
      password
    });
    setToken(token);
  }

//     try {
//       const response = await axios({
//         method: "post",
//         url: "https://gentle-fortress-35413.herokuapp.com/api/auth/signup",
//         data: loginFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (evt) => {
//     setformValue({
//       ...formValue,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   //require a useState to capture username, email and password.
  return (
    <h4 className="loginBox">
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
          type="text"
          name="username"
          placeholder="enter a username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="enter a email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="enter a password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </h4>
  );
};
LoginSignup.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginSignup;
