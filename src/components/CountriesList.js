import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { Store } from "../Context";
import { createPopulationNum } from "../utils";
import styles from "./countries.module.scss";
const CountriesList = () => {
  const { countries, setCountries, pickedRegion } = useContext(Store);

  useEffect(() => {
    if (pickedRegion) {
      const fetchData = async () => {
        const res = await axios.get(
          `https://restcountries.com/v3.1/region/${pickedRegion}`
        );
        console.log(res);
        setCountries(res.data);
      };
      fetchData();
    }
  }, [pickedRegion]);

  const renderCountries = () => {
    return countries.map((country) => (
      <div key={uuid()} className={styles.countries__countryCard}>
        <Link to={`/${country.ccn3}`}>
          <div className={styles.countries__flagWrap}>
            <img src={country.flags.png} alt="" />
          </div>
          <div className={styles.countries__contentSide}>
            <h2 className={styles.countries__countryName}>
              {country.name.common}
            </h2>
            <p>
              <span>Population:</span>
              {createPopulationNum(country.population)}
            </p>
            <p>
              <span>Region:</span>
              {country.region}
            </p>
            <p>
              <span>Capital:</span>
              {country.capital || "Unknown"}
            </p>
          </div>
        </Link>
      </div>
    ));
  };
  return (
    <div className={styles.countries__countriesList}>{renderCountries()}</div>
  );
};

export default CountriesList;
