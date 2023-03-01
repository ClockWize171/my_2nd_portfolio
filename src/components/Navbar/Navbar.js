import React from 'react'
import {
    Box,
    Text,
    Flex,
    Spacer,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { motion } from 'framer-motion';
import { ReactComponent as LogoAlt } from '../../assets/images/LogoAlt.svg'
import { winterTime } from '../../utils/winterTime'
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';


const Navbar = () => {
    // Toggle Color Mode 
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:944px)");

    return (

        <Flex
            w='100%'
            className='navbar'>
            <Box>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}>
                    <NavLink style={{ textDecoration: 'none' }} to='/'>
                        {winterTime(<Box
                            pointerEvents='none'
                            m='auto'>
                            <LogoAlt

                                style={{ height: '2rem', width: '11rem' }} />
                        </Box>,
                            <Text
                                mt={1}
                                fontSize={isNotSmallerScreen ? "xl" : "xl"}
                                fontWeight="bold">
                                thet_min_htin
                            </Text>
                        )}

                    </NavLink>
                </motion.div>
            </Box>
            <Spacer />

            {/* Desktop Navbar */}
            <DesktopNavbar
                isNotSmallerScreen={isNotSmallerScreen}
                toggleColorMode={toggleColorMode}
                isDark={isDark} />

            {/* Mobile Siderbar */}
            <MobileNavbar
                isNotSmallerScreen={isNotSmallerScreen}
                isDark={isDark} />
        </Flex>
    )
}

export default Navbar