import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'MOLECULES/gmail-searchbar',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailButton> = ({ size = 'medium' }) => {
  return html`<gmail-searchbar size=${size}></gmail-searchbar>`;
};

export const Default: Story<Components.GmailButton> = Template.bind({});
Default.args = {};
