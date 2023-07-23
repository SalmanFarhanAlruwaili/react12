import { useState } from "react";
import "./App.css";
import data from "./Mock Data.json";
import {nanoid} from "nanoid"
const App = () => {

  const [contacts , setcontacts] = useState(data);
  const [AddFormData , setAddFormData] = useState ({
    fullName: '', 
    address: '',
    phoneNumber: '', 
    email:''

  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const NewFormData = {...AddFormData};
    NewFormData[fieldName] = fieldValue;

    setAddFormData(NewFormData);
  }; 

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id:nanoid (),
      fullName: AddFormData.fullName,
      address: AddFormData.address,
      phoneNumber: AddFormData.phoneNumber,
      email: AddFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setcontacts(newContacts);
  };

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact)=> contact.id === contactId);
      newContacts.splice(index, 1);

      setcontacts(newContacts);
    }

  return ( <div className="app-container">
<div className="imgandtext">
<img src ="https://upload.wikimedia.org/wikipedia/commons/6/6c/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_%D9%84%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA_%D9%88%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A_SDAIA.svg" alt="react logo" style={{ width: '200px', }}/>

<h2>Add new Employee</h2></div>
<form onSubmit={handleAddFormSubmit}>
  <input type="text" name="fullName" required="required" placeholder="full Name" onChange={handleAddFormChange}/>

  <input type="text" name="address" required="required" placeholder="address" onChange={handleAddFormChange}/>

  <input type="text" name="phoneNumber" required="required" placeholder="phoneNumber" onChange={handleAddFormChange}/>

  <input type="email" name="email" required="required" placeholder="email" onChange={handleAddFormChange}/>

  <button type="submit">Add New Employee</button>
</form>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Email</th>

    </tr>
  </thead>

  <tbody>
    { contacts.map ((contact) => (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td><button onClick={()=> handleDeleteClick(contact.id)}>Delete Employee</button></td>

    </tr>

    ))}
    
  </tbody>

</table>
  </div> 
  )
} 
export default App; 
