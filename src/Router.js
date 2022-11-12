import React from 'react'
import Home from "./pages/Home/Home";
import Booking from "./pages/Bookings/Booking";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SearchPage from './pages/SearchPage/SearchPage';
const router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookings" element={<Booking />} />
            <Route exact path="/search/:tourname" element={<SearchPage />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}

export default router