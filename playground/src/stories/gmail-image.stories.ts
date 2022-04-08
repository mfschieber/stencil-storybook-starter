import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'ATOMS/gmail-image',
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
      options: ['online', 'offline', 'busy'],
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<Components.GmailImage> = ({ src = undefined, alt = 'Text alt', size = 'medium', shape = 'round', online = 'online' }) => {
  return html`<gmail-image alt=${alt} src=${src} size=${size} shape=${shape} online=${online}>
    <div slot="enbasadroite"><gmail-notification size=${size} online=${'offline'} number="5"></gmail-notification></div>
  </gmail-image>`;
};

export const Default: Story<Components.GmailImage> = Template.bind({});
Default.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: 'online',
};

export const Online: Story<Components.GmailImage> = Template.bind({});
Online.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: 'online',
};

export const Offline: Story<Components.GmailImage> = Template.bind({});
Offline.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: 'offline',
};

export const Busy: Story<Components.GmailImage> = Template.bind({});
Busy.args = {
  src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  alt: 'Text alt',
  size: 'medium',
  shape: 'round',
  online: 'busy',
};
