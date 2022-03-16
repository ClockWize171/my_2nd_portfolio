import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f9fffb', '#023f49')(props)
        }
    })
}


const theme = extendTheme({ styles })
export default theme