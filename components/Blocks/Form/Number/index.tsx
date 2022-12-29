import React from 'react';
import { TextField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import classes from './index.module.scss';

export const Number: React.FC<TextField & {
  register: UseFormRegister<FieldValues & any>;
  error
}> = ({ name, label, required, register, error }) => {
  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <input type="number" {...register(name, { required })} />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
