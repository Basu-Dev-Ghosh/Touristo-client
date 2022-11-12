import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { serverLink } from "../../App";
import isAuth from "../../helpers/isAuth";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = ({ cards }) => {
  const [auth, setAuth] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    isAuth().then((res) => {
      console.log(res);
      setAuth(res);
    }).catch((err) => {
      alert(err)
    });
  }, [])

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const newFilter = cards.filter((val) => {
      return val.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setFilterProducts([]);
    } else {
      setFilterProducts(newFilter);
    }
  };
  const getResult = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`)
  }







  const logout = async () => {
    try {
      const res = await axios.get(`${serverLink}api/logout`, {
        withCredentials: true,
      })
      setAuth(false);
      window.location.reload();
      navigate('/')
    } catch (err) {
      alert("Logout failed")
    }
  }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>TOURISTO</h1>
      </div>
      <div className="nav-items">
        <li>
          <NavLink to="/" active>
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/bookings">My Bookings</NavLink>{" "}
        </li>
        {
          auth === true ? <li>
            <a onClick={logout}>Logout</a>{" "}
          </li> :
            <li>
              <NavLink to="/login">Login</NavLink>{" "}
            </li>
        }
      </div>
      <form className="form-inline d-flex ml-auto" onSubmit={getResult}>
        <input
          className="form-control mr-sm-2"
          type="search"
          value={searchText}
          placeholder="Search your place"
          aria-label="Search"
          onChange={handleSearch}
        />
        <button style={{ padding: "9px", backgroundColor: "#000", color: "#fff", border: "0" }} type="submit">
          Search
        </button>
      </form>
      {(filterProducts.length !== 0 &&
        <div
          style={{
            width: "300px",
            height: "auto",
            backgroundColor: "#ffff",
            position: "absolute",
            right: "160px",
            top: "90px",
            borderRadius: "10px",
          }}
        >
          <ul>
            {filterProducts?.map((fl, index) => {
              return (
                <li
                  style={{
                    color: "#000",
                    margin: "30px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    listStyle: "none"
                  }}
                  key={index}
                  onClick={(e) => {
                    setSearchText(fl.title)
                    setFilterProducts([])
                  }}
                >
                  {fl.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
