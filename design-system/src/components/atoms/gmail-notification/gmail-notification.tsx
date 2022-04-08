import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-notification',
  styleUrl: 'gmail-notification.scss',
  shadow: true,
})
export class GmailNotification implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() online?: 'online' | 'offline' | 'busy';
  @Prop() number?;
  @State() sizeNotif?: 'small' | 'xsmall' | 'xxsmall' | 'xxxsmall';

  tailleTexte(size) {
    if (size == 'large') {
      return 'small';
    } else if (size == 'medium') {
      return 'xsmall';
    } else if (size == 'small') {
      return 'xxsmall';
    } else if (size == 'xsmall') {
      return 'xxxsmall';
    }
  }

  render() {
    return (
      <Host>
        <div class={`notification ${this.size}  ${this.online} `}>
          <gmail-title content={this.number} size={this.tailleTexte(this.size)} type="normal"></gmail-title>
        </div>
      </Host>
    );
  }
}
