import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Text,
    Flex,
    Button,
    Stack,
    Spacer,
    IconButton,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { motion } from 'framer-motion';
import { RiMoonClearFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    // Toggle Color Mode 
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:944px)");

    //  Open Close Drawer
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (

        <Flex
            w='100%'
            className='navbar'>
            <Box>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}>
                    <NavLink style={{ textDecoration: 'none' }} to='/'>
                        <Text
                            mt={1}
                            fontSize={isNotSmallerScreen ? "xl" : "xl"}
                            fontWeight="bold">
                            &lt;thet_min_htin/&gt;
                        </Text>
                    </NavLink>
                </motion.div>
            </Box>
            <Spacer />


            {/* Desktop Navbar */}
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
                                    &lt;about_me /&gt;
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
                                    &lt;projects /&gt;
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
                                    &lt;contact_me /&gt;
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
                        borderRadius="3xl"
                        border='1px'
                        borderColor={isDark ? "#9DECF9" : "#00A3C4"}
                        aria-label='SunIcon'
                        variant="outline"
                        onClick={toggleColorMode}
                        icon={isDark ? <HiLightBulb /> : <RiMoonClearFill />} />
                </motion.div>
            </Box>

            {/* Mobile Siderbar */}
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
                                        &lt;about_me /&gt;
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
                                        &lt;projects /&gt;
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
                                        &lt;contact_me /&gt;
                                    </Button>
                                </motion.div>
                            </NavLink>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar