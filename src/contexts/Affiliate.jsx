import { Box, Flex, Text } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import Accordian from './Accordian'
import SetLanguage from "../contexts/language";
import detectLanguage from "../contexts/detectLanguage";

const Affiliate = () => {
    const [isBrazilianIP, setIsBrazilianIP] = useState(false);
    const [language, setLanguage] = useState('');

    useEffect(() => {
        async function initialize() {
            // Chame sua função para detectar o idioma
            const detectedLanguage = await detectLanguage();

            // Defina o idioma com base no resultado da detecção
            setLanguage(detectedLanguage);

            // Verifique se o idioma é "pt" (português) e, se for o caso, defina isBrazilianIP como verdadeiro
            if (detectedLanguage === 'pt') {
                setIsBrazilianIP(true);
            }
        }

        initialize();
    }, []);

    return (
        <div>
            {isBrazilianIP && language === 'pt' && (
                <Flex
                display={{ base: "none", md: "block", lg:"block", xl:"block", "2xl":"block" }}
                direction={"column"}
                bg={"white"}
                p={"16px"}
                w={'300px'}
                rounded={"3xl"}
            >
                <Flex direction={"row"} gap={2} align={"center"} mb={5} px={3}>
                    <Text
                        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                        color='black' fontSize="2xl" fontWeight="bold" pl={"2px"}>
                        Seja um afiliado
                    </Text>
                    <img
                        src="/images/money-mouth-face-emoji.svg"
                        alt=""
                        style={{ width: "35px" }}
                    />
                </Flex>
                <Box px={3}>
                <Accordian />

                </Box>
            </Flex>)}
        </div>
    )
}

export default Affiliate