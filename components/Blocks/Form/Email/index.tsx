import React from 'react';
import { EmailField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Width } from '../Width';

import classes from './index.module.scss';

export const Email: React.FC<EmailField & {
  register: UseFormRegister<FieldValues & any>;
  error: any;
}> = ({ name, width, label, register, required, error }) => {
  return (
    <Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <input
          type="text"
          placeholder="Email"
          className={classes.input}
          {...register(name, { required, pattern: /^\S+@\S+$/i })}
        />
        {error && required && <div className={classes.error}>This field is required</div>}
      </div>
    </Width>
  );
};
