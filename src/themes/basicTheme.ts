import { defaultTypographySize } from "./typographySize";

export const basicTheme = {
    typography: {
        ...defaultTypographySize
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#ffffff'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '40px'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none'
                }
            }
        }
    }
}