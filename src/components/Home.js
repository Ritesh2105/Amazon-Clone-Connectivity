import React from "react";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img1 from "../assets/caraousel/img1.jpg"
import img2 from "../assets/caraousel/img2.jpg"
import img3 from "../assets/caraousel/img3.jpg"
import "../assets/styles/Home.css";

function Home() {
    const img = [img1, img2, img3];
    let [control, setcontrol] = useState(0);

    const leftArrow = () => {

        if (control > 0) {
            setcontrol(--control);
        } else {
            setcontrol(2);
        }
    }

    const rightArrow = () => {
        if (control < 2) {
            setcontrol(++control)
        } else {
            setcontrol(0);
        }
    }

    return (
        <div>
            <div className="promo" style={{ backgroundImage: `url(${img[control]})` }}>
                <div className="arrow">
                    <div className="leftArrow">
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" onClick={leftArrow} />
                    </div>
                    <div className="rightArrow">
                        <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" onClick={rightArrow} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
