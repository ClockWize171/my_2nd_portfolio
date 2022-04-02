import React from 'react'
import './Timeline.css'
import { Text, Box, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Timeline = () => {

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery([
        "(min-width: 1000px)",
        "(min-width:588px)"
    ])

    return (
        <>
            <Box pt={10} align="center">
                <Text
                    fontSize={isNotSmallerScreen ? "2xl" : "xl"}
                    fontWeight="bold">
                    &lt;Path /&gt;
                </Text>
            </Box>

            <motion.div
                transition={{ duration: 1 }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                className="container">

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Practising School Yangon Institute of Education</h3>
                        <strong>2007 - 2017</strong>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Info Myanmar University</h3>
                        <strong>2017 - 2019</strong>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>B.Sc Computing, Edinburgh Napier University</h3>
                        <strong>2019 - 2020</strong>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>B.Sc (Hons) Computing, Edinburgh Napier University </h3>
                        <strong>2020 - Present</strong>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Timeline