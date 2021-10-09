import React from 'react'
import "./Timeline2.css";

function Timeline2() {
    return (
        <>
            <div className="timeline-main">
                <div className="timeline-section">
                    <div className="left-boxes">
                        <div className="leftbox1">
                        <span class="leftbox-number">2</span><br />We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                        <div className="leftbox2">
                        <span class="leftbox-number">4</span><br />We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                    </div>
                    <div className="vertical-line">
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                        <span className="timeline-dot"></span>
                    </div>
                    <div className="left-boxes">
                        <div className="rightbox1">
                        <span class="leftbox-number">1</span><br />We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                        <div className="rightbox2">
                        <span class="leftbox-number">3</span><br />We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                        <div className="rightbox3">
                        <span class="leftbox-number">5</span><br />We source the finest skins and hides from New Zealand, 
                        and rigourously affirm that the quality of the skins and hides match our high expectation
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline2
