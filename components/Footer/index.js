import {
    Box,
    Button,
    ButtonGroup,
    Container,
    HStack,
    IconButton,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRouter } from "next/router";
  import { FaFacebookF, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../../src/contexts/language";
import {useEffect} from "react";
  export default function FooterJSX() {
    const router = useRouter();
    const { allApiWithClientIP } = SetLanguage()
    const { t, i18n } = useTranslation();
    // Determine the HStack alignment based on breakpoint
    const hStackAlignment = useBreakpointValue({ base: "center", md: "flex-start" });

    useEffect(() => {
      allApiWithClientIP();
    }, [])

    return (
      <Box w="100%" color="whiteAlpha.900" backgroundColor="#333333"  pt={'100px'}>
        <Container maxW="container.xl">
          <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={{base : '30px' , md : '250px'}} ml={{base : 5 , md : 0}}>
            <Box mb={{ base: 8, md: 0 }}>
              <Text mb={8} fontWeight="bold" fontSize={'18px'}>
              Lawyer Lamp
              </Text>
              <Stack spacing={3} fontWeight={'light'}>
                <Text>{t('footer.text1')}</Text>
                <Text cursor="pointer" onClick={() => router.push('/apply')}>
                  {t('footer.text1')}
                </Text>
                <Text>{t('footer.text2')}</Text>
                <Text>{t('footer.text3')}</Text>
              </Stack>
            </Box>
  
            <Box mb={{ base: 8, md: 0 }}>
              <Text mb={8} fontWeight="bold" fontSize={'18px'}>
                {t('footer.text4')}
              </Text>
              <Stack spacing={3} fontWeight={'light'}>
                <Text>hello@lawyerlamp.com</Text>
              </Stack>
            </Box>
  
            <Box mb={{ base: 8, md: 0 }}>
              <Text mb={8} fontWeight="bold" fontSize={'18px'}>
                {t('footer.text5')}
              </Text>
              <Stack spacing={3} fontWeight={'light'}>
                <Text >{t('footer.text6')}</Text>
              </Stack>
            </Box>
          </Box>
  
          <Box display="flex" mt={5} justifyContent="space-between" alignItems={{base : 'start' , md :"center"}} flexDirection={{base :'column' , md : 'row'}} gap={10}>
            <HStack
              display="flex"
              flexDirection={{base :'column' , md : 'row'}}
              alignItems={{base : 'start' , md :"center"}}
              spacing={5}
              id="logo"
              onClick={() => router.push('/')}
              cursor="pointer"
              
            >
              <Image width={170} height={140} loading="lazy" src={require("../../public/white-logo.png")} />
              <Text fontSize={12} m={0}>© 2023 Affiliate Pirate - Todos os direitos reservados</Text>
            </HStack>
  
            <ButtonGroup variant="outline" spacing="1" ml={{base : 5 , md : 0}}>
              <IconButton icon={<FaFacebookF />} aria-label="Facebook" />
              <IconButton icon={<FaTwitter />} aria-label="Twitter" />
              <IconButton icon={<FaInstagram />} aria-label="Instagram" />
              <IconButton icon={<FaTwitterSquare />} aria-label="Twitter" />
            </ButtonGroup>
          </Box>
        </Container>
      </Box>
    );
  }
  