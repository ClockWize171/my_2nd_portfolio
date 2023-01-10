import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion';
import { Box, Text, Container, Flex, IconButton, useMediaQuery } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord, FaRegEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery("(min-width:588px)");

  return (
    <Container pt={7} maxW="container.lg">
      <Box
        textAlign="center">
        <Text fontSize="sm">© <strong>Thet Min Htin</strong> {getYear()} All Rights Reserved.</Text>
      </Box>
      <Box pt={4} pb={4} align='center'>
        <Box>
          <Flex justifyContent='center' flexDir='row'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("mailto:thetminhtin229@gmail.com")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='Send email'
                icon={<FaRegEnvelope />} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("https://www.facebook.com/thetminhtin229/")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_facebook'
                icon={<FaFacebook />} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("https://www.instagram.com/min_htin_171/")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_instagram'
                icon={<FaInstagram />} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("https://github.com/ClockWize171")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_instagram'
                icon={<FaGithub />} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("https://www.linkedin.com/in/thet-min-htin-30a657200/")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_linkedin'
                icon={<FaLinkedin />} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("https://discord.gg/nVy5cuUN3x")}
                size={isNotSmallerScreen ? 'md' : 'sm'}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_discord'
                icon={<FaDiscord />} />
            </motion.div>
          </Flex>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer