// import * as Yup from 'yup';
import { useState } from 'react';
// import { Icon } from '@iconify/react';
// import { useFormik, Form, FormikProvider } from 'formik';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ name: "", email: "", rollno: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/user/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "POST",
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: cred.name, email: cred.email, rollno: cred.rollno })
    });
    const json = await response.json();
    // console.log(json);



    if (json.success === true) {
      setTimeout(() => {
        toast.success("User Created Successfully", {
          position: "top-center"
        });
      }, 100);
      setTimeout(() => {
        // localStorage.setItem("name", JSON.stringify(cred.name));
        // localStorage.setItem("email", JSON.stringify(cred.email));
        // localStorage.setItem("rollno", JSON.stringify(cred.rollno));
        // localStorage.setItem('token', json.authToken);
        navigate('/login', { replace: true });
      }, 5000);
    }
    else {
      toast.warn("Invalid Credentials", {
        position: "top-center"
      });
    }
  }
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField fullWidth label="User Name" type="text" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
          <TextField fullWidth label="Email address" type="email" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
          <TextField fullWidth label="Roll No." type="text" id="rollno" name="rollno" aria-describedby="emailHelp" onChange={onChange} />
          <LoadingButton fullWidth size="large" type="submit" variant="contained">
            Register...
          </LoadingButton>
        </Stack>
        <ToastContainer />
      </form>
    </>
  );
}
