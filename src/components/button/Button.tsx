import React, {FC, useState} from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
  title: string
  xType: string
  btnValue : string
}

export const Button: FC<ButtonPropsType> = ({title, xType,btnValue}) => {
  const [value, setValue] = useState('1')
  console.log(value)
  const finalClassName = s.button + ' ' + (xType === 'level1' ? s.level1
    : xType === 'level2' ? s.level2
      : xType === 'level3' ? s.level3
        : s.button)
  return (
    <>
      <button className={finalClassName} onClick={() => setValue(btnValue)}>{title}</button>
    </>
  );
};

