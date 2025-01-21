import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

const greenTheme = createTheme({
    ...basicTheme,
    palette: {
        mode: 'dark',
        background: {
            default: '#111119'
        },
        primary: {
            main: '#1fc62a',
        }
    },
})

export default greenTheme