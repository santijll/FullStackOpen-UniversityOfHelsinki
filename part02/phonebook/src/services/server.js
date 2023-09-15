import axios from "axios";
const BASE_URL = "http://localhost:3001/persons";

const getPhoneNumbers = () => {
  return axios.get(BASE_URL);
};

const addPerson = (newPerson) => axios.post(BASE_URL, newPerson);

const deletePerson = (id) => axios.delete(`${BASE_URL}/${id}`);

const updatePerson = (updatedPhone, id) =>
  axios.put(`${BASE_URL}/${id}`, updatedPhone);

export { getPhoneNumbers, addPerson, deletePerson, updatePerson };
