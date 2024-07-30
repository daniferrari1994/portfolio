import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'
 
const theme = extendBaseTheme({
    components: {
    Button: chakraTheme.components.Button,
    Card: chakraTheme.components.Card,
    Code: chakraTheme.components.Code,
    Container: chakraTheme.components.Container,
    Divider: chakraTheme.components.Divider,
    Heading: chakraTheme.components.Heading,
    Link: chakraTheme.components.Link,
    Tooltip: chakraTheme.components.Tooltip,
    },
})

export default theme;
