import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

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
