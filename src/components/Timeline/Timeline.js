import React from 'react'
import './Timeline.css'
import { Text, Box, useMediaQuery, useColorModeValue } from '@chakra-ui/react'
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

            <div className="container">

                <div
                    className="timeline-block timeline-block-right">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker"></Box>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        className="timeline-content">
                        <h3>Practising School Yangon Institute of Education</h3>
                        <strong>2007 - 2017</strong>
                    </motion.div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker"></Box>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        className="timeline-content">
                        <h3>Info Myanmar University</h3>
                        {isNotSmallerScreen ? <strong>2019 - 2017</strong> : <strong>2017 - 2019</strong>}
                    </motion.div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker"></Box>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        className="timeline-content">
                        <h3>B.Sc Computing, Edinburgh Napier University</h3>
                        <strong>2019 - 2020</strong>
                    </motion.div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker"></Box>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        className="timeline-content">
                        <h3>B.Sc (Hons) Computing, Edinburgh Napier University </h3>
                        {isNotSmallerScreen ? <strong>2022 - 2020</strong> : <strong>2020 - 2022</strong>}
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Timeline