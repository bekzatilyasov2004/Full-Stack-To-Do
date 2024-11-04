import { Box, Flex, Avatar, Button, Text } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout =  () => {

        navigate('/login');

    };

    return (
        <Flex
            p={4}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box>
                <Text fontWeight={400} fontSize={{ base: '20px', md: '30px' }}>🎯 Daily Tasks</Text>
            </Box>
            <Flex alignItems={'center'}>
                <Avatar size={{base: 'sm', md: 'md'}}  mr={4} />
                <Button
                 as={NavLink}
                colorScheme={'teal'}
                background={'black'}
                borderRadius={'5px'}
                h={'35px'}
                onClick={handleLogout}>
                    Logout
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;
