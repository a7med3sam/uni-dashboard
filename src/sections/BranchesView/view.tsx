"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  InputAdornment,
  Button,
  Chip,
} from "@mui/material";
import SharedTable from "src/components/SharedTable/SharedTable";
import Iconify from "src/components/iconify";

// Define TypeScript interface for the Branch data
interface Branch {
  id: string;
  branchNumber: string;
  name: string;
  address: string;
  status: "active" | "inactive";
}

// Dummy data for branches
const DUMMY_BRANCHES: Branch[] = [
  {
    id: "1",
    branchNumber: "BR-001",
    name: "فرع الرياض الرئيسي",
    address: "طريق الملك فهد، العليا، الرياض",
    status: "active",
  },
  {
    id: "2",
    branchNumber: "BR-002",
    name: "فرع جدة - شارع التحلية",
    address: "شارع التحلية، الروضة، جدة",
    status: "active",
  },
  {
    id: "3",
    branchNumber: "BR-003",
    name: "فرع الدمام - الكورنيش",
    address: "طريق الخليج، الشاطئ، الدمام",
    status: "inactive",
  },
  {
    id: "4",
    branchNumber: "BR-004",
    name: "فرع مكة المكرمة",
    address: "طريق الهجرة، بطحاء قريش، مكة المكرمة",
    status: "active",
  },
  {
    id: "5",
    branchNumber: "BR-005",
    name: "فرع المدينة المنورة",
    address: "طريق سلطانة، المدينة المنورة",
    status: "inactive",
  },
];

// Define table headers mapped to the messages translations
const TABLE_HEAD = [
  { id: "branchNumber", label: "Branches.branchNumber" },
  { id: "name", label: "Branches.branchName" },
  { id: "address", label: "Branches.address" },
  { id: "status", label: "Branches.status" },
];

export default function BranchesView() {
  const [searchQuery, setSearchQuery] = useState("");

  // Search logic: filters the list based on query
  const filteredData = DUMMY_BRANCHES.filter((branch) =>
    branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.branchNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Actions for the popover menu of each row
  const actions = [
    {
      label: "Global.Actions.edit",
      icon: <Iconify icon="solar:pen-bold" />,
      onClick: (row: Branch) => {
        console.log("Edit branch:", row);
      },
    },
    {
      label: "Global.Actions.delete",
      icon: <Iconify icon="solar:trash-bin-trash-bold" />,
      sx: { color: "error.main" },
      onClick: (row: Branch) => {
        console.log("Delete branch:", row);
      },
    },
  ];

  // Custom renders for the cells in the table
  const customRender = {
    branchNumber: (row: Branch) => (
      <Typography
        variant="body2"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "primary.main",
        }}
      >
        {row.branchNumber}
      </Typography>
    ),
    status: (row: Branch) => {
      const active = row.status === "active";
      return (
        <Chip
          label={active ? "نشط" : "غير نشط"}
          sx={{
            fontWeight: 600,
            borderRadius: "8px",
            bgcolor: active ? "rgba(76, 175, 80, 0.12)" : "rgba(145, 158, 171, 0.12)",
            color: active ? "rgb(56, 142, 60)" : "rgb(99, 115, 129)",
            border: "none",
          }}
        />
      );
    },
  };

  return (
    <Box>
      {/* Header section with title and quick actions */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexDirection: { xs: "column", sm: "row-reverse" },
          gap: 2,
        }}
      >
        <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            إدارة الفروع
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            تصفح وإدارة فروع الشركة والمواقع المختلفة
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Iconify icon="solar:plus-circle-bold" />}
          sx={{
            bgcolor: "primary.main",
            borderRadius: "10px",
            fontWeight: 600,
            boxShadow: "0 8px 16px 0 rgba(0, 125, 252, 0.24)",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          إضافة فرع جديد
        </Button>
      </Box>

      {/* Main Card with Toolbar and Table */}
      <Card
        sx={{
          borderRadius: "20px",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* Table Toolbar */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            bgcolor: "#fff",
          }}
        >
          {/* Dynamic Search Box */}
          <TextField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن فرع (الاسم، الرمز، العنوان)..."
            dir="rtl"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="solar:magnifer-linear" sx={{ color: "text.disabled" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: { xs: "100%", sm: 360 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                textAlign: "right",
                fontFamily: "inherit",
              },
            }}
          />

          {/* <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<Iconify icon="solar:filter-linear" />}
              sx={{
                borderRadius: "10px",
                fontWeight: 600,
                borderColor: "rgba(0, 0, 0, 0.12)",
              }}
            >
              تصفية
            </Button>
          </Box> */}
        </Box>

        {/* Shared Table Component */}
        <SharedTable<Branch>
          data={filteredData}
          count={filteredData.length}
          tableHead={TABLE_HEAD}
          actions={actions}
          customRender={customRender}
        />
      </Card>
    </Box>
  );
}
