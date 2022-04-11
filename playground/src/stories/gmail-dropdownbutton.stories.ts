import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { GmailDropdownbutton } from '../../../design-system/src/components/molecules/gmail-dropdownbutton/gmail-dropdownbutton';

export default {
  title: 'MOLECULES/gmail-dropdownbutton',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['normal', 'bold', 'italic'],
      control: { type: 'inline-radio' },
    },
    items: {},
  },
} as Meta;

const Template: Story<Components.GmailDropdownbutton> = ({ type, items, size }) => {
  return html`<gmail-dropdownbutton size=${size} type=${type} .items=${items}></gmail-dropdownbutton>`;
};

export const Default: Story<Components.GmailDropdownbutton> = Template.bind({});
Default.args = {
  type: 'italic',
  items: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
  size: 'small',
};

export const MailOptions: Story<Components.GmailDropdownbutton> = Template.bind({});
MailOptions.args = {
  size: 'small',
  items: ['Mark as unread', 'Mark as not important', 'Add star', 'Filter messages like these', 'Mute', 'Forward as attachment'],
  type: 'normal',
};
