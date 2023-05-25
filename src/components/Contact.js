import React from "react";
import { useState } from "react";
import ContactForm from "./CreateContactForm";
import { useSelector } from "react-redux";


const Contact=()=>{
    const [isShown, setIsShown] = useState(false);
    const ContactItems=useSelector(store=>store.contact.items);
    console.log(ContactItems);
    const handleClick = event => {
        setIsShown(current => !current);
    };
   return(
        <>
        <div>
            {
                ContactItems.map((value,index)=><li key={index}>{value.firstName} {value.lastName}</li>)
            }
        </div>
        <button onClick={handleClick} className="border p-2 m-5 bg-slate-300">Create Contact</button>
        {isShown && <ContactForm/>}
        </>
    )
}
export default Contact;