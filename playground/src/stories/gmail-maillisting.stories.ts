import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ORGANISMS/gmail-maillisting',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailMaillisting> = ({ size = 'small' }) => {
  return html`<gmail-maillisting size=${size}></gmail-maillisting>`;
};

export const Default: Story<Components.GmailMaillisting> = Template.bind({});
Default.args = {
  size: 'small',
};
