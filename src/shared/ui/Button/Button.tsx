import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, variant, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [
        className,
        cls[variant]
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
