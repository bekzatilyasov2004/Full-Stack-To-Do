import { Box, Button, Input, Text } from '@chakra-ui/react';
import PageHeader from '..//components/page-components/PageHeader';
import { NavLink, useNavigate} from 'react-router-dom';


const RegisterPage = () => {
    const nav = useNavigate()

   const go = () =>{
    nav('/dashboard')
   }

    return (
        <Box w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} maxW={'1024px'}>
                <PageHeader link={'/login'} txt={'Sign-in'} />
                <Box w={'100%'} mt={'80px'} p={5} h={'80vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box 
                        p={5} 
                        display={'flex'} 
                        flexDir={'column'} 
                        gap={{ base: '1', md: '2' }} 
                        w={'100%'} 
                        maxW={'623px'} 
                        borderRadius={'10px'} 
                        border={'1px solid #22222240'} 
                        textAlign={'start'}
                    >
                        <Text fontWeight={400} fontSize={{ base: '20px', md: '35px' }}>Sign Up</Text>
                        <Text fontWeight={275} fontSize={{ base: '15px', md: '20px' }}>Nice to meet you! Enter your details to register.</Text>
                        
                        <label>Your Name</label>
                        <Input 
                            
                            placeholder="Enter your name" 
                        />

                        <label>Your Email</label>
                        <Input 
                            type="email"
                           
                            placeholder="Enter your email" 
                        />

                        <label>Your Password</label>
                        <Input 
                            type="password" 
                           
                            placeholder="Enter your password" 
                        />


                        <Box 
                            gap={2} 
                            display={'flex'} 
                            justifyContent={'center'} 
                            alignItems={'center'} 
                            flexDir={'column'} 
                            mt={10} 
                            textAlign={'center'}
                        >
                            <Button 
                                mt={5} 
                                borderRadius={'5px'} 
                                w={'180px'} 
                                h={'50px'} 
                                colorScheme={'teal'} 
                                background={'black'}
                                onClick={go}
                            >
                                Sign-Up
                            </Button>
                            <NavLink to={'/login'}>Sign In</NavLink>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterPage;
