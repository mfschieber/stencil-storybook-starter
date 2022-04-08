import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-notification',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    online: {
      options: ['online', 'offline', 'busy'],
      control: { type: 'text' },
    },
    number: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<Components.GmailNotification> = ({ size = 'medium', online = 'online', number = '5' }) => {
  return html`<gmail-notification size=${size} online=${online} number=${number}></gmail-notification>`;
};

export const Default: Story<Components.GmailNotification> = Template.bind({});
Default.args = {
  size: 'medium',
};
