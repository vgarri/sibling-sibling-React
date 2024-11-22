import React, { useState, useContext } from "react";
import { Button } from "@mui/material"
import { UserContext } from "../../../context/UserContext"

const Form = () => {
  const { updateUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    imgUrl: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({

      ...userInfo, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    // actualiza el username almacenado en el contexto
    updateUser(userInfo);
    
  };








  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="username" onChange={handleChange} />
      <input type="text" name="email" placeholder="email" onChange={handleChange} />
      <input type="text" name="age" placeholder="age" onChange={handleChange} />
      <input type="text" name="imgUrl" placeholder="image URL" onChange={handleChange} />
      <Button type="submit" variant="contained">LOGIN</Button>
    </form>
  </>;
};

export default Form;
