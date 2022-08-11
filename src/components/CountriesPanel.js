import React, { useEffect } from "react";

import styles from "./countries.module.scss";

import Filters from "./Filters";
import CountriesList from "./CountriesList";
const CountriesPanel = () => {
  return (
    <section className={styles.countries}>
      <Filters />
      <CountriesList />
    </section>
  );
};

export default CountriesPanel;
