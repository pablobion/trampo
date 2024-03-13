"use client";
import React, {useEffect, useState} from "react";
import {
    Flex,
    Box,
    Text,
    IconButton,
    Center,
    Button,
    useDisclosure,
    Stack, useBreakpointValue,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { ChatProvider, useChat } from "../contexts/ChatContext";
import Chat from "../contexts/Chat";
import BookmarkTab from "../contexts/BookmarkTab";
import Accordian from "../contexts/Accordian";
import { BsBookmark, BsCheckLg } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../contexts/language";
import GetPlans from "../contexts/Plans";
import {useWordCountLimit}  from "../contexts/wordCountUtils"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import ChatMessage from "../contexts/ChatMessage";
import Affiliate from "../contexts/Affiliate";
import detectLanguage from "../contexts/detectLanguage";
import WeeklyBanner from "../services/WeeklyBanner";
function ChatPage (){
    const { plan } = GetPlans(); // Use o contexto para acessar as informações do plano
    const { wordCount, isButtonDisabled, handleIncrementWordCount, limit } = useWordCountLimit(plan);
    const router = useRouter();
    const { allApiWithClientIP } = SetLanguage()
    const { t, i18n } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("bottom");
    const initialTitles = [
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
    ]; // Replace with your initial titles
    const [titles, setTitles] = useState(initialTitles);
    // const [selectedChat, setSelectedChat] = useState(null);
    const [editingTitle, setEditingTitle] = useState("");

    const handleEdit = (index) => {
        setSelectedChat(index);
        setEditingTitle(titles[index]);
    };

    const handleSave = (index) => {
        const newTitles = [...titles];
        newTitles[index] = editingTitle;
        setTitles(newTitles);
        setSelectedChat(null); // Clear selectedChat to exit edit mode
    };

    const handleCancel = () => {
        setSelectedChat(null); // Clear selectedChat to exit edit mode
    };
    const [chatTitles, setChatTitles] = useState(["Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",
        "Who are you? What...",]);
    const [selectedChat, setSelectedChat] = useState(-1);

    const handleDeleteChat = (index) => {
        const updatedChatTitles = [...chatTitles];
        updatedChatTitles.splice(index, 1);
        setChatTitles(updatedChatTitles);
        setSelectedChat(null);
    };

    const [editMode, setEditMode] = useState(null);
    const [editedChatTitle, setEditedChatTitle] = useState("");
    const handleEditChat = (index) => {
        setEditMode(index);
        setEditedChatTitle(chatTitles[index]);
    };
    const handleSaveChat = (index) => {
        const updatedChatTitles = [...chatTitles];
        updatedChatTitles[index] = editedChatTitle;
        setChatTitles(updatedChatTitles);
        setEditMode(null);
    };


    const handleChatClick = (chatId) => {
        setSelectedChat(chatId);
    };
    const [bookmarkedChats, setBookmarkedChats] = useState([]);

    const toggleBookmark = () => {

        if (selectedChat !== null) {
            if (bookmarkedChats.includes(selectedChat)) {
                setBookmarkedChats(
                    bookmarkedChats.filter((chat) => chat !== selectedChat)
                );
            } else {
                setBookmarkedChats([...bookmarkedChats, selectedChat]);
            }
        }
    };
    const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isAfiliadoOpen, setIsAfiliadoOpen] = useState(false);

    const toggleBookmarksDrawer = () => {
        setIsBookmarksOpen(!isBookmarksOpen);
        setIsHistoryOpen(false);
        setIsAfiliadoOpen(false);
    };

    const toggleHistoryDrawer = () => {
        setIsHistoryOpen(!isHistoryOpen);
        setIsBookmarksOpen(false);
        setIsAfiliadoOpen(false);
    };

    const toggleAfiliadoDrawer = () => {
        setIsAfiliadoOpen(!isAfiliadoOpen);
        setIsBookmarksOpen(false);
        setIsHistoryOpen(false);
    };
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };
    const [isNewChatOpen, setIsNewChatOpen] = useState(false);

    const handleNewChatClick = () => {
        if (isButtonDisabled) {

        }  else{ window.location.reload();}

    };

    const maxWidth = useBreakpointValue({
        base: '280px',
        sm: '440px',
        md: '768px',
        lg: '960px',
        xl: '1270px',
        '2xl': '1900px'
    });

    useEffect(() => {
        allApiWithClientIP();
        if (plan) {

        }
        if (isButtonDisabled) {

        }
    }, [plan,isButtonDisabled]);




    return (
        <div >
            <Box className='containerChat'
                 maxW={maxWidth}  >

                <Flex   direction={"row"}  p={{ base: "0rem",xl:"0rem 2rem","2xl":"0rem 2rem"  }} gap={"2rem"} >
                    <Flex
                        display={{ base: "none", md: "block" }}
                        direction={"column"}
                        gap={"1rem"}
                        bg={"white"}
                        rounded={"3xl"}
                        py={"25px"}
                        px={"20px"}
                        h={{ md: "760px" }}
                    >
                        <Center >
                            <Button
                                colorScheme="blackAlpha"
                                variant="outline"
                                w={"250px"}
                                borderColor="blackAlpha.900"
                                border={'2px'}
                                boxShadow= '0 0 5px 2px rgba(0, 0, 0, 0.5)'
                                _hover={{ bg: 'gray.100' }}
                                isDisabled={isButtonDisabled}
                            >
                                <Flex  alignItems="center" justifyContent="center" gap={3} onClick={() => handleNewChatClick()}>
                                    <AddIcon w={3} h={3} color={'black'}  />
                                    <Text fontWeight="semibold" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                                          color="black" fontSize="16px" flex="1"> {t('chat.text1')}</Text>
                                </Flex>
                            </Button>
                        </Center>
                        <Box >
                            <Flex direction={"column"} pt={"2rem"}>
                                <Text color="black" fontSize={"2xl"} fontWeight={"bold"} pb={"0.5rem"}>
                                    {t('chat.text2')}
                                </Text>
                                <Box border={"1px"} rounded={"md"} p={"2"} borderColor={"gray.100"}>
                                    <Text fontWeight="normal" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                                          color="black" fontSize="12px" flex="1"> Who are you? What...</Text>
                                </Box>
                                {isToggled && (
                                    <Box  border={"1px"} rounded={"md"} p={"2"} borderColor={"gray.100"} mt={1}>
                                        <Text
                                            color="black" fontSize={"12px"}>Who are you? What...</Text>
                                    </Box>
                                )}
                            </Flex>
                            <Flex direction="column" pt="2rem" overflow={"hidden"}>
                                <Text color="black" fontSize="2xl" fontWeight="bold">
                                    {t('chat.text3')}
                                </Text>
                                <Flex
                                    direction={"column"}
                                    gap={2}
                                    maxH={'500px'}
                                    mt={"0.5rem"}
                                    overflowY={"scroll"}
                                >
                                    {chatTitles.map((title, index) => (
                                        <Box
                                            key={index}
                                            borderWidth="1px"
                                            rounded="md"
                                            p="2"
                                            borderColor={selectedChat === index ? "#01FBFB" : "gray.100"}
                                            onClick={() => setSelectedChat(index)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {editMode === index ? (
                                                <Flex  alignItems="center" >
                                                    <input
                                                        value={editedChatTitle}
                                                        style={{ fontSize: "12px", padding: '5px' }}

                                                        onChange={(e) => setEditedChatTitle(e.target.value)}
                                                    />
                                                    <div style={{ marginLeft: "28px", marginTop: "3px" }}>
                                                        <button onClick={() => setEditMode(null)}><RxCross2 size={18} /></button>
                                                        <button onClick={() => handleSaveChat(index)}><BsCheckLg size={18} /></button>

                                                    </div>
                                                </Flex>
                                            ) : (
                                                <Flex alignItems="center">
                                                    <Text fontWeight="normal" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" color="black" fontSize="12px" flex="1">
                                                        {title}
                                                    </Text>
                                                    {selectedChat === index && ( // Check if the chat is selected
                                                        <Box display="flex" alignItems="center" gap={1}>
                                                            <button onClick={() => handleEditChat(index)}>

                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-pencil"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                </svg>
                                                            </button>
                                                            <button  onClick={() => handleDeleteChat(index)}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                </svg>
                                                            </button>
                                                        </Box>
                                                    )}
                                                </Flex>
                                            )}
                                        </Box>
                                    ))}
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex
                        direction={"column"}
                        gap={ "0rem" }
                        bg={"white"}
                        pt={{ md: "10px", base: "10px",  }}
                        width={{base:'430px',md: "1700px"}}
                        rounded={"3xl"}
                    >
                        <Flex
                            direction={"row"}
                            align={"center"}
                            justifyContent={"space-between"}
                            pb={"10px"}
                            px={"20px"}
                            borderBottom={"1px"}
                            borderColor={"gray.100"}
                        >
                            <Flex align={"center"} gap={2}>
                                <Box
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    bg={"black"}
                                    rounded={"full"}
                                    w={{ md: "50px", base: "40px" }}
                                    h={{ md: "50px", base: "40px" }}

                                >
                                    <img
                                        src="/images/logo2.png"
                                        alt=""
                                        style={{
                                            borderRadius: "35px",
                                            width: "30px",
                                            objectFit: "contain ",
                                            objectPosition: "left",
                                        }}
                                    />
                                </Box>
                                <Text
                                    color="black"
                                    fontSize={{ md: "2xl", base: "lg" }}
                                    fontWeight="bold"
                                    px={"6px"}
                                >
                                    Lawyer Lamp
                                </Text>

                            </Flex>
                            <Box color={"black"} display={{ md: "block", base: "none" }}>

                                <button onClick={handleClick}>
                                    {isToggled ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-bookmark-fill"
                                            viewBox="0 0 16 16"

                                        >
                                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-bookmark"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg>
                                    )}
                                </button>
                            </Box>
                            <Flex
                                spacing={4}
                                align={"center"}
                                display={{ base: "flex", md: "none" }}
                            >
                                <Box color={"black"} display={{ md: "hidden", base: "block" }} mr={2} mt={"1.5"}>

                                    <button onClick={handleClick}>
                                        {isToggled ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-bookmark-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-bookmark"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                            </svg>
                                        )}
                                    </button>
                                </Box>
                                <button
                                    onClick={() => handleNewChatClick()}
                                    style={{ marginRight: "7px" }}
                                >
                                    <IoMdAdd color={"black"} size={25} />
                                </button>
                                <button onClick={onOpen}>
                                    <BsThreeDotsVertical color={"black"} size={20} />
                                </button>
                            </Flex>
                        </Flex>
                        {/* main drawer of mobile  */}
                        <Drawer  placement={placement} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent bg={'white'}>
                                <DrawerHeader color={'black'} borderBottomWidth="1px">
                                    More Options
                                </DrawerHeader>
                                <DrawerBody>
                                    <Box
                                        onClick={toggleBookmarksDrawer}
                                        cursor="pointer"
                                        mb={4}
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Text color="black">Bookmarks</Text>
                                        {isBookmarksOpen && <span>&rarr;</span>}
                                    </Box>

                                    {/* History link */}
                                    <Box
                                        onClick={toggleHistoryDrawer}
                                        cursor="pointer"
                                        mb={4}
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Text color="black">History</Text>
                                        {isHistoryOpen && <span>&rarr;</span>}
                                    </Box>

                                    {/* Seja um afiliado link */}
                                    <Box
                                        onClick={toggleAfiliadoDrawer}
                                        cursor="pointer"
                                        mb={4}
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Text color="black">Seja um afiliado</Text>
                                        {isAfiliadoOpen && <span>&rarr;</span>}
                                    </Box>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                        {/* bookmark  */}
                        <Drawer
                            placement="bottom"
                            onClose={() => setIsBookmarksOpen(false)}
                            isOpen={isBookmarksOpen}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth="1px">Bookmarks</DrawerHeader>
                                <DrawerBody>
                                    <Flex
                                        direction={"column"}
                                        gap={2}
                                        mt={"0.5rem"}
                                        overflowY={"scroll"}
                                    >
                                        {chatTitles.map((title, index) => (
                                            <Box
                                                key={index}
                                                borderWidth="1px"
                                                rounded="md"
                                                p="2"
                                                borderColor={
                                                    selectedChat === index ? "#01FBFB" : "gray.100"
                                                }
                                                onClick={() => handleChatClick(index)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <Flex alignItems="center" x>
                                                    <Text fontSize="12px" flex="1">
                                                        {title}
                                                    </Text>
                                                    {selectedChat === index && (
                                                        <Box display="flex" alignItems="center" gap={1}>
                                                            <button>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-pencil"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                </svg>
                                                            </button>
                                                        </Box>
                                                    )}
                                                </Flex>
                                            </Box>
                                        ))}
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                        {/* History Drawer */}
                        <Drawer
                            placement="bottom"
                            onClose={() => setIsHistoryOpen(false)}
                            isOpen={isHistoryOpen}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader  borderBottomWidth="1px">History</DrawerHeader>
                                <DrawerBody>
                                    <Flex
                                        direction={"column"}
                                        gap={2}
                                        mt={"0.5rem"}
                                        overflowY={"scroll"}
                                    >
                                        {chatTitles.map((title, index) => (
                                            <Box
                                                key={index}
                                                borderWidth="1px"
                                                rounded="md"
                                                p="2"
                                                borderColor={
                                                    selectedChat === index ? "#01FBFB" : "gray.100"
                                                }
                                                onClick={() => handleChatClick(index)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <Flex alignItems="center" x>
                                                    <Text color="black" fontSize="12px" flex="1">
                                                        {title}
                                                    </Text>
                                                    {selectedChat === index && (
                                                        <Box display="flex" alignItems="center" gap={1}>
                                                            <button>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-pencil"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    class="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                </svg>
                                                            </button>
                                                        </Box>
                                                    )}
                                                </Flex>
                                            </Box>
                                        ))}
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                        {/* Afiliado Drawer */}

                        <Drawer
                            placement="bottom"
                            onClose={() => setIsAfiliadoOpen(false)}
                            isOpen={isAfiliadoOpen}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader color="black" borderBottomWidth="1px">
                                    Seja um afiliado
                                </DrawerHeader>
                                <DrawerBody>
                                    <Accordian />
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                        <ChatProvider>
                            <div>
                                <Chat />
                            </div>




                        </ChatProvider>
                    </Flex>
                    <Affiliate />

                </Flex>
            </Box>
        </div>
    );
};

export default ChatPage;
