import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'MOLECULES/gmail-details',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailDetails> = ({ size, content, summary, type, identifier }) => {
  return html`<gmail-details size=${size} content=${content} summary=${summary} type=${type} identifier=${identifier}></gmail-details>`;
};

export const Default: Story<Components.GmailDetails> = Template.bind({});
Default.args = {
  summary: 'Mail',
  content: 'Test',
};
