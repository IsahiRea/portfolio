import React from 'react'
import Intro from './Intro.jsx'
import MyServices from './MyServices.jsx'
import AboutMe from './AboutMe.jsx'
import MyWorks from './MyWorks.jsx'

export default function Body() {
    return (
        <>
            <Intro/>
            <MyServices/>
            <AboutMe/>
            <MyWorks/>
        </>
    )
}