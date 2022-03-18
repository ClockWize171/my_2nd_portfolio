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
  Spinner
} from '@chakra-ui/react'
import { FaLink } from "react-icons/fa";
import { motion } from 'framer-motion'

const Project = () => {

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetching Data From SANITY
  useEffect(() => {
    const query = '*[_type == "projects"]'
    client.fetch(query)
      .then((data) => {
        setProjects(data)
        setIsLoading(true)
      })
  }, [])

  // Change Color For Mode 
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Container paddingTop={10} pb={8} maxW="container.lg">
      <Box align='center'>
        <Text
          fontWeight="bold"
          fontSize="2xl">
          &lt;Projects /&gt;
        </Text>
        <Text pt={5}>
          Some of my portfolios:
        </Text>
      </Box>
      {isLoading ? (
        <SimpleGrid
          paddingTop={10}
          columns={[1, null, 2]}
          spacing='50px'>
          {projects.map((project, index) => (
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
                      fallbackSrc="https://via.placeholder.com/240"
                      alt='Not Found'
                    />
                  </Box>
                  <Box
                    paddingTop={3}>
                    <Link
                      _hover={{ color: 'cyan.300', textDecoration: 'underline' }}
                      href={project.projectLink}
                      fontSize="xl"
                      fontWeight="bold"
                      isExternal>
                      &lt;{project.title}/&gt;<Icon w={3.5} h={3.5} ml='1' as={FaLink} />
                    </Link><br />
                    <Badge fontSize="0.8rem" variant="subtle" mt='2' colorScheme='green'>
                      {project.tags}
                    </Badge>
                    <Text
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
      ) : (
        <Box pt={8} align='center'>
          <Spinner size='xl' />
        </Box>
      )}
      <ScrollToTop/>
    </Container>
  )
}

export default Project