/* eslint-disable react/prop-types */
const PersonForm = ({ handleChange, handleSubmit, newPerson }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            name="name"
            value={newPerson.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            name="number"
            value={newPerson.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
