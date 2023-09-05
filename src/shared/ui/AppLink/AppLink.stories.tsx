import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary link'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary link'
  }
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Secondary link'
  }
};

export const PrimaryOnDark: Story = {
  args: {
    variant: 'primary',
    children: 'Primary link'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryOnDark: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary link'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const RedOnDark: Story = {
  args: {
    variant: 'red',
    children: 'Secondary link'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
