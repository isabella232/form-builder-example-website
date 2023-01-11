import React from 'react';
import ReactSelect from 'react-select';
import { CountryField } from 'payload-plugin-form-builder/dist/types';
import { Controller, Control } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { countryOptions } from './options';
import { Width } from '../Width';

import classes from './index.module.scss';

export const Country: React.FC<CountryField & {
  control: Control<FieldValues, any>
  error: any;
}> = ({ label, width, error, control, required }) => {
  return (
    <Width width={width}>
      <div className={classes.select}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <Controller
          control={control}
          rules={{ required }}
          name="countrySelect"
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              instanceId="countrySelect"
              options={countryOptions}
              value={countryOptions.find(c => c.value === value)}
              onChange={(val) => onChange(val.value)}
              className={classes.reactSelect}
              classNamePrefix="rs"
            />
          )}
        />
        {error && required && <div className={classes.error}>This field is required</div>}
      </div>
    </Width>
  );
};
