import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import {
  Container,
  Text,
  Box,
  SimpleGrid,
  Image,
  useColorMode,
  Badge,
  Icon,
  Link,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useMediaQuery
} from '@chakra-ui/react'
import { FaLink } from "react-icons/fa";
import { motion } from 'framer-motion'

const Project = () => {

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetching Data From SANITY
  useEffect(() => {
    const query = '*[_type == "projects"]'
    client.fetch(query)
      .then((data) => {
        setProjects(data)
        setFilterWork(data)
        setIsLoading(true)
      })
  }, [])

  // Filter Projects
  const handleProjectFilter = (item) => {

    setActiveFilter(item);

    setTimeout(() => {

      if (item === 'All') {
        setFilterWork(projects)
      } else {
        setFilterWork(projects.filter((project) => project.tags.includes(item)))
      }
    }, 500)

  }

  // Change Color For Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery([
    "(min-width: 1000px)",
    "(min-width:588px)"
  ]);


  return (
    <Container paddingTop={10} pb={8} maxW="container.lg">
      <Box align='center'>
        <Text
          fontWeight="bold"
          fontSize={isNotSmallerScreen ? "2xl" : "xl"}>
          &lt;Projects /&gt;
        </Text>
        <Text
          fontSize={isNotSmallerScreen ? "lg" : "md"}
          pt={5}>
          Some of my portfolios:
        </Text>
      </Box>
      {isLoading ? (
        <>
          <Box pt={2} align='center'>
            <Breadcrumb separator="/" >
              {['All', 'Data Science', 'Web Application', 'Python', 'React'].map((item, index) => (
                <BreadcrumbItem pt={5} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}>
                    <BreadcrumbLink
                      padding={1}
                      borderWidth={activeFilter === item ? '3px' : '0px'}
                      onClick={() => handleProjectFilter(item)}>
                      {item}
                    </BreadcrumbLink>
                  </motion.div>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Box>

          <SimpleGrid
            paddingTop={10}
            columns={[1, null, 2]}
            spacing='50px'>
            {filterWork.map((project, index) => (
              <motion.div
                key={project.title + index}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}>
                <Box
                  bgColor={isDark ? "#055460" : "#c3e0e5"}
                  borderRadius='lg'>
                  <Box
                    h="100%"
                    padding={5}
                    borderRadius='lg'
                    boxShadow="xl">
                    <Box
                      align='center'>
                      <Image
                        w='full'
                        h='240px'
                        src={urlFor(project.imgUrl)}
                        // fallbackSrc="https://via.placeholder.com/240"
                        alt='Not Found'
                      />
                    </Box>
                    <Box
                      textAlign="left"
                      paddingTop={3}>
                      <Link
                        _hover={{ color: 'cyan.300', textDecoration: 'underline' }}
                        href={project.projectLink}
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        fontWeight="bold"
                        isExternal>
                        &lt;{project.title}/&gt;<Icon w={3.5} h={3.5} ml='1' as={FaLink} />
                      </Link>
                      <br />
                      <Badge fontSize="0.8rem" variant="subtle" mt='2' colorScheme='green'>
                        {project.tags[0]}
                      </Badge>
                      <Badge
                        fontSize="0.8rem"
                        variant="subtle"
                        mt='2' ml={2}
                        colorScheme={project.tags[1] === 'Python' ? 'yellow' : 'cyan'}>
                        {project.tags[1]}
                      </Badge>
                      <Text
                        fontSize={isNotSmallerScreen ? "lg" : "md"}
                        noOfLines={3}
                        _hover={{ noOfLines: 20 }}
                        lineHeight={8}
                        marginTop={2} >
                        &lt;{project.content}/&gt;
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </>
      ) : (
        <Box pt={8} align='center'>
          <Spinner size='xl' />
        </Box>
      )
      }
      <ScrollToTop />
    </Container >
  )
}

export default Project