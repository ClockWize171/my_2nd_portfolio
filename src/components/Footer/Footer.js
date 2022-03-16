import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion';
import { Box, Text, Container, Flex, IconButton, } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord, FaRegEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <Container pt={9} maxW="container.lg">
      <Box
        textAlign="center">
        <Text fontSize="sm"> Crafted by <strong>Thet Min Htin</strong> © {getYear()} All Rights Reserved.</Text>
      </Box>
      <Box pt={4} pb={4} align='center'>
        <Box>
          <Flex justifyContent='center' flexDir='row'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open("mailto:takashiaoyama171@gmail.com")}
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
                onClick={() => window.open("https://www.facebook.com/takashi.san.589")}
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
                onClick={() => window.open("https://discord.gg/d9afQ4KJ")}
                mr='2'
                borderRadius="full"
                variant='solid'
                aria-label='find_on_discord'
                icon={<FaDiscord />} />
            </motion.div>
          </Flex>
          {/* <motion.div
            style={{
              width: "200px"
            }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}> */}
          {/* <Button leftIcon={<SiMinutemailer />} borderRadius='sm'  variant='outline'>
            &lt;send_email/&gt;
          </Button> */}
          {/* </motion.div> */}
        </Box>

        {/* social group button */}
        {/* <Box paddingTop={4}>
          <ButtonGroup size='md' isAttached variant='outline'>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}>
              <IconButton
                mr='2'
                borderRadius="full"
                variant='outline'
                colorScheme="cyan"
                aria-label='Send email'
                icon={<FaFacebook />} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}>
              <IconButton
                mr='2'
                borderRadius="full"
                variant='outline'
                colorScheme='cyan'
                aria-label='Send email'
                icon={<FaInstagram />} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}>
              <IconButton
                mr='2'
                borderRadius="full"
                variant='outline'
                colorScheme='cyan'
                aria-label='Send email'
                icon={<FaLinkedin />} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}>
              <IconButton
                mr='2'
                borderRadius="full"
                variant='outline'
                colorScheme='cyan'
                aria-label='Send email'
                icon={<FaDiscord />} />
            </motion.div>
          </ButtonGroup>
        </Box> */}
      </Box>
    </Container>
  )
}

export default Footer