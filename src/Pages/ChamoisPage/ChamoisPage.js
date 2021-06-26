import React from 'react'
import Leathersection1 from '../../Components/Leather/Leathersection1'
import Leathersection2 from '../../Components/Leather/Leathersection2'
import Leathersection3 from '../../Components/Leather/Leathersection3'
import Leathersection4 from '../../Components/Leather/Leathersection4'
import Leathersection5 from '../../Components/Leather/Leathersection5'
import Leathersection6 from '../../Components/Leather/Leathersection6'
import ReactPageScroller from 'react-page-scroller';

function ChamoisPage() {
    return (
        <>
        <ReactPageScroller>
            <Leathersection1 />
            <Leathersection2 />
            <Leathersection3 />
            <Leathersection4 />
            <Leathersection5 />
            <Leathersection6 />
        </ReactPageScroller>

        </>
    )
}

export default ChamoisPage
