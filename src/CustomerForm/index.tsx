import React from "react";
import { Field } from "formik";
import CustomerSelect from "./CustomerSelect";
import TextInput from "../FormikInput/TextInput";

const CustomerForm = () => {
  return (
    <div>
      <label htmlFor="customer_id">Customer Id</label>
      <Field
        name="customer_id"
        component={CustomerSelect}
        options={["1", "2", "3", "4"]}
      />
      <br />
      <label>Customer Name</label>
      <Field name="customer_name" component={TextInput} disabled />
      <br />
      <label htmlFor="review">Review</label>
      <Field name="review" component={TextInput} />
    </div>
  );
};

export default CustomerForm;
