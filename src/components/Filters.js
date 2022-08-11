import React, { useContext, useState } from "react";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./countries.module.scss";
import { Store } from "../Context";
import axios from "axios";
import { useEffect } from "react";
const Filters = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filteringMenuIsOpen, setFilteringMenuIsOpen] = useState(false);
  const {
    pickedRegion,
    setPickedRegion,
    setCountries,
    countryInput,
    setCountryInput,
  } = useContext(Store);
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (countryInput === "") {
        const fetchData = async () => {
          const res = await axios.get(
            `https://restcountries.com/v3.1/region/${pickedRegion}`
          );
          setCountries(res.data);
        };
        fetchData();
      } else {
        const fetchData = async () => {
          let res;
          try {
            res = await axios.get(
              `https://restcountries.com/v3.1/name/${countryInput}`
            );
            setCountries(res.data);
            console.log(res.data);
          } catch {
            setCountries([]);
          }
        };
        fetchData();
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [countryInput]);
  return (
    <div className={styles.countries__settings}>
      <div className={styles.countries__searchWrap}>
        <div className={styles.countries__searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          onChange={(e) => setCountryInput(e.target.value)}
          value={countryInput}
          placeholder="Search for a country..."
        />
      </div>
      <div className={styles.countries__filterPanel}>
        <div
          className={styles.countries__filterBtn}
          onClick={() =>
            setFilteringMenuIsOpen(
              (filteringMenuIsOpen) => !filteringMenuIsOpen
            )
          }
        >
          Filter by Region
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div
          className={styles.countries__regionsList}
          style={{
            opacity: filteringMenuIsOpen ? "1" : "0",
          }}
        >
          <div>
            {regions.map((region) => (
              <p
                key={uuid()}
                onClick={() => {
                  if (filteringMenuIsOpen) {
                    setPickedRegion(region);
                    setFilteringMenuIsOpen(false);
                    setCountryInput("");
                  }
                }}
                style={{
                  cursor: filteringMenuIsOpen ? "pointer" : "auto",
                }}
              >
                {region}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
