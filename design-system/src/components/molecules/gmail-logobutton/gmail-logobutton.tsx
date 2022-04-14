import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-logobutton',
  styleUrl: 'gmail-logobutton.scss',
  shadow: true,
})
export class GmailLogobutton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'logobutton';
  @Prop() content?: string;
  @Prop() font?: 'normal' | 'bold' | 'italic';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall';
  @Prop() type?:
    | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'notification';

  render() {
    return (
      <Host>
        <gmail-button size={this.size} identifier="logobutton" type={this.type}></gmail-button>
        <gmail-button size={this.size} identifier="logobutton" content={this.content} font={this.font}></gmail-button>
      </Host>
    );
  }
}
