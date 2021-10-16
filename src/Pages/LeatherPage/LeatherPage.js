import React from 'react'
import Header2 from '../../Components/Header2/Header2'
import Leathersection1 from '../../Components/Leather/Leathersection1'
import Leathersection2 from '../../Components/Leather/Leathersection2'
import Leathersection3 from '../../Components/Leather/Leathersection3'
import Leathersection4 from '../../Components/Leather/Leathersection4'
import Leathersection5 from '../../Components/Leather/Leathersection5'
import Leathersection6 from '../../Components/Leather/Leathersection6'
import Leathersection7 from '../../Components/Leather/Leathersection7'

function LeatherPage() {
    return (
        <div>
        <Header2 />
        <div style ={{scrollSnapType: "y mandatory", height:"88vh", overflow:"auto"}}>
            <Leathersection1 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection2 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection3 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection4 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection5 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection6 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Leathersection7 style={{
                scrollSnapAlign: "end",
                scrollSnapStop: "normal"
            }} />

        </div>
        </div>
    )
}

export default LeatherPage
