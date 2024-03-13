"use client";
import { Box, Center, Flex } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const font = DM_Sans({
    weight: ["400"],
    subsets: ["latin"],
});
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import {useRouter} from "next/navigation";
export default function Home() {
    const [wordCount, setWordCount] = useState(1324242434355);
    const limit = 1324242434355;
    const color = wordCount >= limit ? 'red' : 'black';
    const router = useRouter();
    const { allApiWithClientIP } = SetLanguage()
    const { t, i18n } = useTranslation();
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setWordCount(Math.floor(Math.random() * 2000000000));
    //   }, 3000);

    //   return () => clearTimeout(timer);
    // }, []);
    useEffect(() => {
        allApiWithClientIP();
    }, [])

    return (
        <div  className={font.className}>
            <div  style={{  color:'black', background: "#F0F2F5", height: "100vh" }}>
                <div  style={{ maxWidth: "1280px", margin: "auto" }}>
                    <Flex  direction={"column"} pt={{md:"3rem",base:'0.5rem'}}>
                        <Box  className={font.className} display={{md:'block', base: 'none'}} w="100%" fontSize="2xl" fontWeight="bold" py={4} color="black">
                            {t('chat.dashboardText1')}
                        </Box>
                        <Box >
                            <Center  >
                                {wordCount == limit && (
                                    <Alert bg='#fcd4d4' status="error" rounded={'2xl'} textAlign={'center'} >
                                        <AlertIcon color={'red'} />
                                        <Flex
                                            flexDirection={{md:'row', base: 'column'}}
                                            gap={1}

                                        >
                                            <AlertDescription fontSize="16px" className={font.className}   >
                                                {" "}
                                                {t('chat.dashboardText2')}{" "}
                                            </AlertDescription>

                                            <AlertTitle fontSize="16px" className={font.className} > {t('chat.dashboardText3')}</AlertTitle>
                                        </Flex>
                                    </Alert>
                                )}
                            </Center>
                        </Box>
                        <Flex
                            flexDirection={{ base: "column", md: "row" }}
                            ml={{ md: 0, base: "1rem" }}
                            gap={{ md: "5rem" }}
                            mt={{md:"1rem" , base: "0.6rem"}}
                        >
                            <Box
                                mt={{ base: "0.7rem" }}
                                w={{ base: "xs", md: "sm" }}
                                borderWidth="1px"
                                borderRadius="lg"
                                padding={"20px"}
                                overflow="hidden"
                                bg={"white"}

                            >
                                <Flex direction={"column"} gap={{ md: "30px", base: "20px" }}>
                                    <Flex direction={"row"} justifyContent={"space-between"}>
                                        <Box className={font.className} fontSize="xl" fontWeight="semibold">
                                            {t('chat.dashboardText4')}
                                        </Box>
                                        <Box fontSize="xl" fontWeight="semibold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="#A4A4A4"
                                                class="bi bi-people"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                            </svg>
                                        </Box>
                                    </Flex>
                                    <Box fontSize="4xl" fontWeight="500" >
                                        1
                                    </Box>
                                </Flex>
                            </Box>
                            <Box
                                mt={{ base: "0.7rem" }}
                                w={{ base: "xs", md: "sm" }}
                                borderWidth="1px"
                                borderRadius="lg"
                                padding={"20px"}
                                overflow="hidden"
                                bg={"white"}

                            >
                                <Flex direction={"column"} gap={{ md: "30px", base: "20px" }}>
                                    <Flex direction={"row"} justifyContent={"space-between"}>
                                        <Box className={font.className} fontSize="xl" fontWeight="semibold">
                                            {t('chat.dashboardText5')}                                        </Box>
                                        <Box fontSize="xl" fontWeight="semibold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="#A4A4A4"
                                                class="bi bi-chat-left-text"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </Box>
                                    </Flex>
                                    <Box fontSize="4xl" fontWeight="500" color={color}>
                                        {wordCount}
                                    </Box>
                                </Flex>
                            </Box>
                            <Box
                                w={{ base: "xs", md: "sm" }}
                                mt={{ base: "0.7rem" }}
                                borderWidth="1px"
                                borderRadius="lg"
                                padding={"20px"}
                                overflow="hidden"
                                bg={"white"}
                            >
                                <Flex direction={"column"} gap={{ md: "30px", base: "20px" }}>
                                    <Flex direction={"row"} justifyContent={"space-between"}>
                                        <Box className={font.className} fontSize="xl" fontWeight="semibold" >
                                            {t('chat.dashboardText6')}                                        </Box>
                                        <Box fontSize="xl" fontWeight="semibold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="#A4A4A4"
                                                class="bi bi-layout-text-sidebar-reverse"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                                                <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" />
                                            </svg>{" "}
                                        </Box>
                                    </Flex>
                                    <Box fontSize="4xl" fontWeight="bold" fontWeight="500">
                                        Trial
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </div>
    );
}
