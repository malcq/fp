import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('произогла непердвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
});
