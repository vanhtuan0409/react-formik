import React from "react";
import { Formik, Form } from "formik";
import CustomerForm from "./CustomerForm/index";
import "./App.css";

function App() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        customer_id: "",
        customer_name: "",
        review: ""
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <CustomerForm />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
