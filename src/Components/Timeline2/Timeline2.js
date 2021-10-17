import React from 'react'
import "./Timeline2.css";

function Timeline2() {
    return (
        <>
            {
        window.screen.width > 800 &&
            <div className="timeline-main" id="timeline2">
                <div className="timeline-section">
                    <div className="left-boxes">
                        <div className="leftbox1">
                        <span class="leftbox-number">2</span><br />We then assort the skins and hides that pass 
                        our quality assurance, based on the requirements that we have
                        </div>
                        <div className="leftbox2">
                        <span class="leftbox-number">4</span><br />Finally, we package the skins and hides to 
                        meet international shipping standards and ship it to our consumers : globally acclaimed fashion brands, 
                        health care, and automotive industry
                        </div>
                    </div>
                    <div className="vertical-line">
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                        <span className="timeline-dot"></span><span className="timeline-dot"></span>
                    </div>
                    <div className="left-boxes">
                        <div className="rightbox1">
                        <span class="leftbox-number">1</span><br />We source the finest skins and hides from 
                        New Zealand, and rigourously affirm that the quality of the skins and hides match our 
                        high expectations
                     
                        </div>
                        <div className="rightbox2">
                        <span class="leftbox-number">3</span><br />After the assorting is done, we tan the skins and
                         hides with traditional and well standardised process
                        </div>
                    </div>
                </div>
            </div>
}
{ window.screen.width < 800 && 
    <div className="timeline-main" id="timeline2">
    <div className="timeline-section">
                <div className="mobilevertical-line">
                        <span className="mobiletimeline-dot"></span><span className="mobiletimeline-dot"></span>
                        <span className="mobiletimeline-dot"></span><span className="mobiletimeline-dot"></span>
                        
                    </div>
        <div className="mobile-boxes">
            <div className="mobilebox1">
            <span class="mobilebox-number">1</span><br />We source the finest skins and hides from 
                        New Zealand, and rigourously affirm that the quality of the skins and hides match our 
                        high expectations
            </div>
            <div className="mobilebox2">
            <span class="mobilebox-number">2</span><br />We then assort the skins and hides that pass 
                        our quality assurance, based on the requirements that we have
            </div>
            <div className="mobilebox3">
            <span class="mobilebox-number">3</span><br />After the assorting is done, we tan the skins and
                         hides with traditional and well standardised process
            </div>
            <div className="mobilebox4">
            <span class="mobilebox-number">4</span><br />Finally, we package the skins and hides to 
                        meet international shipping standards and ship it to our consumers : globally acclaimed fashion brands, 
                        health care, and automotive industry
            </div>
        </div>
    </div>
</div>
}
        </>
    )
}

export default Timeline2
