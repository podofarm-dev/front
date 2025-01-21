import { Box, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  size: number;
}

const TeamMember = ({ name, role, description, size }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid2
      size={size}
      className="flex flex-col items-center"
      sx={{ gap: 3, mb: 10 }}
    >
      <Box
        className="flex justify-center items-center"
        sx={{
          width: "289px",
          height: "293px",
          background: "#111119",
          border: "1px solid #FFFFFF",
          borderRadius: "50%",
          mb: 3,
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            border: "2px solid #1770FF",
            boxShadow: `
              inset 0 0 20px rgba(23, 112, 255, 0.4),
              inset 0 0 40px rgba(23, 112, 255, 0.2),
              0 0 20px rgba(23, 112, 255, 0.6),
              0 0 40px rgba(23, 112, 255, 0.4),
              0 0 60px rgba(23, 112, 255, 0.2)
            `,
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography
          variant="h1"
          sx={{
            whiteSpace: "pre-line",
            textAlign: "center",
            color: isHovered ? "#1770FF" : "#9B9DA5",
            transition: "color 0.3s ease",
          }}
        >
          {role}
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ color: "#FFFFFF", mb: 1 }}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#FFFFFF",
          textAlign: "center",
          width: "290px",
        }}
      >
        {description}
      </Typography>
    </Grid2>
  );
};

export default TeamMember;
