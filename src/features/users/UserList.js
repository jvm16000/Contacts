import React from 'react'
import { Button } from "@mui/material"; 
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userSlice';
import MainHeader from '../../components/MainHeader';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiFillCaretDown } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import './UserList.css';

const UserList = () => {
  
  const users = useSelector(store => store.users);
  const dispatch = useDispatch()
//----------------
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //---------------
  console.log(users);

  const handleRemove = (id) => {
    dispatch(deleteUser({ id: id }))
  }
  const renderCard = () =>
    users.map((user) => (
      <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        <Accordion
          className="acc"
          expanded={expanded !== "panel1"}
          // onChange={handleChange("panel1")}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
          }}
        >
          <div>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginBottom:"-1rem",
                  marginTop:"-1rem"
                }}
              >
                {user.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: "contents" }}>
                <Typography sx={{}}>{user.phone}</Typography>
                <Typography style={{}}>{user.email}</Typography>
                <Typography style={{}}>{user.city}</Typography>
              </div>
            </AccordionDetails>
          </div>
          <div style={{ marginTop: "2rem", marginRight:"1rem" }}>
            <Link to={`edit-user/${user.id}`}>
              <FiEdit2 style={{ fontSize: "1.5rem", marginRight:"0.5rem" }} />
            </Link>
            <MdDelete
              style={{ fontSize: "1.5rem", color: "red" }}
              onClick={() => handleRemove(user.id)}
            ></MdDelete>
          </div>
        </Accordion>
      </div>
    ));
  return (
    <div>
      <MainHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/add-user">
          <Button
            className="btn"
            style={{ textDecoration: "none", color: "white" }}
          >
            <MdOutlineAddIcCall style={{ marginRight: "1rem" }} />
            Add Contact{" "}
          </Button>
        </Link>

        <div>{users.length ? renderCard() : <p>no user</p>}</div>
      </div>
    </div>
  );
}

export default UserList