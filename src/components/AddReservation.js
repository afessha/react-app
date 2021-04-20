import { useState } from "react";
import './Component.css';
import  LableWithInput from "./LableWithInput";

const AddReservation = ({onAdd}) => {
  const initalState = {
    name: "",
    email: "",
    number: ""
  }
  const [form, setForm] = useState(initalState);
  const onChange = (name, value) =>{
    setForm({...form, [name]: value});
    
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    onAdd(form);
    setForm(initalState);

      
  }

  return (
    <div>
      <h2> Add Reservation</h2>
      <form onSubmit={onSubmit}>
        <LableWithInput value={form.name} onChange={onChange} name="name" placeholder="Name " />
        <LableWithInput value={form.email} onChange={onChange} name="email" placeholder="Email " type= "email"/>
        <LableWithInput value={form.number} onChange={onChange} name="number" placeholder="Number " type="number"/>
         <div>
           <input type="submit" value="Submit" className="submit"/>
         </div>

      </form>
    </div>
  );

};

export default AddReservation;
