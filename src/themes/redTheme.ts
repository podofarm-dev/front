import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

const redTheme = createTheme({
    ...basicTheme,
    palette: {
        mode: 'dark',
        background: {
            default: '#111119'
        },
        primary: {
            main: '#ff3f3f',
        }
    }
})

export default redTheme