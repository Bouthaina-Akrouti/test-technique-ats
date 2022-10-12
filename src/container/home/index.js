import React, {useState} from 'react';
import PromosBlock from './overview/promoBlock';
import Slider from './overview/slider';

const Home = ( ) => {
    return (
        <>
            <Slider />
            <PromosBlock />
        </>
    )
}

export default Home