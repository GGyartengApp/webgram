import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data";
import Logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";


const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const {onToggleMode} = useSettings();
  console.log(theme);
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ height: "100%" }}
          spacing={3}

        ><Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 2.5,
            }}
          >
            <img src={Logo} alt="Webgram Logo" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-contents", color: "#fff" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{ width: "max-contents", color:theme.palette.mode ==="light" ? "#000" : theme.palette.text.primary  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              ),
            )}

            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: theme.palette.primary.main }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                }}
                sx={{ width: "max-content", color: theme.palette.mode ==="light" ? "#000" : theme.palette.text.primary }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

          <Stack spacing={4}>
          <Switch onChange={()=>{
            onToggleMode();
          }}
          defaultChecked />
            <Avatar src={"https://images.pexels.com/photos/36713391/pexels-photo-36713391.jpeg"} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
