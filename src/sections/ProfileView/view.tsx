"use client";

import { Box, Typography } from "@mui/material";

export default function ProfileView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        الملف الشخصي
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        إدارة إعدادات حسابك الشخصي وكلمة المرور وصورة الملف الشخصي
      </Typography>
    </Box>
  );
}
