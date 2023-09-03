import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button variant={ButtonVariant.CLEAR} onClick={toggle}>
        {t('Язык')}
      </Button>
    </div>
  );
});
