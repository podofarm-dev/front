import { Box, Button, CardMedia, Typography } from "@mui/material"
import searchImage from '@/assets/images/study-search.png'
import searchIcon from '@/assets/images/search.png'
import addIcon from '@/assets/images/add.png'
import { dialogOpen } from "@/modules/MuiDialog"
import StudyDialog from "@/dialogs/StudyDialog"

export default () => {
    return (
        <Box className="flex flex-col items-center justify-center"
            sx={{ height: '70vh', flexGrow: 1 }}
        >
            <CardMedia component="img" src={searchImage} sx={{ width: '15%' }} />
            <Typography variant="subtitle1" sx={{ mt: 7.5, mb: 9.5 }}>참여 중인 스터디가 없습니다.</Typography>
            <Box className="flex items-center justify-center" sx={{ gap: 2 }}>
                <Button variant="outlined"
                    startIcon={<CardMedia src={searchIcon} component={'img'} sx={{ width: '30px' }} />}
                    sx={{ py: 2, px: 4, borderRadius: '58px' }}
                    onClick={() => {
                        dialogOpen({
                            id: 'study-dialog',
                            innerElement: <StudyDialog dialogId="study-dialog" title="스터디 참여하기" label="스터디 코드" />
                        })
                    }}
                >
                    <Typography variant="subtitle2">스터디 참여하기</Typography>
                </Button>
                <Button variant="contained"
                    startIcon={<CardMedia src={addIcon} component={'img'} sx={{ width: '30px' }} />}
                    sx={{ py: 2, px: 4, borderRadius: '58px' }}
                    onClick={() => {
                        dialogOpen({
                            id: 'study-dialog',
                            innerElement: <StudyDialog dialogId="study-dialog" title="스터디 생성하기" label="스터디명" />
                        })
                    }}
                >
                    <Typography variant="subtitle2">스터디 생성하기</Typography>
                </Button>
            </Box>
        </Box>
    )
}