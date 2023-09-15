/* eslint-disable react/prop-types */
function Filter({ filterPerson, handleFilterInput }) {
  return (
    <div>
      filter shown with{" "}
      <input value={filterPerson} onChange={handleFilterInput} />
    </div>
  );
}

export default Filter;
