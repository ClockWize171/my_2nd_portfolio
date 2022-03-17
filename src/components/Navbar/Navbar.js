import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Container,
    Box,
    Text,
    Flex,
    Button,
    Stack,
    Spacer,
    IconButton,
    useColorMode,
    useMediaQuery,
    Link
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { RiMoonClearFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    // Toggle Color Mode 
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:588px)");

    //  Open Close Drawer
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Container maxW="container.xl">
            <Box
                padding={5}>
                <Flex flexDirection="row">
                    <Box>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link style={{ textDecoration: 'none' }} href='/'>
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold">
                                    &lt;thet_min_htin /&gt;
                                </Text>
                            </Link>
                        </motion.div>
                    </Box>
                    <Spacer />
                    <Box
                        display={isNotSmallerScreen ? "flex" : "none"}
                        paddingLeft={3}>
                        <Breadcrumb separator=" ">
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    style={{ textDecoration: "none" }}
                                    href='/aboutme'>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <Button
                                            borderRadius="sm"
                                            colorScheme='cyan'
                                            variant='outline'>
                                            &lt;about_me /&gt;
                                        </Button>
                                    </motion.div>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    style={{ textDecoration: "none" }}
                                    href='/projects'>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <Button
                                            borderRadius="sm"
                                            colorScheme='cyan'
                                            variant='outline'>
                                            &lt;projects /&gt;
                                        </Button>
                                    </motion.div>
                                </BreadcrumbLink>
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

                        {/* Drawer Component */}
                        <Drawer onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent bgColor={isDark ? "cyan.900" : "cyan.50"}>
                                <motion.div
                                    whileTap={{ scale: 0.98 }}>
                                    <DrawerCloseButton
                                        borderRadius='sm'
                                        border='1px'
                                        color={isDark ? "cyan.200" : 'cyan.600'} />
                                </motion.div>
                                <DrawerBody>
                                    <Stack align="center" paddingTop={10}>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            href='/aboutme'>
                                            <motion.div
                                                whileTap={{ scale: 0.9 }}>
                                                <Button
                                                    w="200px"
                                                    href="/aboutme"
                                                    fontSize="md"
                                                    borderRadius="sm"
                                                    colorScheme='cyan'
                                                    variant='outline'>
                                                    &lt;about_me /&gt;
                                                </Button>
                                            </motion.div>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            href='/projects'>
                                            <motion.div
                                                whileTap={{ scale: 0.9 }}>
                                                <Button
                                                    marginTop={4}
                                                    w="200px"
                                                    fontSize="md"
                                                    borderRadius="sm"
                                                    colorScheme='cyan'
                                                    variant='outline'>
                                                    &lt;projects /&gt;
                                                </Button>
                                            </motion.div>
                                        </Link>
                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                </Flex>
            </Box>
        </Container>


    )
}

export default Navbar