import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-starbox',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailStarbox> = ({ size }) => {
  return html`<gmail-starbox size=${size}></gmail-starbox>`;
};

export const Default: Story<Components.GmailStarbox> = Template.bind({});
Default.args = {
  size: 'small',
};
