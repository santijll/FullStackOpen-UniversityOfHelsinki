/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";

function PeopleList({ persons, filterPerson, handleDelete }) {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filterPerson.toLowerCase())
        )
        .map((person) => (
          <li key={person.id} style={{ margin: "0.5rem 0" }}>
            {person.name} {person.number}{" "}
            <FaTrashCan onClick={() => handleDelete(person)} />
          </li>
        ))}
    </ul>
  );
}

export default PeopleList;
