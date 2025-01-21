import { CardMedia, IconButton, Typography } from "@mui/material";
import { dialogClose } from ".";
import { Clear } from "@mui/icons-material";
import textLogo from "@/assets/images/mildo-logo-text.png";

interface Props {
  message?: string;
  dialogId: string;
}
const DialogHeader = ({ message = "", dialogId }: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div />
      {!!message && (
        <Typography variant="h2" textAlign="center">
          {message}
        </Typography>
      )}
      {!message && (
        <CardMedia
          src={textLogo}
          component={"img"}
          sx={{ width: 185, height: 54, objectFit: "cover", ml: 4 }}
        />
      )}
      <IconButton onClick={() => dialogClose(dialogId)}>
        <Clear />
      </IconButton>
    </div>
  );
};
export default DialogHeader;
