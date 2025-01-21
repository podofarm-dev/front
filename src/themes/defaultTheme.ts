import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

const defaultTheme = createTheme({
    ...basicTheme,
    palette: {
        mode: 'dark',
        background: {
            default: '#111119'
        },
        primary: {
            main: '#015eff'
        }
    },
})

export default defaultTheme
