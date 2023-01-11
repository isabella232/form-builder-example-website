import React from 'react';
import ReactSelect from 'react-select';
import { SelectField } from 'payload-plugin-form-builder/dist/types';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { Width } from '../Width';

import classes from './index.module.scss';

export const Select: React.FC<SelectField & {
  control: Control<FieldValues, any>
  error: any;
}> = ({ label, width, options, error, control, required }) => {


  return (
    <Width width={width}>
      <div className={classes.select}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <Controller
          control={control}
          rules={{ required }}
          name="select"
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              instanceId="select"
              options={options}
              value={options.find(s => s.value === value)}
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
