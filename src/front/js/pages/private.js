import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Private = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="PRIVATE">Private</h1>
      <img src={rigoImageUrl} />
      <hr className="my-4" />
    </div>
  );
};
