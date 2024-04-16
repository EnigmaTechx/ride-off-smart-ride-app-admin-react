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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/pagesComponents/layouts/DashboardLayout";
import DashboardNavbar from "/pagesComponents/layouts/DashboardNavbar";
import Footer from "/pagesComponents/layouts/Footer";
import ComplexStatisticsCard from "/pagesComponents/dashboard/home/components/ComplexStatisticsCard";

// Data
import reportsBarChartData from "/pagesComponents/dashboard/home/data/reportsBarChartData";
import reportsLineChartData from "/pagesComponents/dashboard/home/data/reportsLineChartData";

// Chart configurations
import VerticalBarChart from "/pagesComponents/dashboard/home/components/VerticalBarChart";
import verticalBarChartData from "/pagesComponents/dashboard/charts/data/verticalBarChartData";
import PieChart from "/pagesComponents/dashboard/home/components/PieChart";
import pieChartData from "/pagesComponents/dashboard/charts/data/pieChartData";
// import fetchData from "/services/userService";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dataTableData from "/pagesComponents/users/all-users/data/dataTableData";
import ridersDataTable from "/pagesComponents/users/all-users/data/ridersData";

function Home() {
  const { sales, tasks } = reportsLineChartData;
  const router = useRouter();
  const [users, setUsers] = useState(null);
  const [riders, setRiders] = useState(null);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(localStorage.getItem("userId") || null);
    if (userId === null) {
      router.replace("/authentication/sign-in");
    }
    const getUsers = async () => {
      const data = await dataTableData();
      setUsers(data.rows);
      const ridersData = await ridersDataTable();
      setRiders(ridersData.rows);
      let newData = [data.rows.length, ridersData.rows.length];
    };

    getUsers();
  }, []);

  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography
          variant="body1"
          color="dark"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar userId={userId} />
      <MDBox py={2}>
        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Total Rides"
                  count="12"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="info"
                  icon="leaderboard"
                  title="Riders"
                  count={riders ? riders.length : 0}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Users"
                  count={users ? users.length : 0}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* ---Charts Start--- */}
        <MDBox mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VerticalBarChart
                icon={{ color: "info", component: "leaderboard" }}
                title="Rides"
                description="Number of rides this week"
                chart={verticalBarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {pieChartData && (
                <PieChart
                  icon={{ color: "primary", component: "person_add" }}
                  title="Users"
                  description="Number of users"
                  chart={pieChartData}
                />
              )}
            </Grid>
          </Grid>
        </MDBox>
        {/* ---Charts End--- */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Home;
