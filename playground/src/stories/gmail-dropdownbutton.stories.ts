import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

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
  },
} as Meta;

const Template: Story<Components.GmailDropdownbutton> = ({ type, items, size }) => {
  return html`<gmail-dropdownbutton size=${size} type=${type} .items=${items}></gmail-dropdownbutton>`;
};

const option1 = { content: 'Option 1' };
const option2 = { content: 'Option 2', textColor: 'black' };
const option3 = { content: 'Option 3', textColor: 'black' };
const option4 = { content: 'Option 4', textColor: 'black' };
const option5 = { content: 'Option 5', textColor: 'black' };
const option6 = { content: 'Option 6', textColor: '#5f6368' };

export const Default: Story<Components.GmailDropdownbutton> = Template.bind({});
Default.args = {
  type: 'italic',
  items: [option1, option2, option3, option4, option5, option6],
  size: 'small',
};

const option7 = { content: 'Mark as unread' };
const option8 = { content: 'Mark as not important' };
const option9 = { content: 'Add star' };
const option10 = { content: 'Filter messages like these' };
const option11 = { content: 'Mute' };
const option12 = { content: 'Forward as attachment' };

export const MailOptions: Story<Components.GmailDropdownbutton> = Template.bind({});
MailOptions.args = {
  size: 'small',
  items: [option7, option8, option9, option10, option11, option12],
  type: 'normal',
};
