import DialogHeader from "@/modules/MuiDialog/DialogHeader"
import { Box, CardMedia, DialogContent, DialogTitle, Link, Typography } from "@mui/material"
import googleLogo from '@/assets/images/social/social-google.svg'
import { apiUrl, googleClientId } from "@/constant/configure"

const SocialLoginIDialog = () => {
    // id login-dialog
    return (
        <DialogContent className="flex flex-col items-center">
            <DialogHeader dialogId={'login-dialog'} />
            <Typography variant="h1" sx={{ mt: 9 }}>밀도에 오신 것을 환영합니다!</Typography>
            <Typography variant="body2" sx={{ mt: 3 }}>구글 로그인으로 진행해주세요.</Typography>
            <Link href={`${apiUrl}/llogin`}
                // target="_blank"
                className="flex items-center justify-center"
                sx={{
                    py: 2,
                    gap: 2,
                    border: '1px solid white',
                    borderRadius: '10px',
                    mt: 6.5,
                    width: '100%'
                }}
            >
                <CardMedia component="img" src={googleLogo} sx={{ width: '24px', height: '24px' }} />
                <Typography variant="body1">Google 계정으로 로그인</Typography>
            </Link>
            {/* <Link href={''} className="flex items-center justify-center" target="_blank"
                    sx={{
                        py: 1,
                        gap: 2,
                        border: '1px solid white',
                        borderRadius: '10px',
                        width: '512px',
                        mt: 2
                    }}
                >
                    <CardMedia component="img" src={googleLogo} sx={{ width: '24px', height: '24px' }} />
                    <Typography variant="body1">Google 계정으로 로그인</Typography>
                </Link> */}
        </DialogContent>
    )
}

export default SocialLoginIDialog