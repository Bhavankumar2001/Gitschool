
// import React from 'react';
// import './Topbar.css'; 
// import logo from '../Images/Logo new.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// const Topbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="logo" />
//       </div>
//       <div className="contact-info">
//         <div className="email">
//           <FontAwesomeIcon icon={faEnvelope} />
//           <span>Email: example@example.com</span>
//         </div>
//         <div className="phone">
//           <FontAwesomeIcon icon={faPhone} />
//           <span>Phone: +123-456-7890</span>
//         </div>
//       </div>
//       <div className="login-button">
//         <button>Login</button>
//       </div>
//     </nav>
//   );
// };

// export default Topbar;


import React from 'react';
import './Topbar.css'; // You'll create this CSS file in the next step.
import logo from '../Images/Logo new.jpeg';
// import { FaEnvelope, FaPhone } from 'react-icons/fa';
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
      <span className="Logo ">
      <img src={logo } width='100%' height='130px' alt="logo new" />
      </span>  
        {/* <FaEnvelope className="icon" />  */}
        <span className="phone">Mobile: +91 9994325534</span>
        {/* <FaPhone className="icon" /> */}
        <span className="email">Email: example@email.com</span>
        <span className="LogIn">
        <button className="button">Log In</button>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
