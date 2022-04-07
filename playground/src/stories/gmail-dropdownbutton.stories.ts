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

const Template: Story<Components.GmailDropdownbutton> = ({
  type = 'normal',
  items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
  size = 'medium',
}) => {
  return html`<gmail-dropdownbutton size=${size}>
    <div slot="menu">
      <gmail-textbutton size=${size} type=${type} content=${items[0]}></gmail-textbutton>
      <gmail-textbutton size=${size} type=${type} content=${items[1]}></gmail-textbutton>
      <gmail-textbutton size=${size} type=${type} content=${items[2]}></gmail-textbutton>
      <gmail-textbutton size=${size} type=${type} content=${items[3]}></gmail-textbutton>
      <gmail-textbutton size=${size} type=${type} content=${items[4]}></gmail-textbutton>
      <gmail-textbutton size=${size} type=${type} content=${items[5]}></gmail-textbutton>
    </div>
  </gmail-dropdownbutton>`;
};

export const Default: Story<Components.GmailDropdownbutton> = Template.bind({});
Default.args = {
  size: 'medium',
};

export const MailOptions: Story<Components.GmailDropdownbutton> = Template.bind({});
MailOptions.args = {
  size: 'medium',
  items: ['Mark as unread', 'Mark as not important', 'Add star', 'Filter messages like these', 'Mute', 'Forward as attachment'],
};
