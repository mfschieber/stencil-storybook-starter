import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'PROJET/atoms/gmail-button',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.GmailButton> = ({ size = 'medium', type = 'reload' }) => {
  return html`<gmail-button size=${size} type=${type}></gmail-button>`;
};

export const Default: Story<Components.GmailButton> = Template.bind({});
Default.args = {
  size: 'medium',
};

export const Reload: Story<Components.GmailButton> = Template.bind({});
Reload.args = {
  size: 'medium',
  type: 'reload',
};

export const Search: Story<Components.GmailButton> = Template.bind({});
Search.args = {
  size: 'medium',
  type: 'search',
};

export const LeftArrow: Story<Components.GmailButton> = Template.bind({});
LeftArrow.args = {
  size: 'medium',
  type: 'leftarrow',
};

export const RightArrow: Story<Components.GmailButton> = Template.bind({});
RightArrow.args = {
  size: 'medium',
  type: 'rightarrow',
};

export const Gearwheel: Story<Components.GmailButton> = Template.bind({});
Gearwheel.args = {
  size: 'medium',
  type: 'gearwheel',
};

export const Menu: Story<Components.GmailButton> = Template.bind({});
Menu.args = {
  size: 'medium',
  type: 'menu',
};
