/* eslint-disable react/prop-types */

function SearchCountry({ search, setSearch }) {
  const divStyle = { textAlign: "center", margin: "2rem 0" };
  const labelStyle = { fontWeight: "bold", marginRight: "1rem" };
  const inputStyle = {
    border: "3px solid #4F84AA",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#cadae6",
    outline: "none",
    color: "#111",
    fontWeight: "700",
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div style={divStyle}>
      <label htmlFor="country" style={labelStyle}>
        Find countries:
      </label>
      <input
        type="text"
        name="country"
        id="country"
        placeholder="search for a country"
        value={search}
        onChange={handleSearch}
        style={inputStyle}
      />
    </div>
  );
}

export default SearchCountry;
