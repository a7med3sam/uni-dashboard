"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Iconify from "src/components/iconify";
import NotificationsPopover from "src/components/NotificationsPopover";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          <Iconify icon="emojione:flag-for-saudi-arabia" width={30} />

          <NotificationsPopover />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderLeft: "1px solid rgba(255,255,255,0.3)",
              pl: 2,
              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          >
            <Avatar src="/3d.png" sx={{ width: 36, height: 36, border: "2px solid #fff", }} />
            <Typography
              variant="body2"
              sx={{ color: "#fff", display: { xs: "none", sm: "block" } }}
            >
              المستخدم
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 180,
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            router.push("/auth/login");
          }}
        >
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>تسجيل الدخول</ListItemText>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
