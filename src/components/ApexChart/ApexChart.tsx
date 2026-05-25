"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import type { Props } from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

/**
 * ApexCharts can throw when mask/gradient animations run after unmount
 * (e.g. Fast Refresh). Render only after mount and disable animations.
 */
export default function ApexChart({
  options = {},
  height,
  width,
  ...rest
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeOptions = {
    ...options,
    chart: {
      ...(options.chart ?? {}),
      animations: {
        ...(options.chart?.animations ?? {}),
        enabled: false,
      },
      redrawOnParentResize: true,
    },
  };

  const chartHeight =
    typeof height === "number" ? height : options.chart?.height ?? 300;

  if (!mounted) {
    return (
      <Box
        sx={{
          width: width ?? "100%",
          minHeight: chartHeight,
        }}
      />
    );
  }

  return (
    <ReactApexChart
      options={safeOptions}
      height={height}
      width={width}
      {...rest}
    />
  );
}
