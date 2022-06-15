import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Button } from "@mui/material";
import TextField from '../../components/TextField'
import { addUser } from './userSlice';
import { v4 as uuidv4 } from "uuid";
import './UserList.css'

const AddUser = () => {
    const [required, setRequired] = useState(false)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone: '',
        city: ""
    })

    const handleAddUser = () => {
      if (values.name && values.email && values.phone && values.city && values.email.match(mailformat)){
        setRequired(false)
        setValues({ name: "", email: "", phone: "", city: "" });
        dispatch(
          addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
            phone: values.phone,
            city: values.city,
          })
        );
        navigate("/");
      }
      else {
        setRequired(true)
      }
    }
  return (
    <div
      style={{
        marginTop: "5rem",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {required ? <div className="error">Please enter valid details!</div> : <p></p>}
      <div>
        <TextField
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: "text", placeholder: "John Doe" }}
        />
        <TextField
          label="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          inputProps={{ type: "email", placeholder: "JohnDoe@example.com" }}
        />
        <TextField
          label="Phone"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          inputProps={{ type: "email", placeholder: "JohnDoe@example.com" }}
        />
        <TextField
          label="city"
          value={values.city}
          onChange={(e) => setValues({ ...values, city: e.target.value })}
          inputProps={{ type: "email", placeholder: "JohnDoe@example.com" }}
        />
      </div>
      {/* <Button onClick={handleAddUser}>Submit</Button> */}
      <Button
        style={{ textDecoration: "none", color: "white", marginTop: "2rem" }}
        className="btn"
        onClick={handleAddUser}
      >
        Submit
      </Button>
    </div>
  );
}

export default AddUser