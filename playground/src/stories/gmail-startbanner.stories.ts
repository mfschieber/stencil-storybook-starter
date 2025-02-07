import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'MOLECULES/gmail-startbanner',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailStartbanner> = ({ size }) => {
  return html`<gmail-startbanner size=${size}></gmail-startbanner>`;
};

export const Default: Story<Components.GmailStartbanner> = Template.bind({});
Default.args = {
  size: 'large',
};
