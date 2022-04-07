import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-textbutton',
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

const Template: Story<Components.GmailTextbutton> = ({ content = '', size = 'large', type = 'normal' }) => {
  return html`<gmail-textbutton size=${size} content=${content} type=${type}></gmail-textbutton>`;
};

export const Default: Story<Components.GmailTextbutton> = Template.bind({});
Default.args = {
  size: 'large',
  content: 'Test',
};
