import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  IconButton
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { HiLightBulb } from 'react-icons/hi'
import { RiMoonClearFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const DesktopNavbar = ({
  isNotSmallerScreen,
  toggleColorMode,
  isDark }) => {

  return (
    <>
      <Box
        display={isNotSmallerScreen ? "flex" : "none"}
        paddingLeft={3}>
        <Breadcrumb separator=" ">
          <BreadcrumbItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}>
              <NavLink to='/aboutme'>
                <Button
                  borderRadius="sm"
                  colorScheme='cyan'
                  variant='outline'>
                  about_me.
                </Button>
              </NavLink>
            </motion.div>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}>
              <NavLink to='/projects'>
                <Button
                  borderRadius="sm"
                  colorScheme='cyan'
                  variant='outline'>
                  projects.
                </Button>
              </NavLink>
            </motion.div>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}>
              <NavLink to='/contact_me'>
                <Button
                  borderRadius="sm"
                  colorScheme='cyan'
                  variant='outline'>
                  contact_me.
                </Button>
              </NavLink>
            </motion.div>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      <Box paddingLeft={3}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}>
          <IconButton
            color={isDark ? "#ffc87c" : "#c573ff"}
            borderRadius="full"
            border='1px'
            borderColor={isDark ? "#9DECF9" : "#00A3C4"}
            aria-label='SunIcon'
            variant="outline"
            onClick={toggleColorMode}
            icon={isDark ? <HiLightBulb /> : <RiMoonClearFill />} />
        </motion.div>
      </Box>
    </>
  )
}

export default DesktopNavbar