import React from 'react';
import { CheckboxField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import classes from './index.module.scss';

export const Checkbox: React.FC<CheckboxField & {
  register: UseFormRegister<FieldValues & any>;
  error
}> = ({ name, label, register, required, error }) => {
  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <input type="checkbox" {...register(name, { required })} />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
