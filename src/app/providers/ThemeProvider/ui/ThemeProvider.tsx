import {
  FC, ReactNode, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme, ThemeContext } from '@/shared/lib/context/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProps {
  children: ReactNode;
}
export const ThemeProvider: FC<ThemeProps> = ({ children }): ReactNode => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
