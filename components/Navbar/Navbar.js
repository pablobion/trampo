import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  Image,
  Text,
  VStack,
  Flex
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon, Icon } from '@chakra-ui/icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next';
import { useRouter } from 'next/router'
import React, {useRef, useState, useEffect} from 'react'
import DrawerNavbar from '../Drawer/Drawer'
import { RiDashboardLine } from 'react-icons/ri'
import { Container } from '@chakra-ui/react';
import DrawerNavbarNotAuthenticated from '../Drawer/DrawerNotAuthenticated'
import { GrLanguage } from 'react-icons/gr'
import useAuth from '../../src/contexts/AuthContext'
import { AiOutlineCheck } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
import SetLanguage from '../../src/contexts/language';

export default function Navbar() {
  const [activeButton, setActiveButton] = useState('dashboard');

  const { isAuthenticated } = useAuth();

  // Hooks
  const router = useRouter()
  const {allApiWithClientIP} = SetLanguage()


  const { t, i18n } = useTranslation();
  useEffect(() => {
    allApiWithClientIP();
  },[])
  const idioma = i18n.language;
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  }
  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerButtonRef = useRef();
  const { isOpen: isOpenNotAuthenticated, onOpen: onOpenNotAuthenticated, onClose: onCloseNotAuthenticated } = useDisclosure()
  const drawerButtonRefNotAuthenticated = useRef()






  return (
    <HStack id='Navbar' as='nav' height={'70px'}  bg='#000' pt={{ base: !isAuthenticated ? '20px' : '0px', md: !isAuthenticated ? '50px' : '0px' }} >
      <Container maxW={!isAuthenticated && 'container.xl'}  >

        <Box

          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}


        >

          <HStack width={'100%'} >
            {(isAuthenticated || router.route === '/chat' || router.route === '/dashboard') && (

                <HStack id='logo'
              display={
                isAuthenticated ? { base: 'none', md: 'flex' } : { base: 'flex' }}
              onClick={() => router.push('/')} cursor='pointer'>
              <Image
                // width={{base :'160px' , md : '270px'}}
                p={3}
                height={{ base: isAuthenticated ? '100px' : '200px' }}
                objectFit={'contain'}
                loading='lazy'
                src={'/white-logo.png'}
              />

            </HStack>
            )}

            {!isAuthenticated && (
              <>

                <HStack
                  display={{ base: 'none', md: 'flex' }}
                  flexDirection={'row'}
                  width={'100%'}
                  justifyContent={'space-between'}
                >
                  <Box display={'flex'}
                    ml={'5%'}
                    gap={5}

                  >
                    <Heading
                      cursor='pointer'
                      onClick={() => router.push('/pricing')}
                      color={'white'}
                      letterSpacing='0.1px'
                      size={'sm'}
                      fontWeight={'500'}

                    >
                      {t('pricing')}
                    </Heading>


                  </Box>



                  <HStack gap={10} align={'center'}>
                    <Box color={'white'} cursor={'pointer'} maxW={'160px'}>
                      <Popover placement='bottom-end' border={'none'} >
                        <PopoverTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="23px" height="23px" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
                        </PopoverTrigger>
                        <PopoverContent w='max-content' border={'none'} >


                          <PopoverBody backgroundColor={'#333'} color={'white'} fontSize={'13px'} fontWeight={'normal'} border={'none'} borderRadius={'md'} >
                            <VStack>
                              <Flex align={'center'} gap={2}>
                                {idioma === 'pt' ? (<AiOutlineCheck />) : null}
                                <Text onClick={() => handleLanguageChange('pt')}>
                                  Português
                                </Text>
                              </Flex>
                              <Flex>
                                <Box>

                                </Box>
                                {idioma === 'en' ? (<AiOutlineCheck />) : null}
                                <Text onClick={() => handleLanguageChange('en')}>
                                  English
                                </Text>
                              </Flex>
                            </VStack>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>

                    </Box>
                    <Heading
                      cursor='pointer'
                      onClick={() => router.push('/login')}

                      color={'white'}
                      letterSpacing='0.1px'
                      size={'sm'}
                      fontWeight={'500'}

                    >
                      {t('navBar.text1')}
                      </Heading>
                    <Button
                      backgroundColor={"#01FBFB"}
                      color={"#000"}
                      minW={"200px"}
                      py={6}
                      px={8}
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{
                        bg: "#0db9b9",
                        boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                        transition:
                          "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                      }}
                      onClick={() => {
                        router.push("/signupwithemail");
                      }}
                    >
                      {t('start')}
                    </Button>
                  </HStack>
                </HStack>

                <HStack display={{ base: 'flex', md: 'none' }} justifyContent={'end'} flexGrow={'1'}>
                  <Heading
                    cursor='pointer'
                    onClick={() => router.push('/planos')}
                    color={'white'}
                    letterSpacing='0.1px'
                    size={'xs'}
                    fontWeight={'500'}
                    mr={2}

                  >
                    Pricing
                  </Heading>
                  <IconButton
                    display={{ base: 'flex' }}
                    aria-label='Open sidebar menu'
                    ref={drawerButtonRefNotAuthenticated}
                    variant='ghost'
                    onClick={onOpenNotAuthenticated}
                    icon={<HamburgerIcon color={'white'} width={'1.8em'} height={'1.8em'} />}
                  />
                </HStack></>
            )}


            {isAuthenticated && (
              <Box
              >
                {router.route === '/' ?
                  null :
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    paddingX={2}
                    borderRadius={2}
                    color={'white'}
                    fontWeight={600}
                    fontSize={16}
                    cursor='pointer'
                    position={'relative'}
                    ml={{ base: 0, md: 6 }}
                    sx={router.pathname === '/dashboard' ? {
                      _before: {
                        content: '""',
                        position: 'absolute',
                        bottom: '-28px',
                        opacity: 0.8,
                        display: 'inline-block',
                        width: '100%',
                        height: '5px',
                        ml: '-8px',
                        borderRadius: '2px',
                        backgroundColor: activeButton === 'dashboard' ? '#01fbfb' : 'transparent',
                      },
                    } : {}}
                    onClick={() => {
                      router.push('/dashboard');
                      setActiveButton('dashboard');
                    }}
                  >
                    <RiDashboardLine />
                    <Text ml={2}>Dashboard</Text>
                  </Box>
                }
              </Box>
            )}

            {isAuthenticated && (
                <Box>
                  <Box
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'center'}
                      paddingX={2}
                      borderRadius={2}
                      color={'white'}
                      fontWeight={600}
                      fontSize={16}
                      position={'relative'}
                      cursor='pointer'
                      ml={{ base: 0, md: 6 }}
                      sx={{
                        _before: {
                          content: '""',
                          position: 'absolute',
                          bottom: '-28px',
                          opacity: 0.8,
                          display: 'inline-block',
                          width: '100%',
                          height: '5px',
                          ml: '-8px',
                          borderRadius: '2px',
                          backgroundColor: activeButton === 'chat' ? '#01fbfb' : 'transparent',
                        },
                      }}
                      onClick={() =>{
                        router.push('/chat');
                        setActiveButton('chat');
                      }}
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chat-dots" viewBox="0 0 16 16">
                          <path
                              d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          <path
                              d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                        </svg>
                        <Text ml={2}>Chat</Text>
                      </Box>

                </Box>
            )}


          </HStack>

          <HStack id='buttons' alignItems='center' justifyContent='flex-end'>


            {isAuthenticated && (
                <IconButton
                    display={{base: 'flex'}}
                    aria-label='Open sidebar menu'
                    ref={drawerButtonRef}
                    variant='ghost'
                    onClick={onOpen}
                    icon={<HamburgerIcon color={'white'} width={'1.5em'} height={'1.5em'}/>}
                />
            )}


            <DrawerNavbar
                isOpen={isOpen}
                onClose={onClose}
                drawerButtonRef={drawerButtonRef}
            />
            <DrawerNavbarNotAuthenticated
                isOpen={isOpenNotAuthenticated}
                onClose={onCloseNotAuthenticated}
                drawerButtonRef={drawerButtonRefNotAuthenticated}
            />

          </HStack>
        </Box>
      </Container>


    </HStack>
  )
}
