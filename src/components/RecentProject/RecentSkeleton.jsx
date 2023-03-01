import { Box, Flex, Skeleton, SkeletonText, useColorMode } from '@chakra-ui/react'
import React from 'react'

const RecentSkeleton = () => {

  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
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
          <Skeleton height='20rem' />
        </Box>
        <Flex w='full' alignSelf='flex-start' gap={3} flexDir='column' p={5}>
          <Box>
            <Skeleton height='20px' />
          </Box>
          <Flex gap={2}>
            <Skeleton w='70px' height='20px' />
            <Skeleton w='70px' height='20px' />
          </Flex>
          <Box>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          </Box>
          <Box mt='4'>
            <Skeleton w={24} h={8} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default RecentSkeleton