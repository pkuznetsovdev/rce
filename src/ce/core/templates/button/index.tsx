import React from 'react';
import { ButtonProps } from './types';
import { WithMyTemplateElementProps } from '../../types';

export const Button = ({
  tag,
  content,
  children,
  type = 'button',
  ...props
}: ButtonProps & WithMyTemplateElementProps) => {
  if (content && typeof content === 'string') {
    return <button {...props} type={type} dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
};
