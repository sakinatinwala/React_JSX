import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useForm  } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignUp = () => {
  const paperStyle={padding:'10px', width:500, margin:"2% auto"}
  const headerStyle={margin:0}
  const [formData,setFormData] =React.useState({})

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Surname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(8).max(32).matches(/[a-zA-Z]/).required(),
    Select_Age: yup.number().required(),
    Select_Country: yup.string().required(),
    Select_State: yup.string().required(),
    Select_City: yup.string().required(),
    Address: yup.string().required(),
  });

  const {register, resetField, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setFormData(data)
  };
  
  useEffect(()=>{
    console.log(formData)
  },[formData])

  const onResetForm = () => {
    resetField("firstName");
    resetField("exampleSurname");
    resetField('exampleRequiredEmail')
    resetField('examplePwd')
    resetField('exampleBday')
    resetField('exampleAddress')
    resetField('checkbox')
    resetField('Age')
    resetField('radio')
    resetField('exampleCountry')
    resetField('exampleState')
    resetField('exampleCity')
    
  }
  

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [city, setCity] = React.useState('');
  const handleChange1 = (event) => {
    setCity(event.target.value);
  };
  const [State, setState] = React.useState('');
  const handleChange2 = (event) => {
    setState(event.target.value);
  };
  const [Country, setCountry] = React.useState('');
  const handleChange3 = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper style={paperStyle} elevation="10">
            <Grid align="center">
            <h2 style={headerStyle}><u> Registration : </u></h2>
            <Typography variant="caption">Please fill this form to create an account !</Typography> <br /> <br />
            </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                <TextField fullWidth label='Name'  placeholder="Enter Name" 
                 {...register("examplefirstName",{required:true,maxLength:20})}/> 
                  <span style={{color:'red'}}>{errors.Name?.message}</span> 
                   </Grid>
                   <Grid item xs={6}>
                <TextField fullWidth label='Surname'  placeholder="Enter Surname"
                {...register("exampleSurname",{required:true})}/>
                 <span style={{color:'red'}}>{errors.Surname?.message}</span>
                 </Grid>
                 <Grid item xs={6}>
                <TextField fullWidth label='Email' placeholder="Enter Email" 
                 {...register("exampleRequiredEmail", { required :true})}/> 
                 <span style={{color:'red'}}> {errors.Email?.message}</span>
                 </Grid>
                 <Grid item xs={6}>
                <TextField fullWidth label='Password'  placeholder="Enter Password" type='password' 
                {...register("examplePwd",{required:true})}/>
                <span style={{color:'red'}}>{errors.Password?.message}</span>
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset" >
                  <FormLabel component="legend" >Gender :</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" style={{display:"initial"}}>
                      <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                      <FormControlLabel value="Female" control={<Radio/>} label="Female" />
                      <FormControlLabel value="Other" control={<Radio/>} label="Other" />
                    </RadioGroup>
                </FormControl> 
                </Grid>
                <Grid item xs={6}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange} 
        >
          <MenuItem value={10}>5</MenuItem>
          <MenuItem value={20}>6</MenuItem>
          <MenuItem value={30}>7</MenuItem>
          <MenuItem value={30}>8</MenuItem>
          <MenuItem value={30}>9</MenuItem>
          <MenuItem value={30}>10</MenuItem>
        </Select>
      </FormControl>
      <span style={{color:'red'}}>{errors.Select_Age?.message}</span>
      </Grid>

      <Grid item xs={6}>
            <Button variant="contained" component="label" fullWidth>
              Photo Upload: <input type="file" hidden />
            </Button>
            </Grid>

            <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Country}
          label="Country"
          onChange={handleChange3} 
        >
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>USA</MenuItem>
          <MenuItem value={30}>UAE</MenuItem>
          <MenuItem value={30}>Vietnam</MenuItem>
        
        </Select>
      </FormControl>
      <span style={{color:'red'}}>{errors.Select_Country?.message}</span>
     </Grid>
   
       <Grid item xs={6}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={State}
          label="State"
          onChange={handleChange2} 
        >
          <MenuItem value={10}>Gujarat</MenuItem>
          <MenuItem value={20}>Maharastra</MenuItem>
          <MenuItem value={30}>Madhya Pradesh</MenuItem>
          <MenuItem value={30}>Kerala</MenuItem>
          <MenuItem value={30}>Bihar</MenuItem>
        
        </Select>
      </FormControl>
      <span style={{color:'red'}}>{errors.Select_State?.message}</span>
      </Grid>


      <Grid item xs={6}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange1} 
        >
          <MenuItem value={10}>Ahmedabad</MenuItem>
          <MenuItem value={20}>Surat</MenuItem>
          <MenuItem value={30}>Mumbai</MenuItem>
          <MenuItem value={30}>Vadodra</MenuItem>
          <MenuItem value={30}>Pune</MenuItem>
        
        </Select>
      </FormControl>
      <span style={{color:'red'}}>{errors.Select_City?.message}</span>
      </Grid>

      <Grid item xs={6}>
    <TextareaAutosize
      label='Address' fullWidth 
      placeholder="Enter Address *"
      style={{ width: 215, height : 50}}
      {...register('exampleAddress',{
        required:true})}/> 
     <span style={{color:'red'}}>{errors.Address?.message}</span>
     </Grid>
                <Grid item xs={12}>
                <FormControlLabel control={<Checkbox name="checkedA"/>}
                label="I accept the terms and conditions.." /> 
                </Grid>
              <Grid item xs={6} align="center">
                <Button type="submit" variant="contained" color="primary" >Sign Up</Button> <n/> <n/>
                </Grid>
                <Grid item xs={6} align="center">
                <Button type="reset" variant="contained" color="primary" onClick={onResetForm}>Reset</Button>
                </Grid>
            </Grid>

        </Paper>
      </form>
    </Grid>
  )
}