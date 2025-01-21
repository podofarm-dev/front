
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { DialogContainer } from "@/modules/MuiDialog";
import AppBar from "./components/AppBar";
import MenuDrawer from "./components/MenuDrawer";

export default function StudyLayout() {
    const [appBarHeight, setAppBarHeight] = useState(118)
    const [drawerWidth, setDrawWidth] = useState(240)
    const [drawerOpen, setDrawerOpen] = useState(true)
    const menuDrawerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!!menuDrawerRef.current) {
            setDrawWidth(menuDrawerRef?.current?.clientWidth || 0);
        }
    })
    const memoHeight = useMemo(() => appBarHeight, [appBarHeight])
    return (
        <>
            <Box className="flex flex-col" style={{
                flexGrow: 1,
                display: 'flex',
                scrollBehavior: 'smooth',
            }}>
                <AppBar setAppBarHeight={setAppBarHeight} />
                <MenuDrawer appBarHeight={memoHeight} ref={menuDrawerRef} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <Box sx={{
                    marginLeft: !!drawerOpen ? `${drawerWidth}px` : 0,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 0
                }}>
                    <Box component={'section'} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        zIndex: 10
                    }}>
                        <Outlet />
                        <ScrollRestoration
                            getKey={(location, matches) => {
                                return location.key;
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <DialogContainer />
        </>
    )
}