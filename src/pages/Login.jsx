/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

import Switch from '@mui/material/Switch';

import axios from "axios"

import "./login.css"

import phot from "./bui.png"
const label = { inputProps: { 'aria-label': 'Switch demo' } };


import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {SyncLoader } from "react-spinners"
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    setloading(true)
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      console.log("username",username)
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
        setloading(false)
      }
      if (data.status === true) {
        localStorage.setItem(
            "chat-app-user",
          JSON.stringify(data.user)
        );

        navigate("/chat");
      }
    }
  };
  const [loading, setloading] = useState(false)

  return (
    <>
     
        <form action="" onSubmit={(event) => handleSubmit(event)}>
        <div className="subn2">
                <div className="partm">
                    <div className="logooo"></div>
                    <div className="don">Dont have an account?<Link className="upn" to="/register">Sign up</Link></div>
                    <div className="wel">Welcome Back</div>
                    <div className="pn">Login into your account</div>
                    <div className="gon"> <span className="gi"><FcGoogle /></span>
                        <span className="gp">Google</span></div>
                    <div className="fn"><span className="fi"><FaFacebook /></span>
                        <span className="gp">Facebook</span></div>
                    <div className="cont"><h1 className="font-bold text-green-500 text-2xl">
  {loading ? <SyncLoader className ="bbbn"loading={true} /> : "Login"}
</h1>
</div>


                    <input className="emain"  type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
/>

                  <input  className="pan"  type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
 />
                    <div className="rem">

                        <Switch {...label} defaultChecked />

                        <button className="alln">Remeber me</button>
                    </div>
                  <button className="rec">Recover Password</button>
                    <button className="log"type="submit" >Log in</button>
                </div>
                <div className="partn"><img className="blon"
                    src={phot}
                    alt={"logo"}
                // Adjust the width
                /></div>
            </div>  
        </form>
 
      <ToastContainer />
    </>
  );
}
