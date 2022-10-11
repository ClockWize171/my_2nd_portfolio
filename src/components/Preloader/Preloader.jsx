import React from 'react'
import './Preloader.css'
import { useColorModeValue } from '@chakra-ui/react';
import { IoEarthOutline } from "react-icons/io5";


const Preloader = () => {
    return (
        <div id="load_animation" >
            <IoEarthOutline
                name="earth-outline"
                className="animation"
                style={{ color: useColorModeValue('#00A3C4', '#9DECF9'),
                border: `3px solid ${useColorModeValue('#00A3C4', '#9DECF9')}` }} />
        </div>
    )
}

export default Preloader