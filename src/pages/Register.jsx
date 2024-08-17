import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";
import photo from "./phot.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./reg.css"

import {SyncLoader } from "react-spinners"
export default function Register() {
  const navigate=useNavigate();
  const [loading, setloading] = useState(false)
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
      const handleSubmit = async (event) => {
        setloading(true)
        event.preventDefault();
        if (handleValidation()) {
          const { email, username, password } = values;
          const { data } = await axios.post(registerRoute, {
            username,
            email,
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

      useEffect(() => {
        if (localStorage.getItem("chat-app-user")) {
          navigate("/chat");
        }
      }, []);

      const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
          toast.error(
            "Password and confirm password should be same.",
            toastOptions
          );
          return false;
        } else if (username.length < 1) {
          toast.error(
            "Username should be greater than 3 characters.",
            toastOptions
          );
          return false;
        } else if (password.length < 1) {
          toast.error(
            "Password should be equal or greater than 8 characters.",
            toastOptions
          );
          return false;
        } else if (email === "") {
          toast.error("Email is required.", toastOptions);
          return false;
        }
    
        return true;
      };
    
      return (
        <>
         <form action="" onSubmit={(event) => handleSubmit(event)}>

             <div className="subn1">
                <div className="part9">


                    <img className="blog"
                        src={photo}
                        alt={"logo"}
                    // Adjust the width
                    />
                </div>
                <div className="part10">
                    <div className="t1">Don’t have an account?<Link className="upm" to={"/login"}>Signin</Link></div>
                    <div className="wel">Get Started With Leagle. <span className="t2">Getting started is easy</span></div>
                    <div className="gog"><span className="gi"><FcGoogle /></span><span className="gt">Google</span></div>
                    <div className="face"><span className="fi"><FaFacebook /></span>
                        <span className="gp">Facebook</span></div>
                    <div className="cont"><h1 className="font-bold text-green-500 text-2xl">
  {loading ? <SyncLoader className ="bbbn"loading={true} /> : "signup"}
</h1>
                    </div>
                    <input  type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
  className="user" />
                    <input  type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)} className="email" />
                    <input  className="pass"  type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
/>
                    <input  className="conf"type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
 />
                    <button className="cre" >Create</button>
                    <div className="last">By continuing you indicate that you read and agreed to the Terms of Use</div>
                </div>
            </div>
            </form>
          <ToastContainer />
        </>
      );
    }
    
   