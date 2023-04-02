import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { ProjectDetail } from '../../components';
import {
  Container,
  Text,
  Box,
  SimpleGrid,
  useColorMode,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useMediaQuery,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Project = ({ title }) => {

  useEffect(() => { document.title = title }, [title])

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetching Data From SANITY
  useEffect(() => {
    const query = '*[_type == "projects"]'
    client.fetch(query)
      .then((data) => {
        const dateSorted = data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
        setProjects(dateSorted)
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
    }, 300)

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
    <Container paddingTop={10} pb={8} maxW="container.xl">
      <Box align='center'>
        <Text
          fontWeight="bold"
          fontSize={isNotSmallerScreen ? "2xl" : "xl"}>
          Project.
        </Text>
        <Text
          fontSize={isNotSmallerScreen ? "lg" : "md"}
          pt={5}>
          Some of my portfolios:
        </Text>
        <Text
          fontWeight='semibold'
          fontSize={['sm', 'md']}
          pt={5}>
          All repositories of these projects can be found in my Github account.
        </Text>
      </Box>
      {isLoading ? (
        <>
          <Box pt={5} align='center'>
            <Breadcrumb separator="|" >
              {['All', 'Data Science', 'Web Application', 'Python', 'React'].map((item, index) => (
                <BreadcrumbItem key={index} mt={[5, 0, 0]}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}>
                    <BreadcrumbLink
                      _hover={{ textDecor: 'none' }}
                      fontWeight={activeFilter === item ? 'bold' : 'regular'}
                      padding={1.5}
                      borderWidth={activeFilter === item ? '2px' : '0px'}
                      borderRadius="sm"
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
            columns={[1, 2, 2, 3]}
            spacing='50px'>
            {filterWork.map((project, index) => (
              <ProjectDetail
                key={index}
                project={project}
                isDark={isDark}
                isNotSmallerScreen={isNotSmallerScreen}
                urlFor={urlFor} />
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
    </Container>
  )
}

export default Project