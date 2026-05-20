"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={0}
      sx={{
        bgcolor: "#886ce8",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            src="/logoyouni.png"
            alt="Youni"
            sx={{ height: 36 }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderLeft: "1px solid rgba(255,255,255,0.3)",
              pl: 2,
            }}
          >
            <Avatar sx={{ bgcolor: "#fff", color: "#886ce8" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography
              variant="body2"
              sx={{ color: "#fff", display: { xs: "none", sm: "block" } }}
            >
              اسم المستخدم
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
