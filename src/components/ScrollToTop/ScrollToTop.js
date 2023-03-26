import React, { useState, useEffect } from 'react'
import './ScrollToTop.css'
import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {

    const [scrollToTop, setScrollToTop] = useState(false)

    useEffect(() => {
        const ac = new AbortController();
        checkScrollUp();
        return () => ac.abort();
    }, [])

    function checkScrollUp() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }


    return (
        <motion.div
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '0',
                left: '85%',
                width: '10px'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {scrollToTop && (
                <IconButton
                    borderRadius='sm'
                    boxShadow="lg"
                    className='arrow'
                    colorScheme='cyan'
                    variant='solid'
                    size='md'
                    icon={<BsArrowUp />}
                    onClick={scrollUp}>
                </IconButton>

            )}
        </motion.div>
    )
}

export default ScrollToTop