/* eslint-disable react/prop-types */
import { RiSpeakLine } from "react-icons/ri";
import Weather from "./Weather";

const containerStyle = {
  width: "80%",
  maxWidth: "900px",
  margin: "0 auto",
  border: "3px solid #4F84AA",
  padding: "1rem",
  borderRadius: "1rem",
  display: "flex",
};
const infoStyle = { lineHeight: "1.8" };
const ulStyle = {
  listStyle: "none",
  marginLeft: "0",
};
const liStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "0.5rem",
};
const imgStyle = { width: "50%" };

function Country({ country }) {
  return (
    <div style={containerStyle}>
      <div style={{ width: "50%" }}>
        <div style={infoStyle}>
          <h1>{country[0].name.common}</h1>
          <p>Capital: {country[0].capital}</p>
          <p>Country area: {country[0].area}</p>
          <h3>Languages:</h3>
          <ul style={ulStyle}>
            {Object.values(country[0].languages).map((language) => (
              <li key={language} style={liStyle}>
                <RiSpeakLine /> {language}
              </li>
            ))}
          </ul>
        </div>
        <img
          style={imgStyle}
          src={country[0].flags.svg}
          alt={`flag of ${country[0].name.official}`}
        />
      </div>

      <Weather country={country} />
    </div>
  );
}

export default Country;
