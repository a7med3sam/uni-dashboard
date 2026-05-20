"use client";

import { Box, Typography } from "@mui/material";

export default function SupportView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        الدعم الفني
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        استعراض تذاكر الدعم والشكاوى وحل مشاكل المشتركين
      </Typography>
    </Box>
  );
}
