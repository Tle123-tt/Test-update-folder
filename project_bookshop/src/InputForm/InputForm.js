import { Input } from "antd";
import { useState } from "react";

const InputForm = (props) => {
  // const [valueInput, setValueInput]=useState('')
  const { placeholder = "Nhập text", ...rests } = props;
  const handleOnchangeInput=(e)=>{
    props.handleOnchange(e.target.vaule)
  }
  return (
    <Input
      className='w-3/5'
      placeholder={placeholder}
      valueInput={props.value}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
};
export default InputForm;
