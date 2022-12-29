import React from 'react';
import { MessageField } from "payload-plugin-form-builder/dist/types";
import RichText from '../../../RichText';

import classes from './index.module.scss';

export const Message: React.FC<MessageField & { error: any; }> = ({ message, error }) => {
  return (
    <div className={classes.input}>
      <RichText
        content={message}
      />
    </div>
  );
};
