import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react'

import { switchAnatomy } from '@chakra-ui/anatomy'

import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { getCookieFromBrowser } from './cookies'



const { definePartsStyle, defineMultiStyleConfig } =
createMultiStyleConfigHelpers(switchAnatomy.keys)


const baseStyle = definePartsStyle({
  thumb: {
    bg: '#ffffff',
    _checked: {
      bg: '#ffffff',
    },
  },
  track: {
    bg: '#F3344B',

  },
})

const token = getCookieFromBrowser("token");
const switchTheme = defineMultiStyleConfig({ baseStyle })



const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  components: {

    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: 'unset',
            width: 'unset'
          }
        }
      }
    },
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: '#00CB33'
        },
        track: {
          border: '1px solid',
          borderColor: 'gray.300'
        }
      },
    },
    Checkbox: {
      baseStyle: {
        control:{
          borderColor: '#C3C3C4',
        
        }
      }
    },
    Input: {
      baseStyle: {
        field: {
          bg: '#fff',
          borderColor: '#01FBFB',
          border: '1px solid',
          ':focus': {
            borderColor: '#01FBFB',
          }
        }
      },
      variants: {},
      defaultProps: {
        variant: null // null here
      }
    },
    Switch: switchTheme,
 
  },
  styles: {

    
    
    global: (props) => ({
        body: {
          //bg: !!token? '#000': '#ffff',
          bg: '#000000',
          color: '#ffff',
          fontSize: {base: '12px', md: '14px'}
        },

    })
  },

})

export default theme
