import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { addToVIEW, removeTOVIEW, userFetch } from "../redux/Slice";
import { useNavigate, Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Userdata() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  const { Users } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(userFetch());
    dispatch(removeTOVIEW());
  }, [userFetch]);

  const handlechange = (item) => {
    dispatch(addToVIEW(item));
    navigate("/view");
  };
  return (
    <>
      <div className="container">
        <div>
          <Form>
            <InputGroup   className="my-3">
              <Form.Control
                onChange={(e) => setsearch(e.target.value)}
                placeholder="Search...."
                style={{width:'80% !important'}}
              />
            </InputGroup>
          </Form>
        </div>
        <Link to={"/reg"} className="Register-btn">
          <span className="reg-span">Register User</span>
        </Link>
        {Users.filter((item) => {
          return search.toLocaleLowerCase() === ""
            ? item
            : item.Fullname.toLocaleLowerCase().includes(search);
        })
          // .filter((item) => {
          //   return search.toLowerCase() === ""
          //     ? item
          //     : item.Fullname.toLowerCase().includes(search);
          // })
          .map((item, key) => (
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
