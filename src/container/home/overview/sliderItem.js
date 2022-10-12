import React from "react";

const SliderItem = () => {
    return(
        <>
            <div className="carousel-items">
                        <h2 className="carousel-item-title dark-color font-face-sb">Fresh Honor 9</h2>
                            <h4 className="font-face-light dark-color carousel-item-subtitle">32GB Unlocked quadcore</h4>
                            <div>
                                <span className="font-face-light dark-color">4GB RAM</span>
                                <span className="font-face-light dark-color">64GB ROM</span>
                                <span className="font-face-light dark-color">20MP + 12MP Camera</span>
                            </div>
                            <div>
                                <p>now at <strong className="font-face-bold dark-color"> $279</strong></p>
                            </div>
                        </div>
        </>
    )
}

export default SliderItem;