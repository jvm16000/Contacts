import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";
import './UserList.css'

const EditUser = () => {
  const [required, setRequired] = useState(false);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const users = useSelector((store) => store.users);
  console.log("test", users);
  const params = useParams();
  const existingUser = users.filter(user => user.id == params.id)
  console.log(existingUser);
  const { name, email, phone, city } = existingUser[0]
  const [values, setValues] = useState({
    name,
    email,
    phone,
    city
  });

  const handleEditUser = () => {
   if (
     values.name &&
     values.email &&
     values.phone &&
     values.city &&
     values.email.match(mailformat)
   ) {
     setValues({ name: "", email: "", phone: "", city: "" });
     dispatch(
       editUser({
         id: params.id,
         name: values.name,
         email: values.email,
         phone: values.phone,
         city: values.city,
       })
     );
     navigate("/");
   } else {
     setRequired(true);
   }
  };
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {required ? (
        <div className="error">Please enter valid details!</div>
      ) : (
        <p></p>
      )}
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
          inputProps={{ type: "text", placeholder: "1234567789" }}
        />
        <TextField
          label="city"
          value={values.city}
          onChange={(e) => setValues({ ...values, city: e.target.value })}
          inputProps={{ type: "text", placeholder: "Mumbai" }}
        />
      </div>
      {/* <Button onClick={handleAddUser}>Submit</Button> */}
      <Button
        className="btn"
        style={{ color: "white", marginTop: "2rem" }}
        onClick={handleEditUser}
      >
        Edit
      </Button>
    </div>
  );
};

export default EditUser;
