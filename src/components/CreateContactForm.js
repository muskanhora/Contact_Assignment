import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./ContactSlice";

const ContactForm=()=>{
    const [name , setName] = useState('');
    const [lastName,setLastName]=useState('');

   function onSubmit(e){
        e.preventDefault()
        let formdata={
            firstName:name,
            lastName:lastName
        }
        dispatch(addContact(formdata));
    }

    const dispatch=useDispatch();
    const ContactItems=useSelector(store=>store.contact.items);

    return(
        <>
        <form onSubmit={(e)=> {onSubmit}} className="m-5 p-2" >
        <label >
         First Name: 
        </label>
        <input className="border bg-slate-100 m-3 p-1" type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
        <label >
          Last Name: 
        </label>
        <input className="border bg-slate-100 m-3 p-1" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br/>
        <label>
            Status:
        </label>
        <div>
        <input className="p-2 m-2" type="radio" value="Active" name="gender" /> Active
        <input className="p-2 m-2" type="radio" value="Inactive" name="gender" /> Inactive
        </div>
        <button onClick={onSubmit} className="border p-2 m-5 bg-slate-200" type="submit">Save</button>
        </form>
        </>
    )
}
export default ContactForm;