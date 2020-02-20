import React from "react";
import { FieldProps } from "formik";
// import custom CSS here

interface Props extends FieldProps {}

const TextInput: React.FunctionComponent<Props> = ({
  field,
  form,
  meta,
  ...props
}) => {
  return <input {...field} {...props} />;
};

export default TextInput;
