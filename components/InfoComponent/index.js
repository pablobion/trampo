import { useState } from "react";
import { Box, HStack, Text, Image, Button, Container, List, ListItem } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";

export default function Info({ alternate = false, button = false, title = "", points  , description }) {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <Container maxW={'container.xl'} my={'50px'}>
      <Box
        display={'flex'}
        padding={'20px 0px'}
        flexDirection={{ base: 'column-reverse', md: alternate ? 'row-reverse' : 'row' }}
        alignItems={{ base: 'center', md: '' }}
        justifyContent={{ base:points ? 'start'  : 'center', md: 'space-between' }}
      >
        <Box mt={{base : 5 , md : 0}}>
          <Text
            fontSize={{ base: '4xl', md: '5xl' }}
            lineHeight={{ base: '42px', md: '42px' }}
            mb={2}
            maxW={{ base: '100%', md: '495px' }}
            textAlign={{ base: points ? 'start':'center', md: 'left' }}
            className="ff_league"

          >
            {title}
          </Text>

{
  !description && points && 
<Box >
<List ml={5} mt={10}>
{
  points.map((point)=>{
    return (<ListItem listStyleType={'initial'} my={4}>
    {point}
    </ListItem>)
  })
}
</List>
</Box>
}

         {
          description && !points &&  <Text
          fontWeight={'400'}
          w={{ base: '95%', md: '400px' }}
          mt={{ base: '5px', md: '10px' }}
          textAlign={{ base: points ? 'start':'center', md: 'left' }}
          fontSize={'sm'}
        >
          {description}
        </Text>
         }
          {button && (
            <Box display={'flex'} justifyContent={{ base: 'start', md: 'start' }} alignItems={'center'} mt={'40px'}>
              <Button
                backgroundColor={'#01FBFB'}
                color={'#000'}
                py={6}
                px={8}
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{
                
                  bg: "#0db9b9",
                  boxShadow: '0 0 10px rgba(1, 251, 251, 0.7)',
                  transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s'
                }}
                minW={'220px'}
                onClick={() => { router.push('/planos') }}
              >
               {t('start')}
              </Button>
            </Box>
          )}
        </Box>

      {
        points &&   <Box
     
        width={{ base: '100%', md: '600px' }}
        mb={{ base: '20px', md: '70px' }}
        mt={{ base: '20px', md: '20px' }}
       
       
      >
      <Box className="phone-bg" margin={{base : 'unset' , md : 'auto'}}>
      <div className="container-video">

<div className="wrap-video">
<iframe class="video-iframe"
src="https://www.youtube.com/embed/lAk5FKl_u9k?si=ewWFqoYWo3hZv2v9"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
</div>
      </Box>

      </Box>
      }

    {
      !points &&     <Box
      height={{ base: '230px', md: '360px' }}
      width={{ base: '100%', md: '500px' }}
      mb={{ base: '20px', md: '70px' }}
      mt={{ base: '20px', md: '20px' }}
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        borderRadius={10}
        src="/workingman.png"
        alt="Imagem"
        objectFit="cover"
        margin="auto"
        height={'100%'}
        width={'100%'}
        transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
        transition="transform 0.3s ease-in-out"
      />
    </Box>
    }
      </Box>
    </Container>
  );
}
