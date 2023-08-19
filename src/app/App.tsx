import { Link } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
