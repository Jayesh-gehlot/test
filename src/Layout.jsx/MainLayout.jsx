import React from 'react'
import Header from '../components/Header'
import CardSilder from '../components/CardSilder'
import CoreFeatures from '../components/CoreFeatures'
import FreeTutorialCard from '../components/FreeTutorialCard'
import Accoridain from '../components/Accoridain'
import "./mainlayout.css"
const MainLayout = () => {
    return (
        <div className='main_layout'>
            <Header />
            <CardSilder />
            {/* <CoreFeatures />
            <FreeTutorialCard />
            <Accoridain /> */}
        </div>
    )
}

export default MainLayout