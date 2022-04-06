import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-search',
} as Meta;

const Template: Story<Components.GmailSearch> = () => {
  return html`<gmail-search></gmail-search>`;
};

export const Default: Story<Components.GmailSearch> = Template.bind({});
Default.args = {};
