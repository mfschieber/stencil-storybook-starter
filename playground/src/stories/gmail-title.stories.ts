import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-title',
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['normal', 'bold', 'italic'],
      control: { type: 'inline-radio' },
    },
    couleur: {
      options: ['noir', 'gris'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailTitle> = ({ content = '', size = 'medium', type = 'normal', couleur = 'noir' }) => {
  return html`<gmail-title content=${content} size=${size} type=${type} couleur=${couleur}></gmail-title>`;
};

export const Default: Story<Components.GmailTitle> = Template.bind({});
Default.args = {
  content: 'Inbox',
  size: 'medium',
};
