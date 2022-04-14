import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'MOLECULES/gmail-maildisplay',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    expediteur: {},
    mailTitle: {},
    isRead: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<Components.GmailMaildisplay> = ({
  size = 'xsmall',
  expediteur = 'YOOBIC',
  mailTitle = '[Confluence] Product Knowledge Base > Notifications - Work ',
  mailContent = '- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work ******* ******* a modifié cette page',
  isRead,
}) => {
  return html`<gmail-maildisplay size=${size} expediteur=${expediteur} .mailTitle=${mailTitle} .mailContent=${mailContent} .isRead=${isRead}></gmail-maildisplay>`;
};

export const Default: Story<Components.GmailMaildisplay> = Template.bind({});
Default.args = {
  size: 'xsmall',
  expediteur: 'YOOBIC',
  mailTitle: '[Confluence] Product Knowledge Base > Notifications - Work ',
  mailContent: '- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work ',
};
