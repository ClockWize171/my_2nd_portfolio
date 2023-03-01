import React from 'react'
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  useColorMode,
  Button,
  Icon,
  Image,
  useMediaQuery
} from '@chakra-ui/react'
import './AboutMe.css'
import { BsLink45Deg, BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion'
import logos from '../../assets/images/Logo'
import hello from '../../assets/images/undraw_hello_re_3evm.svg'
import { FramerCarousel } from '../../components';

const AboutMe = () => {

  // Toggle Color Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery("(min-width:588px)");

  return (
    <Container paddingTop={10} maxW="container.lg">
      <SimpleGrid columns={[1, null, 2]} spacing='40px'>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}>
          <Box
            w="full"
            marginRight="5vh">
            <Box
              align="center"
              fontSize={isNotSmallerScreen ? "2xl" : "xl"}
              fontWeight="bold">
              <Text>
                about_me?
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
                  textAlign="justify"
                  fontWeight="medium"
                  fontSize={isNotSmallerScreen ? "lg" : "md"}>
                  Welcome mate 😃, I am Burmese and from Myanmar(Yangon-based).
                  I emphasized professionalism in IT fields. I did nearly most parts of the IT fields such as web development, scripting, networking, system administration,
                  machine learning and etc.
                </Text>
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
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
                  Resume. <Icon ml={1} as={BsLink45Deg} />
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
            fontSize={isNotSmallerScreen ? "2xl" : "xl"}
            fontWeight='bold'>
            What I Can Do.
          </Text>
        </Box>
        <Box paddingTop={5} align='center'>
          <Text
            fontSize={isNotSmallerScreen ? "lg" : "md"}
            fontWeight='medium'>
            Some technologies that I'm currently working on:
          </Text>
          <Box >
            <Icon className='right_arrow' mt={3} w={10} h={10} as={BsArrowRight} />
          </Box>
        </Box>

        <Box paddingTop={5}>
          <FramerCarousel>
            {logos.map((logo) => {
              return (
                <motion.div
                  style={{
                    paddingBottom: "2vh"
                  }}
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  key={logo.id}>
                  <Box
                    ml={isNotSmallerScreen ? 3 : 0}
                    padding={3}>
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
          </FramerCarousel>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutMe