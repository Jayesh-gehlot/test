import React from 'react'
import Header from '../components/Header'
import CardSilder from '../components/CardSilder'
import CoreFeatures from '../components/CoreFeatures'
import FreeTutorialCard from '../components/FreeTutorialCard'

import "./mainlayout.css"
import Accordion from '../components/Accordion'
const MainLayout = () => {
    return (
        <div className='main_layout'>
            <Header />
            <CardSilder />
            <CoreFeatures />
            <FreeTutorialCard />
            <Accordion />
        </div>
    )
}

export default MainLayout