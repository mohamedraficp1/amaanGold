import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bmg-logo.png";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import FormLogin from "./FomLogin";
const loginInfos = {
  email: "",
  password: "",
};
export default function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData]=useState()
//   const loginSubmit = async () => {
//     try {
//       setLoading(true);
//       const  data  = await Login( loginData);
     
//     //   dispatch({ type: "LOGIN", payload: data });
//     //   Cookies.set("user", JSON.stringify(data));
//       navigate("/");
//     } catch (error) {
//     //   setLoading(false);
//     //  setError(error.response.data.message);
//     }
//   };

  const StyledBox = styled(Box)({
    background: "#fff",
    borderRadius: "30px",
    padding: " 45px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "300px"
  });

  const StyledTitle = styled(Typography)({
    color: "#30394A",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "28px",
    margin: "20px 0",
    textAlign: "center"
  });

  const ForgotPassword= styled(Typography)({
        color: "#8D99AC",
        fontSize: "17px",
        fontWeight: "400px",
        textDecoration:"none",
        marginTop: "12px"
  })

  return (
    <Box height={"100vh"} display="flex" justifyContent={"center"} alignItems="center">
    <StyledBox>
      <Box width={"100%"}>
        <Box  display="flex" justifyContent={"center"} alignItems="center">
            <img src={Logo} alt="Logo" width={"150px"} />
        </Box>
        <StyledTitle>Login</StyledTitle>
        <FormLogin setError={setError} />
        
        <Link to="/forgot" className="forgot_password">
        <ForgotPassword>
          Forgotten password?
          </ForgotPassword>
        </Link>
        
        <DotLoader color="#1876f2" loading={loading} size={30} />

        {error && <div className="error_text">{error}</div>}
        <div className="sign_splitter"></div>
       
      </Box>
    </StyledBox>
    </Box>
  );
}
