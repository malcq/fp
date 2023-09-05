import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Primary button'
  }
};

export const PrimaryDark: Story = {
  args: {
    children: 'PrimaryDark button'
  }
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
  args: {
    children: 'Clear button',
    variant: 'clear'
  }
};

export const ClearDark: Story = {
  args: {
    children: 'ClearDark button',
    variant: 'clear'
  }
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    children: 'Outline button',
    variant: 'outline'
  }
};

export const OutlineDark: Story = {
  args: {
    children: 'OutlineDark button',
    variant: 'outline'
  }
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
