import React from 'react';
import ReactSelect from 'react-select';
import { SelectField } from 'payload-plugin-form-builder/dist/types';
import { Controller, Control } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';

import classes from './index.module.scss';

export const Select: React.FC<SelectField & {
  control: Control<FieldValues, any>
  error: any;
}> = (props) => {
  const {
    control,
    required,
    label,
    options,
    error,
  } = props;


  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <Controller
        control={control}
        rules={{ required }}
        name="select"
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            options={options}
            value={options.find(s => s.value === value)}
            onChange={(val) => onChange(val.value)}
            className={classes.reactSelect}
          />
        )}
      />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
