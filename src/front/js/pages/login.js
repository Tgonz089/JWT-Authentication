import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("This is your token", store.token);

  const handleClick = () => {
    actions.login(email, password);
    };


  if(store.token && store.token != "" && store.token != undefined) navigate("/");

  return (
    <div className="text-center mt-5">
      <h1 className="header">Login</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
