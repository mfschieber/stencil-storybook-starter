import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ORGANISMS/gmail-startbanner',
  argTypes: {},
} as Meta;

const Template: Story<Components.GmailStartbanner> = ({ size }) => {
  return html`<gmail-startbanner size=${size}></gmail-startbanner>`;
};

export const Default: Story<Components.GmailStartbanner> = Template.bind({});
Default.args = {
  size: 'large',
};
