import { Button, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Emails from "../assets/email.png";
import Passwords from "../assets/password.png";
import { LoginApi} from "../service/api"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

export default function LoginForm({setError}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = async(info) => {
    try {
        setLoading(true);
        const  data  = await LoginApi( info);
        
        dispatch({ type: "LOGIN", payload: data });
        Cookies.set("user", JSON.stringify(data));
      if(data){
        navigate("/");
      }
        
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log(error);
      }
  };

  const StyledButton = styled(Button)({
    background: "#AB9554",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "500",
    width: "100%"
})

const InputBox =styled(Box)({
    border: "1px solid #8D99AC",
    borderRadius: "8px",
    padding: "9px",
    marginBottom: "18px"
})

  return (
    <div className="addressBox">
      <form onSubmit={handleSubmit(onSubmit)} style={{background: "#fff"}}>
        <InputBox>
        <img src={ Emails} width="16px" />
        <input
            type="text"
            name="email"
            placeholder="Phone Number"
            {...register("email", {
              required: true,
            //   pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
        </InputBox>
        <InputBox>
        <img src={ Passwords} width="16px" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            //   minLength: 4
            })}
          />
        </InputBox>
          <StyledButton type="submit">{loading ?"Loading" : "Login"}</StyledButton>
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
           {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        
      </form>
    </div>
  );
}