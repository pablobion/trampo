import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Center,
    Button,
} from '@chakra-ui/react'
import {useEffect} from "react";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";

const Accordian = () => {
    const { allApiWithClientIP } = SetLanguage()
    const { t, i18n } = useTranslation();

    useEffect(() => {
        allApiWithClientIP();
    }, [])
    return (
        <Accordion  allowMultiple border={'none'}>
            <AccordionItem border={'none'}>
                <h2>
                    <AccordionButton
                        bg={'black'} color={'white'} rounded={'lg'} _hover={{ color: 'black' , bg:'gray'}} border={'none'} >
                        <Box fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                             fontWeight='normal' as="span" flex='1' textAlign='left'>
                            {t('chat.text4')}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                                fontWeight='normal' fontSize='16px' color='black' p={4} bg={'#F6F6F6'} mt={'3'} rounded={'10px'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    <Center w={'full'}>
                        <Button
                            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                            fontWeight='semibold'
                            color='black' bg='#01FBFB' rounded='lg' mt={'3'} w={'full'}  _hover={{
              bg: "#01E2E2", // Change the background color on hover
              boxShadow: "0 0 4px rgba(1, 226, 226, 0.7)", // Match the shadow color to the background color
              }}
                  >{t('chat.text5')}</Button>
                    </Center>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

    )
}

export default Accordian