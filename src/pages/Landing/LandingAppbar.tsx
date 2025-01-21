import {
  AppBar as MuiAppBar,
  Toolbar,
  CardMedia,
  Link,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useRef } from "react";
import textLogo from "@/assets/images/mildo-logo-text.png";
import { DialogContainer, dialogOpen } from "@/modules/MuiDialog";
import SocialLoginIDialog from "@/dialogs/SocialLoginIDialog";
import downloadIcon from "@/assets/images/landing/download.png";
import sessionStore from "@/store/useSession";
import { useNavigate } from "react-router-dom";

const LandingAppBar = (props: any) => {
  const { setAppBarHeight } = props;
  const elRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStore.getState()["access_token"];
  useEffect(() => {
    if (!!elRef.current) {
      setAppBarHeight(elRef?.current?.clientHeight || 118);
    }
  }, [elRef]);
  return (
    <MuiAppBar
      ref={elRef}
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "white",
        flexShrink: 0,
      }}
    >
      <Toolbar
        className="flex items-center justify-center"
        sx={{
          bgcolor: "#111119",
          height: "118px",
        }}
      >
        <div className="flex items-center justify-between w-full" style={{ maxWidth: '2000px' }}>

          <Link href={"/"}>
            <CardMedia
              src={textLogo}
              component={"img"}
              sx={{ width: "150px", objectFit: "cover", ml: 4 }}
            />
          </Link>

          <Box sx={{ display: "flex", gap: 2.5, mr: 5 }}>
            <Button
              variant="outlined"
              startIcon={
                <CardMedia
                  src={downloadIcon}
                  component={"img"}
                  sx={{ width: 32, height: 32, mr: 0.5 }}
                />
              }
              onClick={() => {
                window.open(
                  "https://chromewebstore.google.com/detail/밀도mildo/kmleenknngfkjncchnbfenfamoighddf?hl=ko",
                  "_blank"
                );
              }}
              sx={{
                width: 228,
                height: 54,
                borderRadius: 1.5,
                color: "white",
              }}
            >
              확장프로그램 설치
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: 140, height: 54, borderRadius: 1.5, mr: 5 }}
              onClick={() => {
                if (!!isLoggedIn) {
                  navigate('study/search')
                } else {
                  dialogOpen({
                    id: "login-dialog",
                    innerElement: <SocialLoginIDialog />,
                  });
                }
              }}
            >
              {!!isLoggedIn ? '스터디 이동' : '로그인'}
            </Button>
          </Box>
        </div>
      </Toolbar>
      <DialogContainer />
    </MuiAppBar>
  );
};

export default LandingAppBar;
