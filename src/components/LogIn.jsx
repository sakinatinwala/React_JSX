import React from "react";
import { Grid,Paper, TextField, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { SignUp } from "./Register";
import { useForm } from "react-hook-form";
//import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {

      const paperStyle = {padding :"20px", height: '58vh',width : 300, margin : "2% auto"}
      
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).matches(/[a-zA-Z]/).required(),
      });

      const { handleSubmit, register,formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = (data) => {
        console.log(data);
        
      };
      
      return (
        <Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper style={paperStyle} elevation="10" >
            <Grid align='center'>  <h1> <u>Sign In :</u> </h1>   </Grid> <br />
           
            <TextField fullWidth label='Email' placeholder="Enter Email" 
                 {...register("exampleRequiredEmail", { required:true})}/> 
                <span style={{color:'red'}}>{errors.email?.message} </span> <br /> <br />

            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth 
            {...register("examplePwd",
            {required:true})}/>
             <span style={{color:'red'}}>{errors.password?.message}</span>

            <FormControlLabel control={<Checkbox name = "checked" color="primary"/>}
                  label="Remember me" /> <br />

            <Button type="submit" color="primary" variant="contained" fullWidth > Sign In </Button> <br /> <br />
            
                  <Typography> Do you have an account ? <n/> <n/>

                  <Link  href="#" onClick={<SignUp />} >
                    SignUp
                  </Link>
          
                 </Typography>
           
            </Paper>  
            </form>
           </Grid>
      )
}