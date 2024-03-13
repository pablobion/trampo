import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";

import { useState } from "react";

import { useRouter } from 'next/router'
import { PhoneIcon } from "@chakra-ui/icons";
import RadioPlans from "../../components/RadioPlans";
import SegmentedControl from '../../components/SegmentControl/index.js'
import { useRef } from "react";
import OnlyHotmart from "../../components/OnlyHotmart";
import { IoIosArrowBack } from "react-icons/io";
import GetPlans from "../contexts/Plans";
import { useEffect } from "react";
import Cookies from "js-cookie";
import useAuth from "../contexts/AuthContext";

import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import detectLanguage from "../contexts/detectLanguage";
import Link from "next/link";
export default function Plans() {
  const [isSelected, setIsSelected] = useState({
    value: null,
    name: null,
    url: null,
  });
  const [isHotmart, setIsHotmart] = useState(false);
  const { allplans, get_all_plans, plan_checkout } = GetPlans()
  const {user} = useAuth();
  const token = Cookies.get('token')
  const router = useRouter()
  const { allApiWithClientIP } = SetLanguage()
  const { t, i18n } = useTranslation();


  useEffect(() => {
    //logica feita para detectar o local do usuário
    async function initialize() {
      const language = await detectLanguage();
      i18n.changeLanguage(language);
      setIsHotmart(language === "pt");


      // Define o plano e a URL de pagamento com base no idioma
    }
    initialize();
    if (!allplans) {
      get_all_plans(token);
    }
  }, [allplans, token, i18n, isHotmart]);

  const {
    isOpen: onlyHotmart_isOpen,
    onOpen: onlyHotmart_onOpen,
    onClose: onlyHotmart_onClose
  } = useDisclosure()

  //funcao atualizada para armazenar id do plano e url de pagamento
    const handleItemClick = (selectedPlan) => {
        if (!user) {
            // O usuário não está autenticado
            alert("Você precisa fazer login para comprar um plano.");
            return;
        }
        setIsSelected({
            name: selectedPlan.name,
            email: user.email, // Certifique-se de que user.email tenha um valor válido
            url: null, // Você pode atualizar isso quando obtiver a URL
        });
        // Aqui você pode fazer a solicitação POST para obter a URL
        // Atualize isSelected.url quando você tiver a URL
    };
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [selectedValue2, setSelectedValue2] = useState("complete");

  console.log("select", isSelected);
  return (
    <Box style={{ background: '#F5F6F8' }}>
      <OnlyHotmart isOpen={onlyHotmart_isOpen} onOpen={onlyHotmart_onOpen} onClose={onlyHotmart_onClose} isSelected={isSelected}
      />
      <Grid
        margin={"auto"}
        templateAreas={
          {
            base:
              `
                  "top top"
                  "side side"
                  "body body"
                  `,
            md: `
                  "top body"
                  "side body"
                  "side body"
                  "side body"`
          }
        }
        h="100%"
        maxWidth={"1280px"}
        gridTemplateColumns={"1.4fr 5fr"}
        gap={2}
        p={10}
        pb={'103px'}
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
          {/* <Button onClick={() => logout()} mt={5} w={"100px"} bg='#E4E6EB' >
                    Log out
                  </Button> */}
        </GridItem>

        <GridItem area={"side"} display={"flex"} justifyContent={"start"}    >
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
              {t('plans.text2')}
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
              {t('plans.text3')}
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
              backgroundColor={"#E4E4E4"}

              onClick={() => router.push("/plans")}
            >
              {t('plans.text4')}
            </Box>
          </Box>
        </GridItem>





        <GridItem area={"body"} height={"100%"} bg="#ffff" borderRadius={14} mt={'60px'}>
          <Box p={2} >
            <Box p={{ base: 1, md: 10 }}>

              <Box display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'} alignItems={'center'} mb={10}>

                <Text fontSize={'3xl'}
                  fontWeight={'medium'}
                  mb={4}

                >{t('plans.text5')}</Text>

                {/* <ButtonGroup size='md' gap={2} isAttached variant='outline'>
                    <Button colorScheme='green'>WhiteAlpha</Button>
                    <Button  colorScheme='blackAlpha'>BlackAlpha</Button>
                  </ButtonGroup> */}

                <SegmentedControl
                  name="group-control-field"
                  defaultIndex={1}
                  callback={(val) => setSelectedValue1(val)}
                  controlRef={useRef()}
                  bgopt={true}
                  segments={[
                    {
                      label: t('plans.text7'),
                      value: "Mensal",
                      ref: useRef()
                    },
                    {
                      label: t('plans.text8'),
                      value: "Anual",
                      ref: useRef()
                    },
                  ]}
                />


              </Box>

              <RadioGroup>
                <Stack spacing={5} direction='column'>
                  {selectedValue1 === "Mensal" ? (
                      <>
                        {allplans && allplans[0] && (
                            <RadioPlans
                                title={allplans && allplans[0].name}
                                value={allplans && allplans[0].id}
                                activated={user && user.plan_id === (allplans && allplans[0].id)}
                                products={allplans && allplans[0].plan_word_limit}
                                price={allplans && allplans[0].plan_price.toFixed(2)}
                                isChecked={isSelected.value === (allplans && allplans[0].id)}
                                functionExec={() => handleItemClick(allplans && allplans[0])}
                            />
                        )}
                        {allplans && allplans[2] && (
                            <RadioPlans
                                title={allplans[2].name}
                                value={allplans[2].id} // Use o ID do plano como valor
                                activated={user && user.plan_id === allplans[2].id}
                                products={allplans[2].plan_word_limit}
                                price={allplans[2].plan_price.toFixed(2)}
                                isChecked={isSelected.value === allplans[2].id} // Compare com isSelected.value
                                functionExec={() => handleItemClick(allplans[2])}
                            />
                        )}
                      </>
                  ) : (
                      <>
                        {allplans && allplans[3] && (
                            <RadioPlans
                                title={allplans[3].name}
                                value={allplans[3].id}
                                activated={user && user.plan_id === allplans[3].id}
                                products={allplans[3].plan_word_limit}
                                price={allplans[3].plan_price.toFixed(2)}
                                isChecked={isSelected.value === allplans[3].id}
                                functionExec={() => handleItemClick(allplans[3])}
                            />
                        )}
                        {allplans && allplans[4] && (
                            <RadioPlans
                                title={allplans[4].name}
                                value={allplans[4].id} // Use o ID do plano como valor
                                activated={user && user.plan_id === allplans[4].id}
                                products={allplans[4].plan_word_limit}
                                price={allplans[4].plan_price.toFixed(2)}
                                isChecked={isSelected.value === allplans[4].id}
                                functionExec={() => handleItemClick(allplans[4])}
                            />
                        )}
                      </>
                  )}
                </Stack>
              </RadioGroup>

              <Divider borderColor={"blackAlpha.600"} my={10} marginBottom={{ base: 4, md: 2 }} />

              <Box display={'flex'} justifyContent={'end'} mt={10}>
                <Button
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
                  onClick={onlyHotmart_onOpen}
                >{t('plans.text6')}</Button>
              </Box>

            </Box>


          </Box>
        </GridItem>

      </Grid>
    </Box>
  );
}