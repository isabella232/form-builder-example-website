import React, { useState } from 'react';
import { CheckboxField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { Width } from '../Width';
import { Check } from '../../../icons/Check';

import classes from './index.module.scss';

export const Checkbox: React.FC<CheckboxField & {
  register: UseFormRegister<FieldValues & any>,
  errors: Partial<FieldErrorsImpl<{
    [x: string]: any;
  }>>
}> = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Width width={width}>
      <div
        className={[
          classes.checkbox,
          checked && classes.checked
        ].filter(Boolean).join(' ')}
      >
        <div className={classes.container}>
          <input
            type="checkbox"
            {...register(name, { required: requiredFromProps })}
            checked={checked}
          />
          <button
            type="button"
            onClick={() => setChecked(!checked)}
          >
            <span className={classes.input}>
              <Check />
            </span>
          </button>
          <span className={classes.label}>{label}</span>
        </div>
        {requiredFromProps && errors[name] && <div className={classes.error}>This field is required</div>}
      </div>
    </Width>
  );
};
