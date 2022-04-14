import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'MOLECULES/gmail-logobutton',
  argTypes: {},
} as Meta;

const Template: Story<Components.GmailLogobutton> = ({ identifier, content, font, size, type }) => {
  return html`<gmail-logobutton identifier=${identifier} content=${content} font=${font} size=${size} type=${type}></gmail-logobutton>`;
};

export const Default: Story<Components.GmailLogobutton> = Template.bind({});
Default.args = {
  content: 'Customize your inbox',
  type: 'check',
};
