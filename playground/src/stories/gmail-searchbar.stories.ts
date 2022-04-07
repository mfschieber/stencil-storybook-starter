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

const Template: Story<Components.GmailSearchbar> = ({ size = 'medium' }) => {
  return html`<gmail-searchbar size=${size}></gmail-searchbar>`;
};

export const Default: Story<Components.GmailSearchbar> = Template.bind({});
Default.args = {};
