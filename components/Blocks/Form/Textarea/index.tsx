import React from 'react';
import { TextField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Width } from '../Width';

import classes from './index.module.scss';

export const Textarea: React.FC<TextField & {
  register: UseFormRegister<FieldValues & any>;
  rows?: number;
  error: any;
}> = (props) => {
  const {
    register,
    name,
    required,
    label,
    width,
    rows = 3,
    error
  } = props;

  return (
    <Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <textarea
          rows={rows}
          className={classes.textarea}
          {...register(name, { required })}
        />
        {error && required && <div className={classes.error}>This field is required</div>}
      </div>
    </Width>
  );
};
