import React from "react";
import { Grid,Paper, TextField, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { SignUp } from "./LogIn";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const Login = () => {

      const paperStyle = {padding :"20px", height: '50vh',width : 300, margin : "5% auto"}
      const [formData,setFormData] =React.useState({})

      const { register,formState: { errors } } = useForm({
      defaultValues: {
      checkbox: false,
      }
     });
      const onSubmit = data => {
      setFormData(data)
      }
      useEffect(()=>{
      console.log(formData)
      },[formData]) 
  
      return (
        <Grid>
            <Paper style={paperStyle} elevation="10" >
            <Grid align='center'>  <h2> Sign In : </h2>   </Grid> <br />
           
            <TextField label='Username' placeholder='Enter Username' fullWidth required
            {...register("firstName",{required:true,maxLength:20})}/> <br /> <br />
           {errors.example && <span> This field is required</span>}

            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required
            {...register("examplePwd",
            {required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}/>
            {errors.examplePwd&&<span>Should Contain one Capital aphabet,one numeric value and one alphanumeric value</span>} <br />

            <FormControlLabel

                  control={
                    <Checkbox
                        name = "checked"
                        color="primary"
                    /> 
                  }
                  label="Remember me"
            />

            <Button type="submit" color="primary" variant="contained" fullWidth onClick={onSubmit}> Sign In </Button> <br /> <br />
            
            <Typography> Do you have an account ? <n/> <n/>

                  <Link href="#" onClick={<SignUp />}>
                    SignUp
                  </Link>
          
            </Typography>
           
            </Paper>  
        </Grid>
      )
}