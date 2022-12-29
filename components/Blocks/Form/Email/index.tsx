import React from 'react';
import { EmailField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import classes from './index.module.scss';

export const Email: React.FC<EmailField & {
  register: UseFormRegister<FieldValues & any>;
  error: any;
}> = ({ name, label, register, required, error }) => {
  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <input type="text" placeholder="Email" {...register(name, { required, pattern: /^\S+@\S+$/i })} />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
