"use client";

import { Box, Typography } from "@mui/material";

export default function PackagesView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        الباقات
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        تكوين وبناء باقات الاشتراكات والمميزات المقدمة
      </Typography>
    </Box>
  );
}
