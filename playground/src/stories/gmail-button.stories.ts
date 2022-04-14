import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-button',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    font: {
      options: ['normal', 'bold', 'italic'],
      control: { type: 'inline-radio' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<Components.GmailButton> = ({ identifier, size, type, content, font, isDisabled }) => {
  return html`<gmail-button size=${size} identifier=${identifier} type=${type} content=${content} font=${font} isDisabled=${isDisabled}></gmail-button>`;
};

export const Default: Story<Components.GmailButton> = Template.bind({});
Default.args = {
  size: 'medium',
  type: 'reload',
};

export const Text: Story<Components.GmailButton> = Template.bind({});
Text.args = {
  size: 'medium',
  content: 'Test',
  font: 'normal',
};

export const Reload: Story<Components.GmailButton> = Template.bind({});
Reload.args = {
  size: 'medium',
  type: 'reload',
};

export const Search: Story<Components.GmailButton> = Template.bind({});
Search.args = {
  size: 'medium',
  type: 'search',
};

export const LeftArrow: Story<Components.GmailButton> = Template.bind({});
LeftArrow.args = {
  size: 'medium',
  type: 'leftarrow',
};

export const RightArrow: Story<Components.GmailButton> = Template.bind({});
RightArrow.args = {
  size: 'medium',
  type: 'rightarrow',
};

export const Gearwheel: Story<Components.GmailButton> = Template.bind({});
Gearwheel.args = {
  size: 'medium',
  type: 'gearwheel',
};

export const Menu: Story<Components.GmailButton> = Template.bind({});
Menu.args = {
  size: 'medium',
  type: 'menu',
};

export const Archive: Story<Components.GmailButton> = Template.bind({});
Archive.args = {
  size: 'medium',
  type: 'archive',
};

export const Delete: Story<Components.GmailButton> = Template.bind({});
Delete.args = {
  size: 'medium',
  type: 'delete',
};

export const MarkUnread: Story<Components.GmailButton> = Template.bind({});
MarkUnread.args = {
  size: 'medium',
  type: 'markunread',
};

export const Snooze: Story<Components.GmailButton> = Template.bind({});
Snooze.args = {
  size: 'medium',
  type: 'snooze',
};

export const Calendar: Story<Components.GmailButton> = Template.bind({});
Calendar.args = {
  size: 'medium',
  type: 'calendar',
};

export const Check: Story<Components.GmailButton> = Template.bind({});
Check.args = {
  size: 'medium',
  type: 'check',
};

export const Pen: Story<Components.GmailButton> = Template.bind({});
Pen.args = {
  size: 'medium',
  type: 'pen',
};

export const Notification: Story<Components.GmailButton> = Template.bind({});
Notification.args = {
  size: 'medium',
  type: 'notification',
};
