import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import './FramerCarousel.css'

const FramerCarousel = ({ children }) => {
  // Carousel Settings
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);

  useEffect(() => {
    const ac = new AbortController();
    setTimeout(() => {
      const scrollWidth = carousel.current?.scrollWidth
      const offsetWidth = carousel.current?.offsetWidth
      setWidth(scrollWidth - offsetWidth)
    }, 1000)
    return () => ac.abort();
  }, [carousel])


  return (
    <motion.div
      ref={carousel}
      className='carousel'
      whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel">
        {children}
      </motion.div>
    </motion.div>
  )
}

export default FramerCarousel