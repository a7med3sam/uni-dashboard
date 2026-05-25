"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import CustomPopover, { usePopover } from "src/components/custom-popover";
import {
  NOTIFICATIONS,
  TYPE_CONFIG,
  type NotificationItem,
} from "./notification-mock";
import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";

export default function NotificationsPopover() {
  const popover = usePopover();
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => n.isUnRead).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnRead: false })));
  };

  const handleItemClick = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnRead: false } : n)),
    );
  };

  return (
    <>
      <IconButton color="inherit" onClick={popover.onOpen}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <NotificationsIcon />
          {unreadCount > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: -2,
                right: -4,
                width: 18,
                height: 18,
                borderRadius: "50%",
                bgcolor: "error.main",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              {unreadCount}
            </Box>
          )}
        </Box>
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-right"
        sx={{ width: 380, maxHeight: 520, borderRadius: "16px" }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              الإشعارات
            </Typography>

            {unreadCount > 0 && (
              <Button
                size="small"
                onClick={handleMarkAllRead}
                sx={{
                  textTransform: "none",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "primary.main",
                  "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                }}
              >
                تعيين الكل مقروء
              </Button>
            )}
          </Box>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ maxHeight: 360, minHeight: 200 }}>
          {notifications.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 6,
                gap: 1,
              }}
            >
              <Iconify icon="eva:bell-off-outline" width={40} sx={{ color: "text.disabled" }} />
              <Typography variant="body2" sx={{ color: "text.disabled" }}>
                لا توجد إشعارات
              </Typography>
            </Box>
          ) : (
            notifications.map((item) => (
              <NotificationRow
                key={item.id}
                item={item}
                onClick={() => handleItemClick(item.id)}
              />
            ))
          )}
        </Scrollbar>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1.5, textAlign: "center" }}>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "text.secondary",
              "&:hover": { bgcolor: "transparent", color: "primary.main" },
            }}
          >
            عرض كل الإشعارات
          </Button>
        </Box>
      </CustomPopover>
    </>
  );
}

function NotificationRow({
  item,
  onClick,
}: {
  item: NotificationItem;
  onClick: () => void;
}) {
  const config = TYPE_CONFIG[item.type];

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        gap: 1.5,
        px: 2,
        py: 1.5,
        cursor: "pointer",
        bgcolor: item.isUnRead ? "rgba(136, 108, 232, 0.06)" : "transparent",
        transition: "background-color 0.2s",
        "&:hover": { bgcolor: "rgba(136, 108, 232, 0.1)" },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: `${config.color}14`,
          flexShrink: 0,
          mt: 0.3,
        }}
      >
        <Iconify icon={config.icon} width={20} sx={{ color: config.color }} />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: item.isUnRead ? 700 : 500,
              fontSize: "0.85rem",
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </Typography>
          {item.isUnRead && (
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#886ce8",
                flexShrink: 0,
              }}
            />
          )}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.8rem",
            lineHeight: 1.4,
            mt: 0.3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.description}
        </Typography>

        <Typography
          variant="caption"
          sx={{ color: "text.disabled", fontSize: "0.7rem", mt: 0.5, display: "block" }}
        >
          {formatDistanceToNow(item.createdAt, { addSuffix: true, locale: ar })}
        </Typography>
      </Box>
    </Box>
  );
}
