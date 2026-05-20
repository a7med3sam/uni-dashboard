"use client";

import { Box, Typography } from "@mui/material";

export default function HomeView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        الرئيسية
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        أهلاً بك في لوحة تحكم Youni. استعرض ملخص العمليات والإحصائيات العامة.
      </Typography>
    </Box>
  );
}
