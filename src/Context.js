import React, { createContext, useState } from "react";

export const Store = createContext();

const Context = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [pickedRegion, setPickedRegion] = useState("Europe");
  const [countryInput, setCountryInput] = useState("");

  const appContext = {
    darkMode,
    setDarkMode,
    countries,
    setCountries,
    pickedRegion,
    setPickedRegion,
    countryInput,
    setCountryInput,
  };

  return <Store.Provider value={appContext}>{props.children}</Store.Provider>;
};

export default Context;
