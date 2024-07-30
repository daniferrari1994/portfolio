import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'
 
const theme = extendBaseTheme({
    components: {
    Button: chakraTheme.components,
    Tooltip: chakraTheme.components
    },
})

export default theme;
