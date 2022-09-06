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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const SignUp = () => {
  const paperStyle={padding:'20px', width:480, margin:"2% auto"}
  const headerStyle={margin:0}
  const [formData,setFormData] =React.useState({})
  const {register, resetField, formState: { errors } } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  const onSubmit = data => {
    setFormData(data)
  }
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
    
  }
  
  useEffect(()=>{
    console.log(formData)
  },[formData])

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
        <Paper style={paperStyle} elevation="10">
            <Grid align="center">
            <h2 style={headerStyle}> Sign Up :</h2>
            <Typography variant="caption">Please fill this form to create an account !</Typography> <br /> <br />
            </Grid>

            <form>
            <Box
            component="form"
            sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField fullWidth label='Name' required placeholder="Enter Name" 
                 {...register("firstName",{required:true,maxLength:20})}/> 
                {errors.example && <span> This field is required</span>}
                <TextField fullWidth label='Surname' required placeholder="Enter Surname"
                {...register("exampleSurname",{required:true})}/> <br />
                {errors.example && <span> This field is required</span>}
              </Box>
              <Box
            component="form"
            sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField fullWidth label='Email' required placeholder="Enter Email" 
                 {...register("exampleRequiredEmail", { required:true,pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })}/> 
                {errors.example && <span> Enter in this format :username@gmail.com</span>}
                <TextField fullWidth label='Password' required placeholder="Enter Password" type='password' 
                {...register("examplePwd",
                {required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}/> <br />
                {errors.example && <span> Should Contain one Capital aphabet,one numeric value and one alphanumeric value</span>}
                </Box>
                <FormControl component="fieldset">
                  <FormLabel component="legend" required>Gender </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" style={{display:"initial"}}>
                      <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                      <FormControlLabel value="Female" control={<Radio/>} label="Female" />
                      <FormControlLabel value="Other" control={<Radio/>} label="Other" />
                    </RadioGroup>
                </FormControl> <br /> <br />
                {errors.example && <span> This field is required</span>}

                <Box
            component="form"
            sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

      <FormControl fullWidth required>
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
      {errors.example && <span> This field is required</span>}

            <Button variant="contained" component="label" fullWidth>
              Photo Upload: <input type="file" hidden />
            </Button>
            </Box>

    <Box
            component="form"
            sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

   
      <FormControl fullWidth required>
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
    
    {errors.example && <span> This field is required</span>}
   
   
      <FormControl fullWidth required>
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
   
    {errors.example && <span> This field is required</span>}
</Box>

<Box
            component="form"
            sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

   
      <FormControl fullWidth required>
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
   
    {errors.example && <span> This field is required</span>}


    <TextareaAutosize
      label='Address' fullWidth required
      placeholder="Enter Address *"
      style={{ width: 215, height : 50}}
      {...register('exampleAddress',{
        required:true})}/> <br />
    {errors.example && <span>Write Your Full Address.</span>}
</Box>

                <FormControlLabel control={<Checkbox name="checkedA"/>}
                label="I accept the terms and conditions.." /> <br /> <br />
              <Grid align="center">
                <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>Sign Up</Button> <n/> <n/>
                <Button type="reset" variant="contained" color="primary" onClick={onResetForm}>Reset</Button>
                </Grid>
            </form>

        </Paper>

    </Grid>
  )
}