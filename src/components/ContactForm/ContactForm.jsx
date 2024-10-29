import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import * as Yup from "yup";


export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const id = nanoid();
    dispatch(
      addContact({
        id: id,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 letters")
      .max(30, "Maximum 30 letters")
      .required("This field is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in the format 111-11-11")
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <div className={css.container}>
          <div className={css.input}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div className={css.input}>
            <label htmlFor="number">Number</label>
            <Field type="text" name="number" autoComplete="off" />
            <ErrorMessage
              name="number"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className={css.button}>
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
