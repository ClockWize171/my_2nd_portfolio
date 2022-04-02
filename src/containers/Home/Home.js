import React from 'react'
import profile from '../../assets/images/profile.png'
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  Image,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react'
import { Timeline } from '../../components'
import { motion } from 'framer-motion'

const Home = () => {

  // Toggle Color Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery([
    "(min-width: 1000px)",
    "(min-width:588px)"
  ]);

  return (
    <Container paddingTop={6} maxW="container.lg">
      <SimpleGrid paddingTop="5vh" columns={[1, null, 2]} spacing='40px'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}>
          <Box
            marginTop={isNotSmallerScreen ? 8 : 0}>
            <Box borderRadius='full' align="center">
              <motion.button
                whileHover={{ scale: 1.05 }}>
                <Image
                  bgGradient={isDark ? "linear(to-r, blue.300, cyan.400, teal.300)" : "linear(to-r, blue.700, cyan.600, teal.500)"}
                  zIndex={1}
                  boxShadow='dark-lg'
                  borderRadius='full'
                  boxSize='200px'
                  src={profile}
                  alt='Thet Min Htin'
                />
              </motion.button>
            </Box>
          </Box>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>
          <Box
            paddingBottom={isNotSmallerScreen ? "2vh" : 0}>
            <Box align="center" >
              <Box paddingBottom={isNotSmallerScreen ? 3 : 5}>
                <Text
                  fontSize={isNotSmallerScreen ? "2xl" : "xl"}
                  fontWeight="bold">
                  &lt;Hello mate, I am Min Htin./&gt;
                </Text>
              </Box>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35 }}>
                <Box
                  lineHeight={8}
                  bg={isDark ? 'cyan.800' : '#c3e0e5'}
                  padding={5}
                  rounded='md'
                  boxShadow="inner">
                  <Text
                    textAlign="justify"
                    fontWeight="medium"
                    fontSize={isNotSmallerScreen ? "lg" : "md"}>
                    &lt;Hi, how is going mate? My full name is Thet Min Htin
                    and just call me Min Htin. Welcome
                    from my portfolio web-app. And ya,
                    feel free and you can just explore everything from here. PEACE! ✌/&gt;
                  </Text>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </SimpleGrid>
      <Timeline />
    </Container>
  )
}

export default Home