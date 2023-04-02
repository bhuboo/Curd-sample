import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { addToVIEW, userFetch } from "../redux/Slice";
import { useNavigate, Link } from "react-router-dom";

function Userdata() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Users } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(userFetch());
  }, [userFetch]);

  const handlechange = (item) => {
    dispatch(addToVIEW(item));
    navigate("/view");
  };
  return (
    <>
      <div className="container">
        <Link to={"/reg"} className="Register-btn">
          <span className="reg-span">
            Register User
            </span>
        </Link>
        {Users.map((item, key) => (
          <>
            <div key={key} className="single-container">
              <h1>Full Name: {item.Fullname}</h1>
              <button
                className="button-view"
                onClick={() => handlechange(item)}
              >
                View
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Userdata;
