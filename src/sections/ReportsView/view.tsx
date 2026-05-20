"use client";

import { Box, Typography } from "@mui/material";

export default function ReportsView() {
  return (
    <Box sx={{ textAlign: "right" }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        التقارير
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        عرض الرسوم البيانية وإحصائيات الأداء والتقارير المالية والتشغيلية
      </Typography>
    </Box>
  );
}
