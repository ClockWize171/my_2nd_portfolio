import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const MobileNavbar = ({
  isNotSmallerScreen,
  isDark
}) => {

  //  Open Close Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        display={isNotSmallerScreen ? "none" : "flex"}
        paddingLeft={3}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={onOpen}
            borderRadius="sm"
            variant="outline"
            colorScheme='cyan'
            aria-label='HamburgerIcon'
            icon={<GiHamburgerMenu />} />
        </motion.div>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={isDark ? "#023F49" : "#F9FFFB"}>
          <motion.div
            whileTap={{ scale: 0.98 }}>
            <DrawerCloseButton
              borderRadius='sm'
              border='1px'
              color={isDark ? "cyan.200" : 'cyan.600'} />
          </motion.div>
          <DrawerBody>
            <Stack align="center" paddingTop={10}>
              <NavLink
                onClick={onClose}
                style={{ textDecoration: "none" }}
                to='/aboutme'>
                <motion.div
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    w="200px"
                    fontSize="md"
                    borderRadius="sm"
                    colorScheme='cyan'
                    variant='outline'>
                    about_me.
                  </Button>
                </motion.div>
              </NavLink><br />
              <NavLink
                onClick={onClose}
                style={{ textDecoration: "none" }}
                to='/projects'>
                <motion.div
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    w="200px"
                    fontSize="md"
                    borderRadius="sm"
                    colorScheme='cyan'
                    variant='outline'>
                    projects.
                  </Button>
                </motion.div>
              </NavLink><br />
              <NavLink
                onClick={onClose}
                style={{ textDecoration: "none" }}
                to='/contact_me'>
                <motion.div
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    w="200px"
                    fontSize="md"
                    borderRadius="sm"
                    colorScheme='cyan'
                    variant='outline'>
                    contact_me.
                  </Button>
                </motion.div>
              </NavLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNavbar