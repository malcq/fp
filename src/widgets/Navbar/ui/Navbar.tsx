import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          variant={AppLinkVariant.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          variant={AppLinkVariant.SECONDARY}
          to="/about"
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
