import React, { useState } from "react";
import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import Form from "./Form";



const Head = () => {

  return <>
    <section>
    <Form/>
    </section>
 
  </>;
};

export default Head;
