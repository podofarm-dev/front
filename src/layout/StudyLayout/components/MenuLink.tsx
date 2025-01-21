import { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { CardMedia, Link, Typography } from "@mui/material";
import { MenuItemType } from "./MenuDrawer";
import { primaryColor } from "@/themes";
interface Props extends MenuItemType {
    // isMatched: boolean;
}
export default function MenuLink(props: Props) {
    const [matchedLink, setMatchedLink] = useState(false)
    const { label, icon, href } = props
    const location = useLocation();
    const toPath = href?.split("?")[0] || "";
    const matched = useMatch(toPath)
    useEffect(() => {
        setMatchedLink(!!matched)
    }, [location])
    console.log("TEST:::",matchedLink)
    return (
        <li>
            <Link
                href={href} target="_self"
                className="flex flex-col items-center"
                sx={{
                    borderRight: !!matchedLink
                        ? `3px solid ${primaryColor.default}`
                        : undefined,
                    bgcolor: !!matchedLink ? '#49495c' : undefined,
                    p: 2, gap: 1
                }}
            >
                <CardMedia component="img" src={icon} sx={{ width: 24, height: 24 }} />
                <Typography variant="body2">{label}</Typography>
            </Link>
        </li>
    )
}