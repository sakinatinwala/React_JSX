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
import {Context} from "./Context";
import {useDispatch, useSelector} from "react-redux";

export const Login = (props) => {
  const count = useSelector((state)=> state.login);
  const login = useDispatch();

  let signupData = localStorage.getItem("data")
  const {fetchUsers} = Context()

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
        signupData = JSON.parse(signupData)
        alert(signupData.length)
        
      };
      
      return (
        <Grid>
          <h1>{count}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper style={paperStyle} elevation="10" >
            
            <Grid align='center'>  <h1> <u>Sign In :</u> </h1>   </Grid> <br />
            {JSON.stringify(fetchUsers)}
            <TextField fullWidth label='Email' placeholder="Enter Email" 
                 {...register("exampleRequiredEmail", { required:true})}/> 
                <span style={{color:'red'}}>{errors.email?.message} </span> <br /> <br />

            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth 
            {...register("examplePwd",
            {required:true})}/>
             <span style={{color:'red'}}>{errors.password?.message}</span>

            <FormControlLabel control={<Checkbox name = "checked" color="primary"/>}
                  label="Remember me" /> <br />

            <Button type="submit" color="primary" variant="contained" fullWidth onClick={() => {
              login({type:"Data"})
            }} > Sign In </Button> <br /> <br />
            
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