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

/** 
  All of the routes for the page layout of NextJS Material Dashboard 2 PRO are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// @mui material components
import Icon from "@mui/material/Icon";

const pageRoutes = [
  {
    name: "dashboard",
    columns: 3,
    rowsPerColumn: 2,
    icon: <Icon>dashboard</Icon>,
    route: "/dashboard/home",
    collapse: [
      {
        name: "home",
        route: "/dashboard/home",
      },
      // {
      //   name: "charts",
      //   route: "/dashboard/charts",
      // },
    ],
  },
  {
    name: "users",
    icon: <Icon>people</Icon>,
    route: "/users/all-users",
    collapse: [
      {
        name: "all users",
        route: "/users/all-users",
      },
      {
        name: "new user",
        route: "/users/new-user",
      },
    ],
  },
  {
    name: "profile",
    icon: <Icon>person</Icon>,
    route: "/profile/profile-overview",
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/profile/profile-overview",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/profile/all-projects",
      },
    ],
  },
  {
    name: "authentication",
    icon: <Icon>lock</Icon>,
    route: "/authentication/sign-in",
    collapse: [
      {
        name: "sign in",
        route: "/authentication/sign-in",
      },
      {
        name: "reset password",
        route: "/authentication/reset-password",
      },
    ],
  },
  {
    name: "settings",
    icon: <Icon>settings</Icon>,
    route: "/settings",
  },
];

export default pageRoutes;
