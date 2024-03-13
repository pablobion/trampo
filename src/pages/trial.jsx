import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftElement,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Progress,
    Select,
    Stack,
    Switch,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import Head from "next/head";
  import {useEffect, useState} from "react";
  
  import { useRouter } from "next/router";
  import { useTranslation } from 'react-i18next';
  import SetLanguage from "../contexts/language";
  import { PhoneIcon } from "@chakra-ui/icons";
  import { FaEllipsisV } from 'react-icons/fa'
  import OnlyHotmart from "../../components/OnlyHotmart";
  import { IoIosArrowBack } from "react-icons/io";
  import { SlOptionsVertical } from "react-icons/sl";
import BillModal from "../../components/BillModal";
  
  export default function Dashboard() {
    const router = useRouter()
      const { allApiWithClientIP } = SetLanguage()
      const { t, i18n } = useTranslation();
  
    const { 
      isOpen: onlyHotmart_isOpen,
      onOpen: onlyHotmart_onOpen,
      onClose: onlyHotmart_onClose
     } = useDisclosure()


      useEffect(() => {
          allApiWithClientIP();
      }, [])
    return (
      <main style={{background:'#F5F6F8'}}>
        <BillModal isOpen={onlyHotmart_isOpen} onOpen={onlyHotmart_onOpen} onClose={onlyHotmart_onClose} variant={2}/>
        <Grid
          margin={"auto"}
          templateAreas={{
            base: `
                    "top top"
                    "side side"
                    "body body"
                    `,
            md: `
                    "top top"
                    "side body"
                    "side body"
                    "side body"`,
          }}
          h="100%"
          maxWidth={"1280px"}
          gridTemplateColumns={"1.4fr 5fr"}
          gap={2}
          p={10}
          color={'#000'}
          >
            <GridItem
              area={"top"}
              display={"flex"}
              justifyContent={"space-between"}
              mb={10}
            >
              <Flex alignItems={'center'} mt={5} gap={6}>
              <IoIosArrowBack fontSize={'20px'} color={'#4B4B4B'} />
                <Text fontSize="2xl" fontWeight={"500"} color={'#4B4B4B'}>
                    {t('trial.text1')}
                </Text>
              </Flex>
    
              <Button onClick={() => logout()} mt={5} w={"100px"} bg='#E4E6EB' >
                  {t('trial.text2')}
              </Button>
            </GridItem>
    
            <GridItem area={"side"} display={"flex"} justifyContent={"start"} mt={{base : 0 , md : 10}}   >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"stretch"}
                textAlign={"left"}
                w='full'
                pr={{base : 0 , md : 5}}
              >
                <Box
                  minWidth={"200px"}
                  mt={3}
                 
                  fontSize={"xl"}
                  fontWeight={"500"}
                  borderRadius={4}
                  mb={2}
                  p={2.5}
                  pl={4}
                  sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => router.push("/profile")}
                >
                    {t('trial.text3')}
                </Box>
    
                <Box
               
                  minWidth={"200px"}
                  fontSize={"xl"}
                  fontWeight={"500"}
                  borderRadius={4}
                  backgroundColor={"#E4E4E4"}
  
                  mb={2}
                  p={2}
                  pl={4}
                  sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => router.push("/billing")}
                >
                    {t('trial.text4')}
                </Box>
    
                <Box
                
                  minWidth={"200px"}
                  fontSize={"xl"}
                  fontWeight={"500"}
                  borderRadius={4}
                  mb={2}
                  p={2}
                  pl={4}
                  sx={{
                    _hover: {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => router.push("/plans")}
                >
                    {t('trial.text5')}
                </Box>
              </Box>
            </GridItem>
    
  
          <GridItem area={"body"} height={"100%"} bg="#ffff" borderRadius={14}>
            <Box p={2}>
              <Box
                display={"flex"}
                flexDirection={{base : 'row' , md :'row'}}
                gap={1}
                justifyContent={"space-between"}
                alignContent={"center"}
                mt={10}
                p={{base : 5 , md :10}}
                py={0}
              >
                <Box display={"flex"} flexDirection={"row"} alignItems={'center'} gap={3}>
                  <Text fontSize={{base : '2xl', md : "3xl"}} fontWeight={"semibold"}>
                      {t('trial.text6')}
                  </Text>
                  <Badge
                    h={"16px"}
               
                    w={50}
                    fontSize={'2xs'}
                    textAlign={"center"}
                    borderRadius={10}
                    backgroundColor={"blackAlpha.900"}
                    color={"#fff"}
                  >
                      {t('trial.text7')}
                  </Badge>
                </Box>
  
                {/* DIV IMAGINARIA*/}
                  <Box></Box>
                  <Box></Box>
                  <Box></Box>
                {/* DIV IMAGINARIA*/}
  
  
                <Box display={'flex'} mt={-4} alignSelf={'end'} gap={2}>
                  <Text fontSize={{base : '2xl' , md : '4xl'}} fontWeight={'semibold'}>R$ 0</Text>
                  <Text mt={{base : 3 , md : 6}}
                  fontWeight={'normal'}
                  color={'#4B4B4B'}
                  >{t('trial.text8')}</Text>
                </Box>
              </Box>
  
              {/* LIMITE ATINGIDO */}
              <Box p={10} mb={-5}>
                <Text 
                color={'blackAlpha.600'}
                fontWeight={'semibold'}
                my={2}
                >40 {t('trial.text9')} / {t('trial.text10')} 500</Text>
                <Progress 
                
                borderRadius={3}
                value={80} />
              </Box>
  
              <Divider borderColor={"#CFCFCF"} mt={4} marginBottom={{base: 4, md: 2}} />
  
              {/* UPGRADE - CANCELAR ASS */}
              <Box
              
              p={{base : 5  , md : 10}}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              >
  <Flex alignItems={'center'} gap={2}>
  <Popover>
    <PopoverTrigger>
      <Button><SlOptionsVertical fontSize={'20px'} /></Button>
    </PopoverTrigger>
  
    <Portal>
      <PopoverContent background={'white'} width={'240px'} ml={{base : '110px', md : '220px'}}>
      
        <Button border={'1px solid gray'}
  borderColor={'blackAlpha.200'}
  fontWeight={'normal'}
  color={'#000'}
  onClick={onlyHotmart_onOpen}
  >
Apply Activation ID
  </Button>
      </PopoverContent>
    </Portal>
  </Popover>
  
  
  </Flex>
              <Popover isLazy >
                <PopoverTrigger>
                  <Button variant={'ghost'}>
                      <FaEllipsisV />
                  </Button>
                </PopoverTrigger>
                <PopoverContent color="black">
                    <Button 
  
                    onClick={onlyHotmart_onOpen}
                    variant={'outline'}
                    color={'#000'}
                   >Cancel subscription</Button>
                </PopoverContent>
              </Popover>
  
  
  
                <Button
                 _hover={{
                  bg: "#0db9b9",
                  boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                  transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                }}
                backgroundColor={'#01FBFB'}
                color={'#000'}
                w={200}>{t('trial.text11')}</Button>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </main>
    );
  }
  
  