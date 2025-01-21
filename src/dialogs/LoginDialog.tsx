import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, styled } from "@mui/material"
import { Clear } from "@mui/icons-material"
import { dialogClose } from "@/modules/MuiDialog";


//a 태그 스타일
const SocialLoginLink = styled('a')({
    height: '70px',
    borderRadius: '6px',
    border: '1px solid',
    color: 'white',
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    display: 'flex',
    textTransform: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    textDecoration: 'none',
    cursor: 'pointer',
    width: '100%'
});


function LoginDialog() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Box className="absolute" sx={{ top: '35px', right: '33px', }}>
                <IconButton
                    onClick={() => {
                        dialogClose('login-dialog')
                    }}
                    sx={{ color: 'white', p: '0' }}
                >
                    <Clear />
                </IconButton>
            </Box>
            <DialogTitle className="flex flex-col items-center"
                sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    p: '0',
                    mb: '24px'
                }}
            >
                {/* 임시 로고 이미지 */}
                <Box className="flex items-center justify-center"
                    sx={{
                        width: '180px',
                        height: '60px',
                        backgroundColor: '#E0E0E0',
                        borderRadius: '6px',
                        color: '#333',
                        mb: '72px',
                        fontSize: '16px'
                    }}
                >
                    logo
                </Box>
                밀도에 오신 것을 환영합니다!
            </DialogTitle>

            <DialogContent sx={{ p: '0' }}>
                <DialogContentText
                    sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textAlign: 'center',
                        fontSize: '15px',
                        mb: '52px'
                    }}
                >
                    원하는 소셜 로그인으로 진행해 주세요.
                </DialogContentText>
            </DialogContent>

            <DialogActions sx={{ width: '100%', p: '0' }} >
                <SocialLoginLink
                    href="/social/:social"
                    rel="noopener noreferrer"
                >
                    <Box
                        component="img"
                        src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                        alt="Google"
                        sx={{
                            width: '30px',
                            height: '30px',
                            mr: '16px'
                        }}
                    />
                    Google 계정으로 로그인
                </SocialLoginLink>
            </DialogActions>
        </div>
    )
}

export default LoginDialog