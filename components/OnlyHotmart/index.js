import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../../src/contexts/language";
import {useEffect, useState} from "react";
import detectLanguage from "../../src/contexts/detectLanguage";
import GetPlans from "../../src/contexts/Plans";
import Cookies from "js-cookie";
import useAuth from "../../src/contexts/AuthContext";
import { isSelected } from '../../src/pages/plans';

export default function OnlyHotmart({ isSelected, isOpen, onOpen, onClose, variant = 1 }) {

    const { allApiWithClientIP } = SetLanguage();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("en");
    const [isHotmart, setIsHotmart] = useState(false);
    const { url,selectedPlan } = isSelected || {};
    const token = Cookies.get('token')
    const {user} = useAuth();

    useEffect(() => {
        //logica feita para identificar o local do usuário
        async function initialize() {
            const language = await detectLanguage();
            i18n.changeLanguage(language);
            setIsHotmart(language === "pt");
        }

        initialize();
    }, [i18n]);
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size={'xl'}



    >
      <ModalOverlay />
      <ModalContent background={"#fff"} color={'#000'} maxW="400px">
        <ModalHeader>
          <Text pt={10} lineHeight={"1"} fontSize={"20px"} fontWeight={"bold"}>
              {t(isHotmart ? "plans.text11" : "plans.text12")}
          </Text>
        </ModalHeader>
                <ModalCloseButton   color='#C3C3C4' fontSize={'20px'} fontWeight={'normal'}/>

        <ModalBody  >{variantFunction(variant, onClose, isHotmart, url, token, user, isSelected)}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

function variantFunction(number, onClose, isHotmart, url, token, user, isSelected) {
    const { t, i18n } = useTranslation();
    const { plan_checkout } = GetPlans();
    switch (number) {
    case 1:
      return (
        <>
          <Stack spacing={4} p={0}>
            <Text color={"gray.500"}   fontSize={'xs'}>
                {t(isHotmart ? "plans.text13" : "plans.text14")}
            </Text>

            <Box>
              <Button
                variant={"link"}
                fontWeight={"bold"}
                textDecoration={"underline"}
                fontSize={'xs'}
                color={'#000'}

              >
                  {t('plans.text15')}
              </Button>
            </Box>
          </Stack>

          <Box display={"flex"} justifyContent={"end"} p={3}>

              {isHotmart ? (
                  <Button
                      mt={12}
                      backgroundColor={"#01FBFB"}
                      color={"#000"}
                      py={6}
                      px={8}
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{
                          bg: "#0db9b9",
                          boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                          transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                      }}
                      onClick={() => {
                          if (isSelected && isSelected.name) {
                              plan_checkout(token, user.email, isSelected.name);
                          } else {
                              console.error("A URL não está definida em isSelected.");
                          }
                      }}
                  >
                      {t('plans.text16')}
                  </Button>
              ) : (
                  <Button
                      mt={12}
                      backgroundColor={"#01FBFB"}
                      color={"#000"}
                      py={6}
                      px={8}
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{
                          bg: "#0db9b9",
                          boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                          transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                      }}
                      onClick={() => {
                          if (isSelected && isSelected.name) {
                              plan_checkout(token, user.email, isSelected.name);
                          } else {
                              console.error("A URL não está definida em isSelected.");
                          }
                      }}
                  >
                      {t('plans.text17')}
                  </Button>
              )}
          </Box>
        </>
      );
        default:
            return null; // Removendo o case 2 não utilizado
    }

}
