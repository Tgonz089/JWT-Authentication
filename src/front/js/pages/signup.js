import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SignUp = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Sign Up</h1>
      <img src={rigoImageUrl} />
      <hr className="my-4" />
    </div>
  );
};
