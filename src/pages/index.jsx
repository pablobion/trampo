import useAuth from "../contexts/AuthContext";
import { getCookie } from "../services/cookies";
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  HStack,
  Text,
  Image,
  Heading,
  ButtonGroup,
  Flex,
  Container,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Info from "../../components/InfoComponent";
import AccordionItemProps from "../../components/AcordionItem";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import FooterJSX from "../../components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SetLanguage from "../contexts/language";



export default function Home() {
  const router = useRouter();
  const { allApiWithClientIP } = SetLanguage()
  const { t, i18n } = useTranslation();
  useEffect(() => {
    allApiWithClientIP();
  }, [])

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: "1420px", margin: "auto", width: "100%" }}>
        <Container maxW={"container.xl"}>
       <Box display='flex' flexDirection={{base : 'column' , md : 'row'}} justifyContent={'space-between'} alignItems={'center'} w='100%'>
       <Flex direction={"column"} align={{ base: 'center', md: 'start' }} textAlign={{ base: 'center', md: 'left' }} gap={10} mt={{ base: '50px', md: "130px" }} justify={'center'}>
            <Heading size={{ base: '3xl', md: "4xl" }}>
              {t('ordem_p1')} <br />
              {t('ordem_p2')}

            </Heading>
            <Box
              fontSize={"md"}
              fontWeight={"500"}
              w={{ base: "80%", md: "400px" }}
            >
              {/* I am an artificial intelligence trained to make the lives of
              Lawyers and Law Students{" "}
              <Text display={"inline"} color={"#01FBFB"}>
                infinitely
              </Text>{" "}
              easier. I'm available{" "}
              <Text display={"inline"} color={"#01FBFB"}>
                24/7
              </Text>{" "}
              via Telegram. */}
              {t("introText")}
            </Box>

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
          </Flex>
          <Flex>
            <Image mt={5} src="/jinwithman.png" height={'100%'} width={'100%'} objectFit={'contain'} maxWidth={'750px'} maxHeight={'700px'}/>
          </Flex>
       </Box>

        </Container>

        <Text
          mt={"100px"}
          fontSize={{ base: "4xl", md: "5xl" }}
          letterSpacing={"1px"}
          textAlign={"center"}
          className="ff_league"
        >
          {t('text7')}
        </Text>
        <Text
          mt={-3}
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={"1px"}
          className="ff_league"
          textAlign={"center"}
        >
          {t('text8')}
        </Text>

        <Text
          fontWeight={"500"}
          letterSpacing={"1px"}
          margin="auto"
          textAlign={"center"}
          mt="3"
          w={{ base: "80%", md: "400px" }}
          fontSize={"md"}
        >
          {t('text9')}
        </Text>

        <Container maxW="container.xl" mt={10}>
          <Flex
            justify={{ base: "center", md: "space-between" }}
            flexWrap={"wrap"}
          >
            <VStack w={"300px"} justify={"center"} textAlign={'center'} gap={4}>
              <Image
                src="/manwithkabootar.png"
                height={200}
                margin="30px auto"
                width="100%"
                objectFit="cover"
                alt="Imagem"
              ></Image>
              <Heading size={"2xl"} color={"#01FBFB"}>
                1
              </Heading>
              <Text
                fontWeight={"500"}
                letterSpacing={"1px"}
                fontSize={"md"}
                maxW={'250px'}

              >
                {t('text10')}
              </Text>
            </VStack>
            <VStack w={"300px"} justify={"center"} textAlign={'center'} gap={4}>
              <Image
                src="/jintalkingman.png"
                height={200}
                margin="30px auto"
                width="100%"
                objectFit="cover"
                alt="Imagem"
              ></Image>
              <Heading size={"2xl"} color={"#01FBFB"}>
                2
              </Heading>
              <Text
                fontWeight={"500"}
                letterSpacing={"1px"}
                fontSize={"md"}
                mt={10}
                maxW={'250px'}
              >
                {t('text11')}
              </Text>
            </VStack>
            <VStack w={"300px"} justify={"center"} textAlign={'center'} gap={4}>
              <Image
                src="/jinsalammobile.png"
                height={200}
                margin="30px auto"
                width="100%"
                objectFit="cover"
                alt="Imagem"
              ></Image>
              <Heading size={"2xl"} color={"#01FBFB"}>
                3
              </Heading>
              <Text
                fontWeight={"500"}
                letterSpacing={"1px"}
                fontSize={"md"}
                mt={10}
                maxW={'250px'}
              >
                {t('text12')}
              </Text>
            </VStack>
          </Flex>
        </Container>

        <Box mt={'200px'}>
          <Info
            alternate={true}
            title={t('text13')}
            points={[
              t('text14'),
              t('text15'),
              t('text16'),
              t('text17'),
              t('text18')

            ]}
          />
          <Info

            title={t('text19')}
            points={[
              t('text20'),
              t('text21'),
              t('text22'),
              t('text23'),
              t('text24')
            ]}
          />
          <Info
            alternate={true}
            button={true}

            title={t('text25')}
            points={[
              t('text26'),
              t('text27'),
              t('text28'),
              t('text29'),
              t('text30')
            ]}
          />
          <Info
            alternate={true}

            title={t('text31')}
            description={t('text32')}

          />

        </Box>

        <Flex justify={'center'} px={4}>
          <Button
            backgroundColor={'#01FBFB'}
            color={'#000'}
            py={8}
            px={10}


            fontSize={{ base: 'sm', md: 'md' }}
            _hover={{

              bg: "#0db9b9",
              boxShadow: '0 0 10px rgba(1, 251, 251, 0.7)',
              transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s'
            }}
            minW={'270px'}
            mb={10}
            onClick={() => { router.push('/planos') }}
          >
            {t('text33')}
          </Button>
        </Flex>
        <Text
          mt={10}
          textAlign={"center"}
          fontSize={{
            base: "3xl",
            md: "6xl",
          }}
          className="ff_league"
        >
          {t('text34')}
        </Text>
        <Container maxW="container.xl" mb={10}>
          <Box
            mt={10}
            display="flex"
            justifyContent={{ base: "center", md: "end" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              display={{ base: "none", md: "block" }}
              p={10}
              height="460px"
              width="40%"

            >
              <Image
                borderRadius={10}
                src="/questionmark.png"
                alt="Imagem"
                objectFit="cover"
                height="100%"
                width="100%"
              />
            </Box>


            <Accordion allowMultiple width="100%" fontSize={"md"} mb={'80px'}>
              <AccordionItemProps
                title={t('text35')}
                description={t('text36')}
              />
              <AccordionItemProps
                title={t('text37')}
                description={t('text38')}
              />
              <AccordionItemProps
                title={t('text39')}
                description={t('text40')}
              />
              <AccordionItemProps
                title={t('text41')}
                description={t('text42')}
              />
              <AccordionItemProps
                title={t('text43')}
                description={t('text44')}
              />
              <AccordionItemProps
                title={t('text45')}
                description={t('text46')}
              />
              <AccordionItemProps
                title={t('text47')}
                description={t('text48')}
              />
            </Accordion>

          </Box>
        </Container>
      </main>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const token = getCookie("token", context.req);
  // const cookieValue = getCookie(context.req, 'nomeDoCookie'); // Substitua 'nomeDoCookie' pelo nome do seu cookie
  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
