import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'PROJET/atoms/gmail-button',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['reload'],
    },
  },
} as Meta;

const Template: Story<Components.GmailButton> = ({ size = 'medium', type = 'reload' }) => {
  return html`<gmail-button size=${size} type=${type}></gmail-button>`;
};

export const Default: Story<Components.GmailButton> = Template.bind({});
Default.args = {
  size: 'medium',
};

export const Reload: Story<Components.GmailButton> = Template.bind({});
Reload.args = {
  size: 'medium',
  type: 'reload',
};
