import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./country.module.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { createPopulationNum } from "../utils";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(undefined);
  useEffect(() => {
    console.log(id);
    const fetchCountry = async () => {
      const res = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
      console.log(res.data);
      setCountry(res.data[0]);
    };
    fetchCountry();
  }, [id]);
  return (
    country && (
      <section className={styles.country}>
        <Link to="/">
          <button className={styles.country__backBtn}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
        </Link>
        <div className={styles.country__card}>
          <div className={styles.country__imageWrap}>
            <img src={country.flags.png} alt="" />
          </div>
          <div className={styles.country__content}>
            <h2 className={styles.country__name}>{country.name.common}</h2>
            <div className={styles.country__desc}>
              <div className={styles.country__firstPart}>
                <p>
                  <span>Official Name: </span>
                  {country.name.official}
                </p>
                <p>
                  <span>Population: </span>
                  {createPopulationNum(country.population)}
                </p>
                <p>
                  <span>Capital: </span> {country.capital}
                </p>
              </div>
              <div className={styles.country__secondPart}>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>

                <p>
                  <span>Sub Region: </span> {country.subregion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Country;
