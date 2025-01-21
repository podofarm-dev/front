import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <Grid2
    size={6}
    className="flex items-center justify-center "
    sx={{ gap: 12, mb: 15 }}
  >
    <img src={icon} alt={title} style={{ width: "192px", height: "192px" }} />
    <Box className="flex flex-col " sx={{ gap: 2 }}>
      <Typography
        variant="h2"
        sx={{ color: "#000000", whiteSpace: "pre-line" , width:400}}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#000000", whiteSpace: "pre-line" }}
      >
        {description}
      </Typography>
    </Box>
  </Grid2>
);

export default StepCard;
