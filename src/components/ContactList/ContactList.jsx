import { selectFilteredContacts  } from "../../redux/contactsSelectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";


export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts );

  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.listItem} >
            <Contact contact={contact}  />    
        </li>
      ))}
    </ul>
  );
}
