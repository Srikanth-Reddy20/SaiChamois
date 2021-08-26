import React from 'react'
import Header3 from '../../Components/Header3/Header3'
import Chamoissection1 from '../../Components/Chamois/Chamoissection1'
import Chamoissection2 from '../../Components/Chamois/Chamoissection2'
import Chamoissection3 from '../../Components/Chamois/Chamoissection3'
import Chamoissection4 from '../../Components/Chamois/Chamoissection4'
import Chamoissection5 from '../../Components/Chamois/Chamoissection5'
import Chamoissection6 from '../../Components/Chamois/Chamoissection6'
import Chamoissection7 from '../../Components/Chamois/Chamoissection7'

function ChamoisPage() {
    return (
        <div>
             
        <Header3 />
        <div style ={{scrollSnapType: "y mandatory", height:"90vh", overflow:"auto"}}>
            <Chamoissection1 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection2 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection3 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection4 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection5 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection6 style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
            }} />
            <Chamoissection7 style={{
                scrollSnapAlign: "end",
                scrollSnapStop: "normal"
            }} />

        </div>
        </div>
    )
}

export default ChamoisPage
