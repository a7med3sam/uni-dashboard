"use client";

import { Box, Typography } from "@mui/material";

export default function AdvertisementsView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        الإعلانات
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        إدارة الحملات الإعلانية والبنرات الترويجية النشطة
      </Typography>
    </Box>
  );
}
