import React, {useState, useRef, useEffect} from "react";
import { useChat } from "./ChatContext";
import ChatMessage from "./ChatMessage";
import {
  Box,
  Flex,
  Input,
  IconButton,
  Icon,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import GetPlans from "../contexts/Plans";
import {useWordCountLimit} from "../contexts/wordCountUtils";
import WeeklyBanner from "../services/WeeklyBanner";
function Chat() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { messages, addMessage } = useChat();
  const { allApiWithClientIP } = SetLanguage()
  const { plan } = GetPlans(); // Use o contexto para acessar as informações do plano
  const { t, i18n } = useTranslation();
  const { wordCount, isButtonDisabled, handleIncrementWordCount, limit } = useWordCountLimit(plan);
  const handleSendMessage = () => {


    const messageToSend = selectedPrompt || newMessage;
    if (messageToSend) {
      addMessage(messageToSend);
      setNewMessage("");
      setSelectedPrompt("");
      handleIncrementWordCount();

    }
  };
  const [issOpen, setIssOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const onCross = () => setIssOpen(false);

  const handlePromptClick = (promptText) => {
    setSelectedPrompt(promptText);
    setNewMessage(promptText);

  };


  const modalRef = useRef();
  const bgColor = wordCount >= limit ? "#454d4f" : "white";
  console.log("bgColor:", bgColor);

  useEffect(() => {
    allApiWithClientIP();
    if (plan) {
    }
      if (isButtonDisabled) {
      }
    }, [plan,isButtonDisabled]);

  return (

      <Box bg=""  >

      <Flex
        flexDirection="column"
        justifyContent="space-between"
        height={{ base: "100vh", md: "550px" }}
        width={{ base: "95vw", md: "full",'2xl':'full' }}
      ><WeeklyBanner/>
        <Box flex="1" overflowY="scroll"  >
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isSent={index % 2 === 0}
            />
          ))}

        </Box>

         <Flex
          alignItems="center"

          bottom={{ base: 0, md: "unset" }}
          bg={isButtonDisabled ? "#f0fafa" : "white"}
          filter={isButtonDisabled ? "brightness(50%)" : "none"}
          py={5}
          width="100%"
          top={20}
          position='relative'
        >
          <Button
            display={{ base: "flex", md: "none" }}
            m={"2"}
            onClick={onOpen}
            bg={"#000000"}
            variant="solid"
            rounded={"full"}
            borderTop="1px solid #E0E0E0"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="white"
              class="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </Button>
          <Input
            type="text"
            placeholder={t('chat.text7')}
            value={selectedPrompt || newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            bg={ "#F0F0F0" }
            py={6}
            isDisabled={isButtonDisabled}
            borderRadius="md"
            marginRight={2}
            _placeholder={{ color: "gray" }}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
            fontWeight='normal'
            color='black'

          />

          <IconButton
            aria-label="Send"
            icon={<Icon as={FaRegPaperPlane} />}
            bg="#01FBFB"
            color='black'
            onClick={handleSendMessage}
            borderRadius="md"
            py={'24.9px'}
            px={5}
            mr={5}
            isDisabled={isButtonDisabled}
            _hover={{
            bg: wordCount >= limit ? "#01FBFB" : "#01E2E2", // Muda a cor de fundo no hover com base no estado do botão
            boxShadow: wordCount >= limit ? "0 0 0" : "0 0 4px rgba(1, 226, 226, 0.7", // Ajusta a sombra com base no estado do botão
            cursor: wordCount >= limit ? "not-allowed" : "pointer", // Altera o cursor quando desabilitado
          }}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </IconButton>
        </Flex>
      </Flex>
     <Flex display="flex"
           justifyContent="center"
           alignItems="center"
           position='relative'
           top={10}
     >   {isButtonDisabled ? (
          <Button
              display={{ md: "flex", base: "flex" }}
              filter={ "none"}
              _hover={{
                bg: "#0db9b9",
                boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
                transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
              }}
              backgroundColor={'#01FBFB'}
              color={'#000'}
              w={{base:250,md:450}}
              h={65}
             zIndex={999}

          >
            {t('chat.text13')}
          </Button>
      ) : null}</Flex>
 <Box   bg={isButtonDisabled ? "#f0fafa" : "white"}
        filter={isButtonDisabled ? "brightness(50%)" : "none"} borderBottomRadius='md'
         >

   <Flex >  <Button
        gap={2}
        onClick={onOpen}
        bg={"#000000"}
        variant="solid"
        rounded={"full"}
        fontSize={"16px"}
        fontWeight={"500"}
        isDisabled={isButtonDisabled}
        display={{ md: "flex", base: "none" }}
        m={4}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-chat-dots"
          viewBox="0 0 16 16"
        >
          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
        </svg>
        <Text color={"white"}>{t('chat.text8')  }</Text>
      </Button>


     </Flex>
 </Box>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        finalFocusRef={modalRef}

      >
        <ModalOverlay />
        <ModalContent  bg={"white"}>
          <ModalHeader color="black" >{t('chat.text8')}</ModalHeader>
          <Text
              color='black' fontSize={"16px"} fontWeight={"400"} px={"20px"} py={"20px"}>
            {t('chat.text9')}
          </Text>
          <ModalCloseButton  />
          <ModalBody>
            <Accordion >
              <AccordionItem border={"none"} mb={3}>
                <h2>
                  <AccordionButton
                    bg={"black"}
                    rounded={"lg"}
                    color={"white"}
                    border={"none"}
                    _hover={{}}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {t('chat.text10')}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel gap={3}>
                  <Box color='#1a202c'   mb={3}>
                    <Flex
                      bg={"#F6F6F6"}
                      p={2}
                      justifyContent={"space-between"}
                      align={"center"}

                    >
                      <Text color='black' pr={5}>
                        {t('chat.text11')}
                      </Text>
                      <button>
                        <button
                          onClick={() =>
                            handlePromptClick(t('chat.text11')
                            )
                          }

                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"

                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </button>
                    </Flex>
                    <Box  mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text11')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text11')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text12')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text12')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"} mb={3}>
                <h2>
                  <AccordionButton
                    bg={"black"}
                    rounded={"lg"}
                    color={"white"}
                    border={"none"}
                    _hover={{}}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {t('chat.text10')}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel gap={3}>
                  <Box color='#1a202c' mb={3}>
                    <Flex
                      bg={"#F6F6F6"}
                      p={2}
                      justifyContent={"space-between"}
                      align={"center"}
                    >
                      <Text color='black' pr={5}>
                        {t('chat.text11')}
                      </Text>
                      <button
                        onClick={() =>
                          handlePromptClick(
                              t('chat.text11')
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          fill="currentColor"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                          onClick={onClose}
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                    </Flex>
                    <Box  mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text11')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text11')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text12')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text12')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"} mb={3}>
                <h2>
                  <AccordionButton
                    bg={"black"}
                    rounded={"lg"}
                    color={"white"}
                    border={"none"}
                    _hover={{}}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {t('chat.text10')}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel gap={3}>
                  <Box color='#1a202c' mb={3}>
                    <Flex
                      bg={"#F6F6F6"}
                      p={2}
                      justifyContent={"space-between"}
                      align={"center"}
                    >
                      <Text color='black' pr={5}>
                        {t('chat.text11')}
                      </Text>
                      <button
                        onClick={() =>
                          handlePromptClick(
                              t('chat.text11')
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          fill="currentColor"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                          onClick={onClose}
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                    </Flex>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text11')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text11')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text12')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text12')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"} mb={3}>
                <h2>
                  <AccordionButton
                    bg={"black"}
                    rounded={"lg"}
                    color={"white"}
                    border={"none"}
                    _hover={{}}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {t('chat.text10')}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel gap={3}>
                  <Box color='#1a202c' mb={3}>
                    <Flex
                      bg={"#F6F6F6"}
                      p={2}
                      justifyContent={"space-between"}
                      align={"center"}
                    >
                      <Text color='black' pr={5}>
                        {t('chat.text11')}
                      </Text>
                      <button
                        onClick={() =>
                          handlePromptClick(
                              t('chat.text11')
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          fill="currentColor"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                          onClick={onClose}
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                    </Flex>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text11')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text11')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text12')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text12')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"} mb={3}>
                <h2>
                  <AccordionButton
                    bg={"black"}
                    rounded={"lg"}
                    color={"white"}
                    border={"none"}
                    _hover={{}}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {t('chat.text10')}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel gap={3}>
                  <Box color='#1a202c' mb={3}>
                    <Flex
                      bg={"#F6F6F6"}
                      p={2}
                      justifyContent={"space-between"}
                      align={"center"}
                    >
                      <Text color='black' pr={5}>
                        {t('chat.text11')}
                      </Text>
                      <button
                        onClick={() =>
                          handlePromptClick(
                              t('chat.text11')
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          fill="currentColor"
                          class="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                          onClick={onClose}
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                    </Flex>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text11')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text11')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                    <Box mt={3}>
                      <Flex
                        bg={"#F6F6F6"}
                        p={2}
                        justifyContent={"space-between"}
                        align={"center"}
                      >
                        <Text color='black' pr={5}>
                          {t('chat.text12')}
                        </Text>
                        <button
                          onClick={() =>
                            handlePromptClick(
                                t('chat.text12')
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60px"
                            height="60px"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                            onClick={onClose}
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                          </svg>
                        </button>
                      </Flex>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>


  );
}

export default Chat;
