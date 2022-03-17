import React, { useRef, useState, useEffect } from 'react'
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  useColorMode,
  Button,
  Icon,
  Image,
} from '@chakra-ui/react'
import './AboutMe.css'
import { BsLink45Deg } from "react-icons/bs";
import { motion } from 'framer-motion'
import logos from '../../assets/images/Logo'
import hello from '../../assets/images/undraw_hello_re_3evm.svg'

const AboutMe = () => {

  // Carousel Settings
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);



  useEffect(() => {
    setTimeout(() => {
      const scrollWidth = carousel.current.scrollWidth
      const offsetWidth = carousel.current.offsetWidth
      setWidth(scrollWidth - offsetWidth)
    }, 3000)
  }, [carousel])
  console.log(width)

  // Toggle Color Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Container paddingTop={10} maxW="container.lg">
      <SimpleGrid columns={[1, null, 2]} spacing='40px'>
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}>
          <Box
            w="full"
            marginRight="5vh">
            <Box
              align="center"
              fontSize="2xl"
              fontWeight="bold">
              <Text>
                &lt;about_me?/&gt;
              </Text>
            </Box>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35 }}>
              <Box
                marginTop={3}
                lineHeight={8}
                bg={isDark ? 'cyan.800' : '#c3e0e5'}
                p={5}
                rounded='md'
                boxShadow="inner">
                <Text
                  textAlign="center"
                  fontWeight="medium"
                  fontSize="lg">
                  &lt;Welcome mate 😃, I am Burmese and from Myanmar(Yangon-based).
                  I emphasized professionalism in IT fields. I did nearly most parts of the IT fields such as web development, scripting, networking, system administration,
                  machine learning and etc. /&gt;
                </Text>
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>
          <Box align='center'>
            <Box>
              <Image
                boxSize='300px'
                src={hello}
                alt='Hello Image'
              />
            </Box>
            <Box>
              <motion.div
                style={{
                  width: '165px'
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}>
                <Button
                  w="10rem"
                  h='3rem'
                  onClick={() => window.open("https://resume.io/r/O8p8INUxy")}
                  borderRadius="sm"
                  variant='outline'
                  colorScheme="cyan">
                  &lt;Resume <Icon ml={1} as={BsLink45Deg} /> /&gt;
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </SimpleGrid>

      {/* Skill Parts */}
      <Box paddingTop={10}>
        <Box align='center'>
          <Text
            fontSize='2xl'
            fontWeight='bold'>
            &lt;What I Can Do? /&gt;
          </Text>
        </Box>
        <Box paddingTop={5} align='center'>
          <Text
            fontSize='lg'
            fontWeight='medium'>
            Some technologies that I'm currently experiencing with:
          </Text>
        </Box>

        <Box paddingTop={10}>
          <motion.div
            ref={carousel}
            className='carousel'
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel">
              {logos.map((logo) => {
                return (
                  <motion.div
                    style={{
                      paddingBottom: "2vh"
                    }}
                    // whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    key={logo.id}>
                    <Box padding={3}>
                      <Image
                        bg={isDark ? 'cyan.800' : '#c3e0e5'}
                        fallbackSrc='https://via.placeholder.com/240'
                        padding={7}
                        borderRadius="3xl"
                        boxShadow="lg"
                        w="full"
                        h="12rem"
                        style={{
                          minWidth: "12rem",
                          minHeight: "12rem",
                          pointerEvents: "none"
                        }}
                        src={logo.image}></Image>
                    </Box>
                    <Text fontWeight='semibold' textAlign='center'>
                      &lt;{logo.title}/&gt;
                    </Text>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutMe