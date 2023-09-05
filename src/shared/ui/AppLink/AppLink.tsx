import { ReactNode, memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  variant: AppLinkVariant;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    variant = 'primary',
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [
        className,
        cls[variant]
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
