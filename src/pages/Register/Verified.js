// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";
// import Check from "../../images/check.png";
// import "./Register.css";

// const Verified = () => {
//   return (
//     <div>
//       <div className="container-fluid register">
//         <img className="navbar-brand login-logo mt-3" src={logo} alt="" />

//         <div className="text-center">
//           <h3 className="text-white fw-bold">Join The Most Fastest and</h3>
//           <h3 className="text-white fw-bold trusted">Trusted Network</h3>
//         </div>
//         <h3 className="text-center fw-bold text-white login-text">Verified</h3>
//         <div className="text-center container">
//           <img src={Check} alt="" />
//           <br />
//           <Link
//             to="/login"
//             className="text-decoration-none btn btn-primary text-white mt-3"
//           >
//             {" "}
//             Login{" "}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Verified = () => {
  // const [verifyToken, setVerifyToken]= useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const API_URL = "http://localhost:4000/accounts/";

  useEffect(() => {
    const tokenData = {
      token,
    };
    axios.post(API_URL + "verify-email", tokenData).then((res) => {
      // if(res.data.message){
      setIsVerified(true);
      // }
    });
  }, []);

  const routeToLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 7000);
  };

  useEffect(() => {
    if (isVerified) {
      routeToLogin();
    }
  }, [isVerified]);

  return (
    <div>
      {isVerified && (
        <h3>
          Verification successful - you are about to be redirected to the login
          page
        </h3>
      )}
    </div>
  );
};

// export default Verification;

export default Verified;
