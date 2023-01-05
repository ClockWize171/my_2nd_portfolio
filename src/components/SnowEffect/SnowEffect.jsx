import React from 'react'
import Snowfall from 'react-snowfall'
import { useColorMode } from '@chakra-ui/react'
import { winterTime } from '../../utils/winterTime'

const SnowEffect = () => {
    // Toggle Color Mode 
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"

    return (
        <div>
            {winterTime(<Snowfall
                color={isDark ? 'white' : '#a3a3a3'}
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
                snowflakeCount={150}
            />, <></>)}
        </div>
    )
}

export default SnowEffect