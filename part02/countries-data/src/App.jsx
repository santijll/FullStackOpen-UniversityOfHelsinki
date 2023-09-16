import { useEffect, useState } from "react";
import ListCountries from "./components/ListCountries";
import { TbWorldSearch } from "react-icons/tb";
import { BiConfused } from "react-icons/bi";
import SearchCountry from "./components/SearchCountry";
import Country from "./components/Country";

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
};
const pStyles = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

function App() {
  const [search, setSearch] = useState("");
  const [countryResults, setCountryResults] = useState([]);

  const filteredCountries = countryResults.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      );
      const data = await response.json();
      setCountryResults(data);
    }

    getCountries();
  }, [search]);

  return (
    <>
      <SearchCountry
        search={search}
        setSearch={setSearch}
        countryResults={countryResults}
        setCountryResults={setCountryResults}
      />

      {!search && (
        <div style={flexCenter}>
          <TbWorldSearch />
          <p style={pStyles}>Start searching for a country</p>
          <TbWorldSearch />
        </div>
      )}

      {search && filteredCountries.length >= 10 && (
        <div style={flexCenter}>
          <BiConfused />
          <p style={pStyles}>Too many matches, please specify another filter</p>
          <BiConfused />
        </div>
      )}

      {search &&
        filteredCountries.length < 10 &&
        filteredCountries.length > 1 && (
          <ListCountries
            filteredCountries={filteredCountries}
            setCountryResults={setCountryResults}
          />
        )}

      {search && filteredCountries.length === 1 && (
        <Country country={filteredCountries} />
      )}
      {search && !filteredCountries.length && (
        <div style={flexCenter}>
          <BiConfused />
          <p style={pStyles}>No country found, please try another name</p>
          <BiConfused />
        </div>
      )}
    </>
  );
}

//   const handleShow = (country) => {
//     console.log(country);
//     fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.name);
//         setCountries(data);
//         console.log(countries);
//       });
//   };

export default App;
