import {
  AppBar as MuiAppBar,
  Toolbar,
  CardMedia,
  Link,
} from "@mui/material";
import { useEffect, useRef } from "react";
import textLogo from "@/assets/images/mildo-logo-text.png";
const AppBar = (props: any) => {
  const { setAppBarHeight } = props;
  const elRef = useRef<HTMLDivElement>(null);

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
        className="flex items-center justify-between"
        sx={{
          bgcolor: "#111119",
          borderBottom: "1px solid white",
          height: "118px",
        }}
      >
        <Link href={"/"}>
          <CardMedia
            src={textLogo}
            component={"img"}
            sx={{ width: "150px", objectFit: "cover", ml: 4 }}
          />
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
