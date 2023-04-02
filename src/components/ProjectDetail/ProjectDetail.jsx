import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  IconButton,
  Image,
  Link,
  Text
} from '@chakra-ui/react'
import fallbackImg from '../../assets/images/placeholder.webp'
import { FaGithub, FaLink } from 'react-icons/fa'

const ProjectDetail = ({ project, isDark, isNotSmallerScreen, urlFor, index }) => {
  return (
    <motion.div
      key={project.title + index}
      viewport={{ once: true }}
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
              fallbackSrc={fallbackImg}
              alt='Not Found'
            />
          </Box>
          <Box
            textAlign="left"
            paddingTop={3}>
            <Text
              fontSize={isNotSmallerScreen ? "xl" : "lg"}
              fontWeight="bold">
              {project.title}
            </Text>
            <Box>
              <Badge
                fontSize="0.8rem"
                variant="subtle" mt='2'
                colorScheme='green'>
                {project.tags[0]}
              </Badge>
              <Badge
                fontSize="0.8rem"
                variant="subtle"
                mt='2' ml={2}
                colorScheme={project.tags[1] === 'Python' ? 'yellow' : 'cyan'}>
                {project.tags[1]}
              </Badge>
            </Box>
            <Box mt={2}>
              <Link href={project.githubLink} isExternal>
                <IconButton
                  border='1px'
                  aria-label='Link Icon'
                  variant="outline"
                  borderRadius='full'
                  icon={<FaGithub />} />
              </Link>
              {project.projectLink !== "false" && (
                <Link href={project.projectLink} isExternal>
                  <IconButton
                    ml={3}
                    border='1px'
                    aria-label='Link Icon'
                    variant="outline"
                    borderRadius='full'
                    icon={<FaLink />} />
                </Link>
              )}
            </Box>
            <Accordion pt={5} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: isDark ? 'cyan.800' : 'cyan.100' }}>
                    <Box flex='1' textAlign='left'>
                      Read More about <strong>this project</strong>.
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text lineHeight={8}>
                    {project.content}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default ProjectDetail