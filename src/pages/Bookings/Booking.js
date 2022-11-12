import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import Navbar from '../../components/Navbar/Navbar'
import { serverLink } from '../../App'
import axios from 'axios'
const Booking = () => {
    const [tourData, setTourData] = useState([])

    const getTourData = async () => {
        try {
            const res = await axios.get(`${serverLink}api/gettours`, {
                withCredentials: true,
            })
            if (res.status === 200) {
                setTourData(res.data);
            }
        } catch (errr) {
            alert("Log in First")
        }
    }

    useEffect(() => {
        getTourData();
    })

    return (
        <>
            <Navbar cards={tourData} />
            <CardList cards={tourData} isUsers={true} heading="Your tours" />
        </>
    )
}

export default Booking