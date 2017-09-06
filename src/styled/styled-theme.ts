import createTheme from "styled-components-theme"
import defaultTheme from "./themes/default" // from Step #1

const theme = createTheme(...Object.keys(defaultTheme))
export default theme
