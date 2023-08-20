import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export enum ButtonVariant {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant: ButtonVariant;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, variant, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
