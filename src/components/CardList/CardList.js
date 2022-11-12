import React, { useEffect, useState } from "react";
import isAuth from "../../helpers/isAuth";
import "./CardList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { serverLink } from "../../App";

const CardList = ({ cards, isUsers, heading }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth()
      .then((res) => {
        setAuth(res);
      })
      .catch((err) => {
        alert(err);
      });
  });
  const handleBooking = async (card) => {
    // console.log(auth);
    if (!auth) {
      navigate("/login");
    } else {
      try {
        const res = await axios.post(`${serverLink}api/savetour`, card, {
          withCredentials: true,
        });
        if (res.status === 200) {
          alert("Booking Successfull");
        }
      } catch (err) {
        alert("Something went wrong");
      }
    }
  };
  const handleRemove = async (id) => {
    try {
      const res = await axios.post(`${serverLink}api/deletetour`, { id }, {
        withCredentials: true,
      });
      if (res.status === 200) {
        alert("Removed Successfull");
      }
    } catch (err) {
      alert("Something went wrong");
    }

  };
  return (
    <>
      <div className="cards container-fluid">
        <div className="header">
          <h1>{heading}</h1>
        </div>
        <main className="page-content">
          {cards.length === 0 ? <h1>No tours booked</h1> : cards.map((card) => {
            return (
              <div
                className="card"
                style={{ backgroundImage: `url(${card.background})` }}
              >
                <div className="content">
                  <h2 className="title">{card.title}</h2>
                  <p className="copy">{card.desc}</p>
                  {isUsers === true ? (
                    <button
                      style={{
                        padding: "9px",
                        backgroundColor: "red",
                        color: "#fff",
                        border: "0",
                      }}
                      onClick={(e) => {
                        handleRemove(card._id);
                      }}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      style={{
                        padding: "9px",
                        backgroundColor: "#000",
                        color: "#fff",
                        border: "0",
                      }}
                      onClick={(e) => {
                        handleBooking(card);
                      }}
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default CardList;
