import React from "react";

interface Props {
  value: string;
  options: Array<string>;
  onChange: (option: string) => void;
}

const SelectInput: React.FunctionComponent<Props> = ({
  value,
  options,
  onChange
}) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map((o, index) => (
        <option key={index} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
