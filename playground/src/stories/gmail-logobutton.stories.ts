import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-logobutton',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailLogobutton> = ({ identifier = 'button', size = 'medium', type = 'reload' }) => {
  return html`<gmail-logobutton size=${size} identifier=${identifier} type=${type}></gmail-logobutton>`;
};

export const Default: Story<Components.GmailLogobutton> = Template.bind({});
Default.args = {
  size: 'medium',
};

export const Reload: Story<Components.GmailLogobutton> = Template.bind({});
Reload.args = {
  size: 'medium',
  type: 'reload',
};

export const Search: Story<Components.GmailLogobutton> = Template.bind({});
Search.args = {
  size: 'medium',
  type: 'search',
};

export const LeftArrow: Story<Components.GmailLogobutton> = Template.bind({});
LeftArrow.args = {
  size: 'medium',
  type: 'leftarrow',
};

export const RightArrow: Story<Components.GmailLogobutton> = Template.bind({});
RightArrow.args = {
  size: 'medium',
  type: 'rightarrow',
};

export const Gearwheel: Story<Components.GmailLogobutton> = Template.bind({});
Gearwheel.args = {
  size: 'medium',
  type: 'gearwheel',
};

export const Menu: Story<Components.GmailLogobutton> = Template.bind({});
Menu.args = {
  size: 'medium',
  type: 'menu',
};
