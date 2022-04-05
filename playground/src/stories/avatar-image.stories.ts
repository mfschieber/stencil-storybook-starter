import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'PROJET/atoms/avatar-image',
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    shape: {
      options: ['round', 'smooth', 'squared'],
      control: { type: 'inline-radio' },
    },
    online: {
      options: ['yes', 'no'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.AvatarImage> = ({ src = undefined, alt = 'Text alt', size = 'medium', shape = 'round', online = false }) => {
  return html`<avatar-image alt=${alt} src=${src} size=${size} shape=${shape} online=${online}></avatar-image>`;
};

export const Default: Story<Components.AvatarImage> = Template.bind({});
Default.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: false,
};

export const Online: Story<Components.AvatarImage> = Template.bind({});
Online.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: true,
};
