import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-checkbox',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailCheckbox> = ({ size = 'medium' }) => {
  return html`<gmail-checkbox size=${size}></gmail-checkbox>`;
};

export const Default: Story<Components.GmailCheckbox> = Template.bind({});
Default.args = {};
