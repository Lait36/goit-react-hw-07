import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
  };
  return (
    <div className={css.container}>
      <div>
        <p className={css.info}>{name}</p>
        <p className={css.info}>{number}</p>
      </div>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
  );
}
