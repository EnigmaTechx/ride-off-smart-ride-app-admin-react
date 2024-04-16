/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/pagesComponents/layouts/DashboardLayout";
import DashboardNavbar from "/pagesComponents/layouts/DashboardNavbar";
import Footer from "/pagesComponents/layouts//Footer";
import DefaultLineChart from "/examples/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "/examples/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "/examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "/examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "/examples/Charts/MixedChart";
import BubbleChart from "/examples/Charts/BubbleChart";
import DefaultDoughnutChart from "/examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "/examples/Charts/PieChart";
import RadarChart from "/examples/Charts/RadarChart";
import PolarChart from "/examples/Charts/PolarChart";

// Data
import defaultLineChartData from "/pagesComponents/dashboard/charts/data/defaultLineChartData";
import gradientLineChartData from "/pagesComponents/dashboard/charts/data/gradientLineChartData";
import verticalBarChartData from "/pagesComponents/dashboard/charts/data/verticalBarChartData";
import horizontalBarChartData from "/pagesComponents/dashboard/charts/data/horizontalBarChartData";
import mixedChartData from "/pagesComponents/dashboard/charts/data/mixedChartData";
import bubbleChartData from "/pagesComponents/dashboard/charts/data/bubbleChartData";
import defaultDoughnutChartData from "/pagesComponents/dashboard/charts/data/defaultDoughnutChartData";
import pieChartData from "/pagesComponents/dashboard/charts/data/pieChartData";
import radarChartData from "/pagesComponents/dashboard/charts/data/radarChartData";
import polarChartData from "/pagesComponents/dashboard/charts/data/polarChartData";

import { useEffect, useState } from "react";

function Charts() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId") || null);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar userId={userId} />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
              <MDTypography variant="h5">Charts</MDTypography>
              <MDTypography variant="button" color="text">
                Charts on this page use Chart.js - Simple yet flexible
                JavaScript charting for designers & developers.
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultLineChart
                icon={{ component: "insights" }}
                title="Line chart"
                description="Product insights"
                chart={defaultLineChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GradientLineChart
                icon={{ component: "show_chart" }}
                title="Line chart with gradient"
                description="Visits from devices"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VerticalBarChart
                icon={{ color: "info", component: "leaderboard" }}
                title="Bar chart"
                description="Sales related to age average"
                chart={verticalBarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HorizontalBarChart
                icon={{ color: "info", component: "splitscreen" }}
                title="Bar chart horizontal"
                description="Sales related to age average"
                chart={horizontalBarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MixedChart
                icon={{ color: "primary", component: "auto_graph" }}
                title="Mixed chart"
                description="Analytics Insights"
                height="19.75rem"
                chart={mixedChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BubbleChart
                icon={{ color: "primary", component: "multiline_chart" }}
                title="Bubble chart"
                description="Users divided by regions"
                chart={bubbleChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultDoughnutChart
                icon={{ color: "success", component: "donut_small" }}
                title="Doughnut chart"
                description="Affiliates program"
                chart={defaultDoughnutChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PieChart
                icon={{ color: "success", component: "donut_small" }}
                title="Pie chart"
                description="Analytics Insights"
                chart={pieChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RadarChart
                icon={{ color: "warning", component: "data_saver_on" }}
                title="Radar chart"
                description="Sciences score"
                chart={radarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PolarChart
                icon={{ color: "warning", component: "scatter_plot" }}
                title="Polar chart"
                description="Analytics Insights"
                chart={polarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
