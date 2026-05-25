"use client";

import { useRouter } from "next/navigation";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ForgotPasswordPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        alignItems: "center",
        bgcolor: "#ede9fb",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          minHeight: { md: "100vh" },
          bgcolor: "#886ce8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: { xs: 2, md: 1 },
          borderRadius: {
            xs: "0 0 50px 50px",
            md: "45% 0 0 45%",
          },
          py: { xs: 8, md: 0 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, px: 4, color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, textAlign: "center", mb: 6 }}
          >
            نسيت كلمة المرور
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              type="email"
              placeholder="example@gmail.com"
              dir="ltr"
              slotProps={{
                input: {
                  sx: {
                    bgcolor: "#fff",
                    borderRadius: "12px",
                    "& fieldset": { border: "none" },
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  py: 2,
                  px: 2,
                },
              }}
            />

            <Typography
              sx={{ color: "#fff", fontSize: "0.75rem", textAlign: "right" }}
            >
              سيتم ارسال رمز تأكيدي الى عنوان البريد لاتمام عملية التسجيل
            </Typography>

            <Button
              onClick={() => router.push("/auth/otp")}
              sx={{
                bgcolor: "#ebedef",
                color: "#374151",
                fontWeight: 500,
                py: 2,
                borderRadius: "12px",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:hover": { bgcolor: "#d1d5db" },
                mt: 4,
              }}
            >
              تسجيل الدخول
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 6,
          order: { xs: 1, md: 2 },
        }}
      >
        <Box
          component="img"
          src="/logoyouni.png"
          alt="Youni Logo"
          sx={{ width: { xs: 200, md: 350 }, objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}
