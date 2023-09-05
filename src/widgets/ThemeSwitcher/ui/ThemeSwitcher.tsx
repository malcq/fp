import { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(
  ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
      <Button
        variant="clear"
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    );
  }
);
