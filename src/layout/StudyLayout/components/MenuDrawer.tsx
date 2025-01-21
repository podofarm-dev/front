import userStore from "@/store/userStore";
import { LogoutOutlined } from "@mui/icons-material";
import { Box, Button, Drawer, List, Paper } from "@mui/material";
import { ReactElement, forwardRef, useEffect, useState } from "react";
import MenuLink from "./MenuLink";

import homeIcon from '@/assets/images/sidebar/home.png'
import currentIcon from '@/assets/images/sidebar/current.png'
import managementIcon from '@/assets/images/sidebar/management.png'
import { useParams } from "react-router-dom";

interface Props {
    append?: ReactElement,
    appBarHeight: number;
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
}
export interface MenuItemType {
    label: string;
    icon: any;
    href: string;
}
const MenuDrawer = ({ appBarHeight, drawerOpen, setDrawerOpen }: Props, ref: any) => {
    const { studyId: studyIdParam = '-' } = useParams()
    const studyId = userStore()?.studyId || studyIdParam || '-'
    const menuList: MenuItemType[] = [
        { label: '홈', icon: homeIcon, href: `/study/${studyId}/dashboard` },
        { label: '현황', icon: currentIcon, href: `/study/${studyId}/current-status?cpage=1` },
        { label: '관리', icon: managementIcon, href: `/study/${studyId}/management` },
    ]
    useEffect(() => {
        if (location.pathname.includes('study/search') || location.pathname.includes('current-status/code-detail')) {
            setDrawerOpen(false)
        } else {
            setDrawerOpen(true)
        }
    }, [window.location?.pathname])
    return (
        <Box>
            <Drawer
                PaperProps={{
                    ref: ref,
                    sx: {
                        width: 100, marginTop: `${appBarHeight}px`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderRight: '2px solid gray',
                    },
                    elevation: 0,
                }}
                variant="persistent"
                hideBackdrop={true} open={drawerOpen} sx={{ flexShrink: 0 }}
            >
                <Paper elevation={0} sx={{}}>
                    <List className="flex flex-col" sx={{ py: 0 }}>
                        {menuList.map((menu, idx) => {
                            return (
                                <MenuLink key={idx} {...menu} />
                            )
                        })}
                    </List>
                </Paper>
                {/* <Box sx={{
                    marginBottom: `${appBarHeight}px`,
                }}>
                    <Box sx={{
                        px: 2, py: 1,
                    }} className="flex items-center">
                        <Button
                            href={'/logout'}
                            startIcon={<LogoutOutlined />}
                        >로그아웃</Button>
                    </Box>
                </Box> */}
            </Drawer>
        </Box>
    )
}

export default forwardRef(MenuDrawer)