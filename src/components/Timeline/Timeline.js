import React from 'react'
import './Timeline.css'
import { Text, Box, useMediaQuery, useColorModeValue, Link, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Timeline = () => {

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery([
        "(min-width: 1000px)",
        "(min-width:588px)"
    ])

    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"

    const data = [
        {
            place: <h3>Practising School Yangon Institute of Education</h3>,
            time: <strong>2007 - 2017</strong>
        },
        {
            place: <h3>Info Myanmar University</h3>,
            time: isNotSmallerScreen ? <strong>2019 - 2017</strong> : <strong>2017 - 2019</strong>
        },
        {
            place: <h3>B.Sc (Hons) Computing, Edinburgh Napier University </h3>,
            time: isNotSmallerScreen ? <strong>2019 - 2022</strong> : <strong>2022 - 2019</strong>
        },
        {
            place: <h3>Frontend Developer at <Link color={useColorModeValue("#0900C3", '#0075F6')}><br />BEYOND BRANDS</Link> </h3>,
            time: isNotSmallerScreen ? <strong>2022 Sep - 2022 Oct</strong> : <strong>2022 Sep - 2022 Oct</strong>
        },

    ]

    return (
        <>
            <Box pt={10} align="center">
                <Text
                    fontSize={isNotSmallerScreen ? "2xl" : "xl"}
                    fontWeight="bold">
                    Path.
                </Text>
            </Box>

            <motion.div
                className="container"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
                {data.map((i) => (
                    <div
                        className="timeline-block timeline-block-right">
                        <Box
                            bg={isDark ? '#086F83' : "#C3E0E5"}
                            className="marker" />
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            whileInView={{ x: [100, 0], opacity: [0, 1] }}
                            className="timeline-content">
                            {i.place}
                            {i.time}
                        </motion.div>
                    </div>
                ))}
                {/* <div
                    className="timeline-block timeline-block-right">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker" />
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

                <div className="timeline-block timeline-block-right">
                    <Box
                        bg={useColorModeValue("#C3E0E5", '#086F83')}
                        className="marker"></Box>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        className="timeline-content">
                        <h3>Frontend Developer at <Link isExternal href='https://www.beyondbrands.io/' color={useColorModeValue("#0900C3", '#0075F6')}><br />BEYOND BRANDS</Link> </h3>
                        {isNotSmallerScreen ? <strong>2022 Sep - 2022 Oct</strong> : <strong>2022 Sep - 2022 Oct</strong>}
                    </motion.div>
                </div> */}

            </motion.div>
        </>
    )
}

export default Timeline