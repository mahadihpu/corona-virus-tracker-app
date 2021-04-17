import "./App.css";
import logo from "./images/COVID19.jpg";
import Box from "../node_modules/@material-ui/core/Box/Box";
import Cards from "./components/Cards/Cards";
import { createContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Countries from "./components/Countries/Countries";
import Chart from "./components/Chart/Chart";

export const UserContext = createContext();

function App() {
  const Style = {
    boxStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    header: {
      backgroundColor: "#F5F5F5",
      width: 400,
      textAlign: "center",
      fontSize: "20px",
      padding: "10px"
    },
    image: {
      width: 350
    }
  };
  const [info,setInfo] = useState({});
  const [country,setCountry] = useState('');
  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
    .then(res => res.json())
    .then(data => setInfo(data))
  },[])
  
  console.log(country)
  const {lastUpdate} = info;
  return (
    <UserContext.Provider value= {[country,setCountry]}>
      <Box style={Style.boxStyle}>
        <Box style={Style.header}>Covid-19 Tracker App</Box>
        <Typography>Last Updated:{lastUpdate}</Typography>
        <img style={Style.image} src={logo} alt="logo"/>
        <Cards info={info}/>
        <Countries />
        <Chart data={info}/>
      </Box>
    </UserContext.Provider>
  );
}

export default App;
