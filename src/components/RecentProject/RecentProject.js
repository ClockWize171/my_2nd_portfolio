import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  HStack,
  Image,
  Badge,
  Button,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
import fallbackImg from '../../assets/images/placeholder.webp'
import { client, urlFor } from '../../client';
import { FaGithub, FaLink } from 'react-icons/fa';
import FramerCarousel from '../FramerCarousel/FramerCarousel';
import RecentSkeleton from './RecentSkeleton';

const RecentProject = () => {
  const [recentProject, setRecentProject] = useState([]);
  const [loading, setLoading] = useState(true);

  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  useEffect(() => {
    const ac = new AbortController();
    const query = '*[_type == "projects"]'
    client.fetch(query)
      .then((data) => {
        const dateSorted = data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
        const mostRecentData = dateSorted.slice(0, 3);
        setRecentProject(mostRecentData);
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
    return () => ac.abort(); // Abort both fetches on unmount
  }, [])

  return (
    <Box
      w='full'
      mt={10}
    >
      <Text
        fontSize={['xl', 'xl', '2xl']}
        fontWeight="bold"
        textAlign='center'>
        My Recent Projects.
      </Text>
      {loading ?
        <RecentSkeleton />
        :
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>
          <FramerCarousel>
            {recentProject.map((data, index) => (
              <motion.div key={index}>
                <Box
                  w={['20rem', '20rem', '50rem']}
                  mt={5}
                  boxShadow='lg'
                  ml={5}
                  bgColor={isLight ? '#c3e0e5 ' : '#055460'}
                  borderRadius='lg'
                >
                  <Flex flexDir={['column', 'column', 'row']}>
                    <Box w='full' p={[0, 0, 5]}>
                      <Image
                        pointerEvents='none'
                        borderRadius='md'
                        w='full'
                        h={['13rem', '20rem']}
                        objectFit='cover'
                        src={urlFor(data.imgUrl)}
                        fallbackSrc={fallbackImg}
                        alt='project-image'
                      />
                    </Box>
                    <Flex w='full' alignSelf='flex-start' gap={3} flexDir='column' p={5}>
                      <Text fontSize='xl' fontWeight='bold'>
                        {data.title}
                      </Text>
                      <HStack gap={2}>
                        {data.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            fontSize="0.8rem"
                            variant="subtle"
                            colorScheme={tag === 'React' ? 'blue' : 'green'}>
                            {tag}
                          </Badge>
                        ))}
                      </HStack>
                      <Text h={['100px', '150px']} overflowY='auto'>
                        {data.content}
                      </Text>
                      <Flex gap={3}>
                        <Button
                          onClick={() => window.open(data.githubLink)}
                          borderRadius='sm'
                          leftIcon={<FaGithub />}>
                          Github
                        </Button>
                        {data.projectLink !== "false" && (
                          <Button
                            onClick={() => window.open(data.projectLink)}
                            borderRadius='sm'
                            leftIcon={<FaLink />}>
                            Demo
                          </Button>
                        )}
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </motion.div>
            ))
            }
          </FramerCarousel>
        </motion.div>
      }

    </Box>
  )
}

export default RecentProject