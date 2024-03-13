const {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Grid,
    Icon,
    DrawerFooter,
    Text,
    HStack,
    Heading,
    IconButton,
    Divider,
    Tooltip,
    Stack,
    Avatar,
    Box,
    Center,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    VStack,
  } = require("@chakra-ui/react");
  import { useRouter } from "next/router";
  // https://react-icons.github.io/react-icons/icons?name=io5
  import {
    IoDocumentText,
    IoSearch,
    IoCart,
    IoFileTrayFull,
    IoCog,
    IoPerson,
    IoExitOutline,
  } from "react-icons/io5";
  import { AiOutlineCheck, AiOutlineRight } from "react-icons/ai";
  import { CiSettings } from "react-icons/ci";
  import { BsListTask } from "react-icons/bs";
  import {IoMdHelp} from "react-icons/io"
  import { MoonIcon } from "@chakra-ui/icons";
  import useAuth from "../../src/contexts/AuthContext";
  
  export default function DrawerNavbarNotAuthenticated({ isOpen, onClose, drawerButtonRef }) {
    const router = useRouter();
    const { logout } = useAuth();
  
    const links = [
      { title: "Pricing", href: "/pricing" },
     
    ];
  
    return (
      <>
  
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={drawerButtonRef}
          size={'xs'}
          
        >
          <DrawerOverlay />
          <DrawerContent background={'#333333'}>
            <DrawerHeader display={"flex"} justifyContent={'end'}>
              <DrawerCloseButton
                __css={{
                  mr: 2,
                }}
                fontSize={'18px'}
                mr={-3}
              />
              
            </DrawerHeader>
  
          
  
         
  
            <DrawerBody 
       
            padding={0}>
             <Flex flexDirection={'column'} height={'calc(100vh - 81px)'}>
             <Box flexGrow={'1'}>
             {links &&
                  links.map((link, index) => {
                    return (
                      <>
                 
                      
                        <Button
                          onClick={() => {
                            onClose();
                            router.push(`${link.href}`)}
                          }
                          rightIcon={<Icon color={'gray.400'} as={AiOutlineRight} />}
                          key={index}
                          variant={'ghost'}
                          display={{ base: 'flex' }}
                          justifyContent={'space-between'}
                          width="100%"
                          _hover={{
                            background:'transparent',
                            backgroundColor : 'transparent',
                            color : 'white'
                          }}
                          fontWeight={'normal'}
                          py={4}
fontSize={'md'}
                          >
                          <Center>
                            
                            {link.title}
                          </Center>
                        </Button>
                      </>
                    );
                  })}
             </Box>
             <Box w='full' display={'flex'} flexDir={'column'} gap={4} justifyContent={'center'} px={4}>
             <Flex align={'center'} gap={'2'} color={'white'}  cursor={'pointer'}>
             <Popover placement='bottom-end' border={'none'} >
                        <PopoverTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="23px" height="23px" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
                        </PopoverTrigger>
                        <PopoverContent w='max-content' border={'none'} >


                          <PopoverBody backgroundColor={'#333'} color={'white'} fontSize={'13px'} fontWeight={'normal'} border={'none'} borderRadius={'md'} >
                            <VStack>
                              <Flex align={'center'} gap={2}>
                            
                                <Text onClick={() => handleLanguageChange('pt')}>
                                  Português
                                </Text>
                              </Flex>
                              <Flex>
                                <Box>

                                </Box>
                               
                                <Text onClick={() => handleLanguageChange('en')}>
                                  English
                                </Text>
                              </Flex>
                            </VStack>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
           <Text>
           Português
           </Text>
           </Flex>
              <Button  _hover={{
                            background:'transparent',
                            backgroundColor : 'transparent',
                            color : 'white'
                          }} bg={'transparent'} border='1px solid white' w='full' margin={'auto'} onClick={() => router.push("/login")}>
                Login
              </Button>
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
              Start free
            </Button>

             </Box>
             </Flex>

  
                    
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
