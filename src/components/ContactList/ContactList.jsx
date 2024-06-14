import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.wrapper}>
      {contacts.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
