import React from 'react'
import Landing from "../../components/LandingPage/Landing";
import Navbar from "../../components/Navbar/Navbar";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import { data } from '../../assets/demoData'
const Home = () => {
    return (
        <>
            <Navbar cards={data} />
            <Landing />
            <CardList cards={data} isUsers={false} heading="Our top tours" />
            <Footer />
        </>
    )
}

export default Home