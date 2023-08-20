import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Sidebar</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
});
