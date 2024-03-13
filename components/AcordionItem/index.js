
import{
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';

export default function AccordionItemProps({title="", description=""}) {
return (

<AccordionItem
m={1.5}
my={3}
borderRadius={'10px'}
border={'1px solid #f0f2f5'}
padding={'0px 10px'}>
  
  <h2>
    <AccordionButton p={'10px 20px'}>
      <Box as="text" fontWeight={'400'}  flex='1' textAlign='left'>
      {title}
      </Box>
      <AccordionIcon  height={'40px'} width={'40px'}/>
    </AccordionButton>
  </h2>
  <AccordionPanel fontWeight={'500'} pb={4}>
  {description}
  </AccordionPanel>
</AccordionItem>

);
}
