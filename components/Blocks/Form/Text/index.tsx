import React from 'react';
import { TextField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import classes from './index.module.scss';

export const Text: React.FC<TextField & {
  register: UseFormRegister<FieldValues & any>;
  error: any;
}> = ({ name, label, required, register, error }) => {
  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <input type="text" {...register(name, { required })} />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
