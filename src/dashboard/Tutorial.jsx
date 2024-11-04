import { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack, List, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const images = [
  'https://via.placeholder.com/600x200.webp?text=Image+1',
  'https://via.placeholder.com/600x200.webp?text=Image+2',
  'https://via.placeholder.com/600x200.webp?text=Image+3',
];

const MotionBox = motion.create(Box);

const Tutorial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={5}>
    
      <MotionBox overflow="hidden" mb={5}>
        <Box position="relative" height="200px">
          {images.map((src, index) => (
            <MotionBox
              key={index}
              position="absolute"
              top={0}
              left={`${(index - currentIndex) * 100}%`} 
              width="100%"
              height="100%"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundImage={`url(${src})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Tutorial Image ${index + 1}`}
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0 }} // Cover the container
              />
            </MotionBox>
          ))}
        </Box>
      </MotionBox>

      {/* Tutorial Content */}
      <VStack spacing={4} align="start">
        <Heading as="h1" size="lg">Dasturdan Foydalanish Qo'llanmasi</Heading>
        
        <Text>
          Ushbu dastur sizga vazifalarni boshqarish va rejalashtirish imkonini beradi. Quyida dasturimizdan qanday foydalanish haqida ko'rsatmalar keltirilgan.
        </Text>

        <Heading as="h2" size="md">Funktsiyalar</Heading>
        <List spacing={2}>
          <ListItem>🔹 <strong>Bugungi Vazifalar:</strong> Har kuni bajarilishi kerak bo'lgan vazifalarni ko'rishingiz mumkin.</ListItem>
          <ListItem>🔹 <strong>Haftalik Vazifalar:</strong> Haftalik vazifalarni rejalashtirish va kuzatish uchun bu bo'limdan foydalaning.</ListItem>
          <ListItem>🔹 <strong>Oylik Vazifalar:</strong> Oylik vazifalarni belgilash va ularni nazorat qilish imkoniyati.</ListItem>
        </List>
      </VStack>
    </Box>
  );
};

export default Tutorial;
