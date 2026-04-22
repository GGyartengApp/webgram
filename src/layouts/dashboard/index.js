/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "../dashboard/SideBar";


const DashboardLayout = () => {

  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
