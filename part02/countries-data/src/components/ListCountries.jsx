/* eslint-disable react/prop-types */
const ulStyle = {
  listStyle: "none",
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  fontWeight: "500",
};
const divStyle = {
  width: "30%",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
};
const btnStyle = {
  fontSize: "0.8rem",
  outline: "none",
  padding: "0 0.5rem",
  border: "1px solid #4F84AA",
  borderRadius: "10px",
  color: "#111",
  fontWeight: "300",
};

function ListCountries({ filteredCountries, setCountryResults }) {
  const handleShow = (e) => {
    async function getCountry() {
      const response = await fetch(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${e.target.id}`
      );
      const country = await response.json();
      setCountryResults([country]);
      document.getElementById("country").focus();
    }
    getCountry();
  };

  return (
    <ul style={ulStyle}>
      {filteredCountries.map((country) => {
        return (
          <div key={country.name.official} style={divStyle}>
            <li>{country.name.common}</li>
            <button
              style={btnStyle}
              id={country.name.common}
              onClick={handleShow}
            >
              show
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default ListCountries;
