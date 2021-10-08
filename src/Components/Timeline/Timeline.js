import React from 'react'
import "./Timeline.css";

function Timeline() {
    return (
        <>
            <div className="timeline-main">
                <div className="timeline-section">
                    <div className="left-boxes">
                        <div className="leftbox">
                        <span class="leftbox-number">1</span>We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                        <div className="leftbox">
                        <span class="leftbox-number">2</span>We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                    </div>
                    <div className="vertical-line">
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                        <span className="timeline-dot"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline
