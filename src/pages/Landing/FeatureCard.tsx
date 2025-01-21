import { Box, CardMedia, Typography } from "@mui/material";


interface FeatureCardProps {
  title: string;
  text: string;
  color: string;
}

const FeatureCard = ({ title, text, color }: FeatureCardProps) => (
  <Box
    className="flex flex-col items-center justify-center relative"
    sx={{
      width: "520px",
      height: "580px",
      background: "rgba(51, 51, 54, 0.5)",
      backdropFilter: "blur(12px)", // 블러 효과 추가
      WebkitBackdropFilter: "blur(12px)", // Safari 지원
      borderRadius: 4,
      p: 5,
    }}
  >
    <CardMedia
      className="absolute"
      src={color}
      component={"img"}
      sx={{
        top: -2,
        width: "180px",
        height: "4px",
        mb: 4,
      }}
    />
    <Typography
      variant="h1"
      sx={{
        color: "#FFFFFF",
        textAlign: "center",
        lineHeight: "200%",
        whiteSpace: "pre-line",
        mb: 3.5,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        color: "#9B9DA5",
        textAlign: "center",
        mt: 3,
        whiteSpace: "pre-line",
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default FeatureCard;
