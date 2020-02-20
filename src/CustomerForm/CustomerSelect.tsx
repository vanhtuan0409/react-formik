import React from "react";
import { FieldProps } from "formik";
import SelectInput from "../InputUI/SelectInput";

interface Props extends FieldProps {
  options: Array<string>;
}

const CustomerSelect: React.FunctionComponent<Props> = ({
  field,
  form,
  options
}) => {
  const onCustomerSelect = (option: string) => {
    form.setFieldValue(field.name, option);
    form.setFieldValue("customer_name", `Customer ${option}`);
  };
  return (
    <SelectInput
      value={field.value}
      options={options}
      onChange={onCustomerSelect}
    />
  );
};

export default CustomerSelect;
