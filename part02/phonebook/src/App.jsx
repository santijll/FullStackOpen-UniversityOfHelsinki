/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  getPhoneNumbers,
  addPerson,
  deletePerson,
  updatePerson,
} from "./services/server";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PeopleList from "./components/PeopleList";
import ErrorNotification from "./components/ErrorNotification";
import SuccessNotification from "./components/SuccessNotification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterPerson, setFilterPerson] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // we check if the number exists already, the result will be either an existing number or undefined
    const existingNumber = persons.find(
      (person) =>
        person.name.toLowerCase() === newPerson.name.toLocaleLowerCase()
    );

    // if the number doesn't exist, we create it
    if (!existingNumber) {
      const newPersonToAdd = { name: newPerson.name, number: newPerson.number };
      addPerson(newPersonToAdd).then((res) => {
        setPersons(persons.concat(res.data));
        setSuccessMessage(`${newPerson.name} has been added to the phonebook`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2500);
      });
      // clearing input fields
      setNewPerson({ ...newPerson, name: "", number: "" });
    }

    // if number exists, we asked user if they want to update it
    if (existingNumber) {
      const updatePhone = confirm(
        `${newPerson.name} is already added to phonebook. Do you want to replace the old number with a new one?`
      );

      if (updatePhone) {
        const modifiedPhone = { ...existingNumber, number: newPerson.number };
        setNewPerson({ ...newPerson, name: "", number: "" });
        updatePerson(modifiedPhone, existingNumber.id).then((res) => {
          setSuccessMessage(
            `${res.data.name} has been updated in the phonebook`
          );
          setTimeout(() => {
            setSuccessMessage(null);
          }, 2500);
        });
      } else {
        setNewPerson({ ...newPerson, name: "", number: "" });
        return;
      }
    }
  };

  const handleFilterInput = (e) => {
    setFilterPerson(e.target.value);
  };

  const handleDelete = (person) => {
    window.confirm(
      `Are you sure you want to delete ${person.name} from your phonebook?`
    ) &&
      deletePerson(person.id).catch((error) => {
        console.error(error.message);
        setErrorMessage(
          `${person.name} has been already removed from the phonebook`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 2500);
      });
  };

  useEffect(() => {
    getPhoneNumbers().then((res) => {
      setPersons(res.data);
    });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />
      <Filter
        filterPerson={filterPerson}
        handleFilterInput={handleFilterInput}
      />
      <h2>Add a new contact to phonebook</h2>
      <PersonForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newPerson={newPerson}
      />
      <h2>Numbers</h2>
      <PeopleList
        persons={persons}
        filterPerson={filterPerson}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
