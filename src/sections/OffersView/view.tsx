"use client";

import { Box, Typography } from "@mui/material";

export default function OffersView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        العروض
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        إدارة العروض الترويجية والخصومات الحالية لفترات محدودة
      </Typography>
    </Box>
  );
}
