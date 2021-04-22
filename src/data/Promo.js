import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img1 from "../assets/caraousel/img1.jpg"
import img2 from "../assets/caraousel/img2.jpg"
import img3 from "../assets/caraousel/img3.jpg"
import Product from '../components/Products'
import "../assets/styles/Promo.css"
import data from './data'
function Promo() {

    const img = [img1, img2, img3];
    let [control, setcontrol] = useState(0);

    const leftClick = () => {

        if (control > 0) {
            setcontrol(--control);
        } else {
            setcontrol(2);
        }
    }

    const rightClick = () => {
        if (control < 2) {
            setcontrol(++control)
        } else {
            setcontrol(0);
        }
    }

    return (
        <div className="promo" style={{ backgroundImage: `url(${img[control]})` }}>
            <div className="arrow">
                <div className="leftArrow">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" onClick={leftClick} />
                </div>

                <div className="rightArrow">
                    <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" onClick={rightClick} />
                </div>
            </div>
            <div className="home">
                <div className="home__container">
                    <div className="home__image">
                        <div className="categories">
                            {data.map(name => {
                                return <Product category={name.category} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Promo