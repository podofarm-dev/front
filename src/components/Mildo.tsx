// Mildo.tsx
import { currentColor } from "@/themes";
import { Tooltip, Typography } from "@mui/material";

export interface MildoProps {
  count: number;
  tooltipDate?: string; // optional prop 추가
}

export default function Mildo({ count = 0, tooltipDate }: MildoProps) {
  let currentBg = `${currentColor}`;

  if (count <= 0) {
    currentBg = `#333333 `;
  } else if (count <= 1) {
    currentBg = `${currentColor}33`;
  } else if (count <= 2) {
    currentBg = `${currentColor}66`;
  } else if (count <= 3) {
    currentBg = `${currentColor}99`;
  } else if (count <= 4) {
    currentBg = `${currentColor}CC`;
  } else if (count <= 5) {
    currentBg = `${currentColor}FF`;
  }

  const baseComponent = (
    <div
      style={{
        backgroundColor: currentBg,
        borderRadius: "5px",
        width: "28px",
        height: "28px",
        marginRight: "4px",
      }}
    />
  );

  if (tooltipDate) {
    return (
      <Tooltip
        title={
          <Typography variant="caption">
            {tooltipDate}, {count}개
          </Typography>
        }
        arrow
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "#1B1B23",
              "& .MuiTooltip-arrow": {
                color: "#1B1B23",
              },
              borderRadius: "13px",
              padding: "8px 12px",
            },
          },
        }}
      >
        {baseComponent}
      </Tooltip>
    );
  }

  return baseComponent;
}