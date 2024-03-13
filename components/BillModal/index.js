import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    IconButton,
    Input,
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
import { useState } from "react";
  
  export default function BillModal({ isOpen, onOpen, onClose, variant = 1 }) {

    const [activated , setActivated]  =useState(false)
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
            <Flex justify={'center'} pt={6}>
            <div className={activated ? 'steps active' : 'steps'}>
                <span className="step">

                </span>
                <span className="line">

                </span>
                <span className="step">

                </span>
            </div>
            </Flex>

            
          {
            !activated &&   <Text pt={7} lineHeight={"1"} fontSize={"17px"} fontWeight={"semibold"}>
            Apply your Activation ID
            </Text>
          }

          
          </ModalHeader>
                  <ModalCloseButton   color='#C3C3C4' fontSize={'20px'} fontWeight={'normal'}/>
  
       {
        !activated &&    <ModalBody  >

        <Input
                p={3}
                borderRadius={"5px"}
                width={"100%"}
                size="sm"
                fontWeight={"semibold"}
                // if invalid other wise gray.300
                borderColor="red.300"

                _hover={{
                  borderColor: "#01FBFB",
                  boxShadow: "0 0 0 2px  rgba(1, 251, 251, 0.3)",
                }}
                _focus={{
                  borderColor: "#01FBFB",
                  boxShadow: "0 0 0 2px  rgba(1, 251, 251, 0.3)",
                }}
                type="text"
                placeholder="Enter your Activation ID here"
                _placeholder={{
                  color: "gray.400",
                  fontWeight: "normal",
                  fontSize: "xs",
                }}
                my={1}
              />
              {/* show if invalid  */}
              <Text color={"red"} fontWeight="normal" fontSize={"xs"}>
              This activation ID is not valid.
              </Text>

              <Flex justify={'end'}>
              <Button
         backgroundColor={"#01FBFB"}
         color={"#000"}
         py={5}
         px={6}
         my={6}
         
        onClick={()=>setActivated(!activated)}
         
         fontSize={{ base: "sm", md: "sm" }}
        
         _hover={{
          bg: "#0db9b9",
           boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
           transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
           
         }}
         
        
          >Apply now</Button>
              </Flex>
        </ModalBody>
       }

       {
        activated && <ModalBody textAlign={'center'}>
            <Text pt={7} lineHeight={"1.2"} fontSize={"20px"} fontWeight={"semibold"} >
            Done! Now access  <br/>
to start using it! 
            </Text>
            <Button
         backgroundColor={"#01FBFB"}
         color={"#000"}
         py={5}
         px={6}
         mt={9}
         mb={10}
         
        
         
         fontSize={{ base: "sm", md: "sm" }}
        
         _hover={{
          bg: "#0db9b9",
           boxShadow: "0 0 10px rgba(1, 251, 251, 0.7)",
           transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
           
         }}
         
        
          >Access Now</Button>
        </ModalBody>
       }
        </ModalContent>
      </Modal>
    );
  }
