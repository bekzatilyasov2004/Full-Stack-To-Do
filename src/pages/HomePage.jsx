"use client"

import { Box, Button, Image, Text } from '@chakra-ui/react';
import PageHeader from '../components/page-components/PageHeader';
import { motion } from 'framer-motion';

const MotionImage = motion.create(Image);

const HomePage = () => {
    return (
        <>
            <PageHeader link={'/login'} txt={'Sign-in'} />
        <Box w={'100%'} h={'100vh'} overflow={'hidden'} display={'flex'} justifyContent={'center'} alignItems={'center'} position="relative">
            <MotionImage
                src="/mount.jpg" 
                alt="Background"
                objectFit="cover" 
                width="100%"
                height="100%"
                position="absolute"
                top={0}
                left={0}
                initial={{ opacity: 0, scale: 1 }} 
                animate={{ opacity: 1, scale: 1.2 }} 
                transition={{ duration: 1 }} 
                zIndex={0} 
            />
            
            <Box display={'flex'} flexDir={'column'} alignItems={'center'} maxW={'1024px'} zIndex={1}>
                <Box w={'100%'} h={'80vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box p={10} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'space-around'} textAlign={'center'}>
                        <Text fontWeight={500} fontSize={{ base: '40px', md: '100px' }} color="white">Daily Tasks</Text>
                        <Text fontWeight={400} fontSize={{ base: '15px', md: '25px' }} color="white">
                            After a stroke, it can take time to figure out how to do the tasks that make up daily life. Here are some tips. Find useful services and connect with others living with heart disease or stroke.
                        </Text>
                        <Button 
                            mt={5} 
                            borderRadius={'5px'} 
                            w={'180px'} 
                            h={'50px'} 
                            colorScheme={'teal'} 
                            background={'black'}
                            onClick={() => console.log("Get started clicked!")}
                        >
                            Get started
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}

export default HomePage;
