import React from 'react';
import { TextField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Width } from '../Width';

import classes from './index.module.scss';

export const Number: React.FC<TextField & {
  register: UseFormRegister<FieldValues & any>;
  error
}> = ({ name, label, width, required, register, error }) => {
  return (
    <Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <input
          type="number"
          className={classes.input}
          {...register(name, { required })}
        />
        {error && required && <div className={classes.error}>This field is required</div>}
      </div>
    </Width>
  );
};
