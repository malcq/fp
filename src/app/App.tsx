import { Link } from 'react-router-dom';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
