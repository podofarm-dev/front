import { Box, CardMedia, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import error404 from '@/assets/images/error/404.png';
import error401 from '@/assets/images/error/401.png';
import error500 from '@/assets/images/error/500.png';

function ErrorComponent() {
    const err: any = useRouteError();
    const errStatus: any = err?.status || err?.statusCode || 'default'
    const preset: Record<number | string, {
        title: string,
        message: string,
        image: any
    }> = {
        404: {
            title: '페이지를 찾을 수 없습니다.',
            message: '페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.\n입력하신 주소가 정확한지 다시 한 번 확인해 주세요.',
            image: error404
        },
        401: {
            title: '권한이 없는 페이지입니다.',
            message: '권한이 없거나, 사용할 수 없는 페이지입니다.\n로그인 정보를 다시 한 번 확인해 주세요.',
            image: error401
        },
        500: {
            title: '페이지에 접속할 수 없습니다.',
            message: '서비스 점검 중이거나 에러가 발생했습니다.\n잠시 후 다시 방문해주세요.',
            image: error500
        },
        default: {
            title: '오류가 발생했습니다.',
            message: '오류가 발생했습니다.\n잠시 후 다시 방문해주세요.',
            image: error500
        }
    }
    return (
        <Box className="flex items-center justify-center w-full h-full"
            sx={{
                minHeight: '50vh'
            }}
        >
            <Box className="flex flex-col items-center justify-center" sx={{ gap: 4 }}>
                <CardMedia
                    component="img"
                    image={preset[errStatus]?.image}
                    sx={{
                        width: '30%',
                        height: '30%',
                        objectFit: 'contain'
                    }}
                />
                <Typography variant="h1">{preset[errStatus]?.title}</Typography>
                <Typography variant="subtitle2"
                    sx={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap'
                    }}
                >{preset[errStatus]?.message}</Typography>
            </Box>
        </Box>
    )
}

export default ErrorComponent;