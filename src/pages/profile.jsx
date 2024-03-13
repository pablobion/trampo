import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select, 
  Stack,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";

import {useEffect, useState} from "react";

import { useRouter } from "next/router";
import { PhoneIcon } from "@chakra-ui/icons";
import useAuth from "../contexts/AuthContext";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormEdit } from "react-icons/gr";
import Cookies from "js-cookie";

import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import Link from "next/link";
export default function Dashboard() {
  const { logout, user, delete_accout} = useAuth();
  const token = Cookies.get("token")
  const router = useRouter();
  const { allApiWithClientIP } = SetLanguage()
  const { t, i18n } = useTranslation();

  useEffect(() => {
    allApiWithClientIP();
  }, [])
  return (
    <main style={{ background: "#F5F6F8" }}>
      <Grid
        margin={"auto"}
        templateAreas={{
          base: `
                "top top"
                "side side"
                "body body"
                "info info"`,
          md: `
                "top top"
                "side body"
                "side body"
                "side info"`,
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
            {t('general.text2')}
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
              backgroundColor={"#E4E4E4"}
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
              {t('general.text3')}
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
              onClick={() => router.push("/billing")}
            >
              {t('general.text4')}
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
              {t('general.text5')}
            </Box>
          </Box>
        </GridItem>

        <GridItem area={"body"} height={"100%"} bg="#ffff" borderRadius={14} >
          <Box p={2}>
            <Stack spacing={6} mt={2} ml={5}>
              <Heading mt={7} mb={4} fontSize={'2xl'} fontWeight={"semibold"}>
                {t('general.text6')}
              </Heading>
              <Box display={'inline'} w='max-content'  pos={'relative'}>
                <Avatar size={"xl"} src={"https://picsum.photos/200/300"} />
                <Box
  bg='#E4E6EB'
  width={'20px'}
  height={'20px'}
  borderRadius={'50%'}
  display="flex"
  alignItems="center"
  justifyContent="center"
  pos={'absolute'}
  bottom={'0px'}
  right={'0px'}


>
<GrFormEdit style={{position:'absolute' , top:'50%' , left:'50%' , transform:'translate(-50%, -50%)'}} />
</Box>
              </Box>

              <Stack spacing={3}>
                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text7')}</Text>
                  <InputGroup>
                    <Input
                      value={user && user.name}
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>
                {/* <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text8')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box> */}

                <Box maxWidth={{ base: "95%", md: "400px" }} mt={5}>
                  <Text fontSize={'14px'}>{t('general.text9')} </Text>
                  <Text fontWeight={"400"} my={3} fontSize={'md'}>{user && user.email}</Text>
                </Box>

                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text10')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>


                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'} >{t('general.text11')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>


                <Divider
                  borderColor={"blackAlpha.200"}
                  p={0.5}
                  w={"97%"}
                  margin={"auto"}
                />
                <Text fontSize={"2xl"} fontWeight={"500"}>
                  {t('general.text11')}
                </Text>

                <Stack spacing={3}>
                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text12')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>


                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text13')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>


                <Box maxWidth={{ base: "95%", md: "400px" }}>
                  <Text fontSize={'15px'} ml={1} fontWeight={'semibold'}>{t('general.text14')}</Text>
                  <InputGroup>
                    <Input
                      mt={2}
                      p={2}
                      borderRadius={"5px"}
                      width={"100%"}
                      size="md"
                      fontWeight={"semibold"}
                      borderColor="gray.300"
                      _hover={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                      _focus={{
                        borderColor: "#01FBFB",
                        boxShadow: "0 0 0 2px rgba(0 , 251 , 251 , 0.7)",
                      }}
                    />
                  </InputGroup>
                </Box>

                  <Box
                    w={"100%"}
                    display={"flex"}
                    justifyContent={{ base: "end", md: "end" }}
                    px={{base : 4 , md :10}}
                    py={2}
                  >
                    <Button
                      w={"200px"}
                      backgroundColor={"#01FBFB"}
                      color={"#000"}
                      py={6}
                      px={8}
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{
                        bg: "#0db9b9",
                        boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                        transition:
                          "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                      }}
                    >
                      {t('general.text15')}
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </GridItem>

        <GridItem area={"info"} bg="#ffff" px={10} borderRadius={14}>
          <Box
            minHeight={"130px"}
            display={"flex"}
            flexDirection={{base : 'column' , md :'row'}}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={{base : 1,md:0}}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"500"}>
                {t('general.text16')}
              </Text>
              <Text fontSize={"x-small"} fontWeight={"hairline"}>
                {t('general.text17')}
              </Text>
            </Box>

            {/*DIV SEPARAR */}
            <Box></Box>
            <Box></Box>

            <Button 
                      onClick={() => delete_accout(token)}
                      backgroundColor={"gray.200"}
                      color={"#000"}
                      py={6}
                      px={8}
                     
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{
                     
                        boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                        transition:
                          "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                      }}>{t('general.text18')} </Button>
          </Box>
        </GridItem>
      </Grid>
    </main>
  );
}
