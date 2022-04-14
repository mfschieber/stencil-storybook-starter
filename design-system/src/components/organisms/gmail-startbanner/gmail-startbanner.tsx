import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-startbanner',
  styleUrl: 'gmail-startbanner.scss',
  shadow: true,
})
export class GmailStartbanner implements ComponentInterface {
  @Prop() identifier?: Identifier = 'check';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall';

  render() {
    return (
      <Host>
        <gmail-title content="Get started with Gmail" size="small" type="bold"></gmail-title>
        <gmail-button size="small" identifier={this.identifier} type="check"></gmail-button>
        <gmail-button size="small" identifier={this.identifier} content="Customize your inbox" font="normal"></gmail-button>
        <gmail-button size="small" identifier={this.identifier} type="pen"></gmail-button>
        <gmail-button size="small" identifier={this.identifier} content="Set a signature" font="normal"></gmail-button>
        <gmail-button size="small" identifier={this.identifier} type="notification"></gmail-button>
        <gmail-button size="small" identifier={this.identifier} content="Enable desktop notifications" font="normal"></gmail-button>
      </Host>
    );
  }
}
