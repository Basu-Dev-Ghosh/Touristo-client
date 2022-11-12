import React, { useState, useEffect } from 'react'
import { serverLink } from '../../App'
import Navbar from '../../components/Navbar/Navbar'
import { data } from '../../assets/demoData'
import CardList from '../../components/CardList/CardList'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const SearchPage = () => {
    const { tourname } = useParams();

    const [tourData, setTourData] = useState([])

    const getTourData = async () => {
        const res = data.find((dat) => {
            return dat.title === tourname;
        })
        setTourData([res]);
    }

    useEffect(() => {
        getTourData();
    }, [])
    return (
        <>
            <Navbar cards={data} />
            {
                tourData ? <CardList cards={tourData} isUsers={false} heading="Your result" /> : <h1>No tour found</h1>
            }

        </>
    )
}

export default SearchPage