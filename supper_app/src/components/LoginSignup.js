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

export default LoginSignup;

// const LoginSignup = () => {
//   const [formValue, setformValue] = React.useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async () => {
//     const loginFormData = newFormData();
//     loginFormData.append("username", formvalue.username);
//     loginFormData.append("email", formValue.email);
//     loginFormData.append("password", formValue.password);

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
//   return (
//     <h4 className="loginBox">
//       <form onSubmit={handleSubmit}>
//         <p>Login</p>
//         <input
//           type="text"
//           name="username"
//           placeholder="enter a username"
//           value={formValue.username}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="enter a email"
//           value={formValue.email}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="password"
//           placeholder="enter a password"
//           value={formValue.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </h4>
//   );
// };

// export default LoginSignup;
