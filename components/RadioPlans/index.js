import { Badge, Box, Flex, HStack, Image, Radio, Text, VStack } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import SetLanguage from "../../src/contexts/language";

export default function RadioPlans({ activated = false, title = "", price = "" , products = "", value="", isChecked=false, functionExec, ilimited=false  , checkbox=true }) {

  const { allApiWithClientIP } = SetLanguage()
  const { t, i18n } = useTranslation();

  useEffect(() => {
    allApiWithClientIP();
  }, [])

return (
<Box
display={'flex'}
flexDirection={'column'}
borderRadius={10}
border={isChecked ? '3px solid #01FBFB': '3px solid #E4E4E4'}
p={5}
>
  <Box 
  display={'flex'} 
  justifyContent={'space-between'}
  flexDirection={{base:'row', md: 'row'}}
  alignItems={'start'}

  >
    <HStack   alignItems={'start'} gap={4}>
    <Box>
     {
      checkbox &&  <Radio
     
      isChecked={isChecked  === value}
      onChange={functionExec}
      border={'1px solid #D9DADD'}
      boxShadow='inset 0 0 0 1px white'
      size={'lg'}
      _focus={{
        // Focus styles
        boxShadow:'inset 0 0 0 1px white', // Remove focus outline
      }}
      _checked={{
        bg: '#01FBFB',
        borderColor: '#01FBFB',
        
      }}
      
      
      value={value}>
      </Radio>

     }

    </Box>
       <VStack align={'start'} spacing={4}>
      <Flex>
      <Text fontSize={"xl"} fontWeight={"semibold"}   mt={-2}>
          {title}
        </Text>
        {activated && (
      <Badge
          h={{base : '14px' , md : '20px'}}
          fontSize={{base : '9px' , md : '12px'}}
          ml={2}
   
          w={50}
          textAlign={"center"}
          borderRadius={8}
         
          backgroundColor={"blackAlpha.900"}
        >
          Ativo
      </Badge>
)}
      </Flex>
      
        <Text 
 fontWeight={'normal'}
ml={8}
fontSize={{base : 'xs' , md : 'md'}}
  
  >{t('plans.text9')}</Text>
       </VStack>
    </HStack>


    <Box display={'flex'}   alignItems={'center'} mt={-3} 
  // alignSelf={{base:'end', md: 'unset'}}

    >
      <Text fontSize={{base : '2xl' , md :'4xl'}} fontWeight={'medium'} mr={2}>R${price}</Text>
      <Text  mx={1} mt={2}
      fontWeight={'normal'}
    
    
      >{t('plans.text10')}</Text>
    </Box>

  </Box>



  {/* {ilimited && (
    <Box 
    mt={4}
    width={"100%"}
    borderRadius={4}
    color={'whiteAlpha.900'}
    backgroundColor={'#02b2aa'}
    display={'flex'}
    p={2}
    > 
    <Image src="/boom.gif" alt="boom" height={'19px'} width={'19px'} mx={2}></Image>
<Text > Produtos ILIMITADOS a partir do sétimo dia após a assinatura.</Text>
   </Box>

  )} */}
</Box>
  );
}
