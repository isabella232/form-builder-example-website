import React from 'react';
import ReactSelect from 'react-select';
import { CountryField } from 'payload-plugin-form-builder/dist/types';
import { Controller, Control } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { countryOptions } from './options';

import classes from './index.module.scss';

export const Country: React.FC<CountryField & {
  control: Control<FieldValues, any>
  error: any;
}> = ({ label, error, control, required }) => {

  return (
    <div className={classes.input}>
      <label htmlFor="name" className={classes.label}>
        {label}
      </label>
      <Controller
        control={control}
        rules={{ required }}
        name="countrySelect"
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            options={countryOptions}
            value={countryOptions.find(c => c.value === value)}
            onChange={(val) => onChange(val.value)}
            className={classes.reactSelect}
          />
        )}
      />
      {error && required && <div className={classes.error}>This field is required</div>}
    </div>
  );
};
