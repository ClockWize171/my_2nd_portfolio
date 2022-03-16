import React, { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'
import {
  Container,
  Text,
  Box,
  SimpleGrid,
  Image,
  useColorMode,
  Badge,
  Icon,
  Link
} from '@chakra-ui/react'
import { FaLink } from "react-icons/fa";
import { motion } from 'framer-motion'

const Project = () => {

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

      <SimpleGrid
        paddingTop={10}
        columns={[1, null, 2]}
        spacing='50px'>
        {isLoading ? (
          <>
            {projects.map((project, index) => (
              <motion.div
                key={project.title + index}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <Box
                  bgColor={isDark ? "#055460" : "#dcf2f2"}
                  borderRadius='lg'>
                  <Box
                    padding={5}
                    borderRadius='lg'
                    boxShadow="xl">
                    <Box
                      align='center'>
                      <Image
                        w='full'
                        h='240px'
                        src={urlFor(project.imgUrl)}
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
          </>
        ) : (
          <>
            <Box>
              <Text textAlign='center' fontSize='4xl' fontWeight='semibold'>
                Loading...
              </Text>
            </Box>
          </>
        )}
      </SimpleGrid>
    </Container>
  )
}

export default Project