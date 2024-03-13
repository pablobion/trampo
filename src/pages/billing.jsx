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

import { useEffect, useState } from "react";
import useAuth from "../contexts/AuthContext";
import GetPlans from "../contexts/Plans";
import { useRouter } from "next/router";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaEllipsisV } from 'react-icons/fa'
import OnlyHotmart from "../../components/OnlyHotmart";
import BillModal from "../../components/BillModal";
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import Cookies from "js-cookie";

import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import Link from "next/link";
export default function Dashboard() {
  const { logout, user } = useAuth();
  const { plan, get_plan } = GetPlans();
  const router = useRouter();
  const { allApiWithClientIP } = SetLanguage()
  const { t, i18n } = useTranslation();
  const token = Cookies.get('token')
  const {
    isOpen: onlyHotmart_isOpen,
    onOpen: onlyHotmart_onOpen,
    onClose: onlyHotmart_onClose
  } = useDisclosure();
  const {
    isOpen: billing_isOpen,
    onOpen: billing_onOpen,
    onClose: billing_onClose
  } = useDisclosure();
  useEffect(() => {
    allApiWithClientIP();

    if (user && user.plan_id && !plan) {
      get_plan(user.plan_id, token);
    }
  }, [user, get_plan, plan, token]);
  return (
      <main style={{ background: '#F5F6F8' }}>
        <OnlyHotmart isOpen={onlyHotmart_isOpen} onOpen={onlyHotmart_onOpen} onClose={onlyHotmart_onClose} variant={2} />
        <BillModal isOpen={billing_isOpen} onOpen={billing_onOpen} onClose={billing_onClose} variant={2} />
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
            <Link href='/dashboard'>
              <Flex alignItems={'center'} mt={5} gap={6} cursor={'pointer'} >
                <IoIosArrowBack fontSize={'20px'} color={'#4B4B4B'} />
                <Text fontSize="2xl" fontWeight={"500"} color={'#4B4B4B'}>
                  {t('general.text1')}
                </Text>
              </Flex>
            </Link>
            <Button onClick={() => logout()} mt={5} w={"100px"} bg='#E4E6EB' >
              {t('billing.text2')}
            </Button>
          </GridItem>

          <GridItem area={"side"} display={"flex"} justifyContent={"start"} mt={{ base: 0, md: 10 }}   >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"stretch"}
                textAlign={"left"}
                w='full'
                pr={{ base: 0, md: 5 }}
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
                {t('billing.text3')}
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
                {t('billing.text4')}
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
                {t('billing.text5')}
              </Box>
            </Box>
          </GridItem>


          <GridItem area={"body"} height={"100%"} bg="#ffff" borderRadius={14}>
            <Box p={2}>
              <Box
                  display={"flex"}
                  flexDirection={{ base: 'row', md: 'row' }}
                  gap={1}
                  justifyContent={"space-between"}
                  alignContent={"center"}
                  mt={10}
                  p={{ base: 5, md: 10 }}
                  py={0}
              >
                <Box display={"flex"} flexDirection={"row"} alignItems={'center'} gap={3}>
                  <Text fontSize={{ base: '2xl', md: "3xl" }} fontWeight={"semibold"}>
                    {plan && plan.name}
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
                    {t('billing.text6')}
                  </Badge>
                </Box>

                {/* DIV IMAGINARIA*/}
                <Box></Box>
                <Box></Box>
                <Box></Box>
                {/* DIV IMAGINARIA*/}


                <Box display={'flex'} mt={-4} alignSelf={'end'} gap={2}>
                  <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'semibold'}>R$ {plan && plan.plan_price.toFixed(2)}</Text>
                  <Text mt={{ base: 3, md: 6 }}
                        fontWeight={'normal'}
                        color={'#4B4B4B'}
                  >{t('billing.text7')}</Text>
                </Box>
              </Box>

              {/* LIMITE ATINGIDO */}
              <Box p={10} mb={-5}>
                <Text
                    color={'blackAlpha.600'}
                    fontWeight={'semibold'}
                    my={2}
                >{user && user.quantity_words} {t('billing.text8')} / {t('billing.text9')} {plan && plan.plan_word_limit}</Text>
                <Progress
                    bg={'#D9DADD'}
                    borderRadius={3}
                    value={user && plan && (user.quantity_words * 100) / plan.plan_word_limit} />
              </Box>

              <Divider borderColor={"#CFCFCF"} mt={4} marginBottom={{ base: 4, md: 2 }} />

              {/* UPGRADE - CANCELAR ASS */}
              {user && user.language === "pt" ? (<Box

                  p={{ base: 5, md: 10 }}
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
                      <PopoverContent background={'white'} width={'240px'} ml={{ base: '110px', md: '220px' }}>

                        <Button border={'1px solid gray'}
                                borderColor={'blackAlpha.200'}
                                fontWeight={'normal'}
                                color={'#000'}
                                onClick={billing_onOpen}
                        >

                          Apply activation ID
                        </Button>
                      </PopoverContent>
                    </Portal>
                  </Popover>


                </Flex>
                <Popover



                >
                  <PopoverTrigger>
                    <Button variant={'ghost'}>
                      <FaEllipsisV />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent onClick={billing_onOpen} color="black">
                    <Button


                        variant={'outline'}
                        color={'#000'}
                    >Apply activation ID</Button>
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
                    w={200}>{t('billing.text10')}</Button>
              </Box>) : (<Box

                  p={{ base: 5, md: 10 }}
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
                      <PopoverContent background={'white'} width={'240px'} ml={{ base: '110px', md: '220px' }}>

                        <Button border={'1px solid gray'}
                                borderColor={'blackAlpha.200'}
                                fontWeight={'normal'}
                                color={'#000'}
                                onClick={onlyHotmart_onOpen}
                        >

                          Cancel subscription
                        </Button>
                      </PopoverContent>
                    </Portal>
                  </Popover>


                </Flex>
                <Popover



                >
                  <PopoverTrigger>
                    <Button variant={'ghost'}>
                      <FaEllipsisV />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent onClick={onlyHotmart_onOpen} color="black">
                    <Button


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
                    w={200}>{t('billing.text10')}</Button>
              </Box>)}

            </Box>
          </GridItem>
        </Grid>
      </main>
  );
}

