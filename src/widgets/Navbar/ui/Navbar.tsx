import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          variant={AppLinkVariant.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink variant={AppLinkVariant.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
