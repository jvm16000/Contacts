import React from 'react'
import './MainHeader.css';
import { RiContactsBook2Fill } from "react-icons/ri";

const MainHeader = () => {
  return (
    <div className="head">
      <RiContactsBook2Fill style={{marginTop:"15vh", marginRight:"3vh"}}/>
      <p className="">Contact List</p>
    </div>
  );
}

export default MainHeader