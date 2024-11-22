import { useState } from 'react'

import './App.css'
import Head from './components/Head'
import { UserContext } from "./context/UserContext"
import Card from "./components/Head/Card";
function App() {
  const [user, setUser] = useState({ 
    name: "bolito",
    email: "",
    imgUrl: "",
    age: 0});

  const updateUser = (newUser) => {
  const {name, email, imgUrl, age} = newUser;
   setUser({
    name: name,
    email: email,
    imgUrl: imgUrl,
    age: age
  });
    // setUser(newUser);
  };
  //Datos a proveer a los componentes a través del contexto
  const userData = {
    user, //Objeto
    updateUser //Función
  }
  const renderCard = () => {
    return <Card data={user} />;
  }
  return (
    <>
      <UserContext.Provider value={userData}>
        <h1>You're logged-in as: {user.email}</h1>
        <Head />
        {renderCard()}
      </UserContext.Provider>
    </>
  )
}

export default App
