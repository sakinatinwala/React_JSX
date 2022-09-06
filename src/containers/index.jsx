import React from "react";
import  Tabs  from "@mui/material/Tabs";
import  Tab  from "@mui/material/Tab";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import  Box  from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import { Login } from "../components/SignIn";
import { SignUp } from "../components/LogIn";

export const SignInOutContainer = () => {
    const [value,setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const paperStyle={width:350, margin: "20px auto"}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return (
        <Paper elevation={20} style={paperStyle}>
            <Tabs 
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                >
                    <Tab label="Login" />
                    <Tab label="SignUp" />

                </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp />
            </TabPanel>

        </Paper>
    )
}