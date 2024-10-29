import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.listItem} >
            <Contact contact={contact}  />    
        </li>
      ))}
    </ul>
  );
}
