import { Component, ComponentInterface, h, Host, Listen, Method, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-dropdownbutton',
  styleUrl: 'gmail-dropdownbutton.scss',
  shadow: true,
})
export class GmailDropdownbutton implements ComponentInterface {
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() identifier?: Identifier = 'button';
  @Prop() items?: [string, string, string, string, string, string];

  @State() isOpen = false;

  @Listen('logobuttonClicked')
  logobuttonClickedHandler(event: CustomEvent<Identifier>) {
    if (event.detail === 'dropdownMenuButton') {
      this.toggle();
    } else {
      this.close();
    }
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class={`backdrop ${this.isOpen ? '' : 'hidden'}`} onClick={this.close.bind(this)} />
        <gmail-logobutton class="dropdownbutton" size={this.size} type="dropdown" identifier="dropdownMenuButton"></gmail-logobutton>
        <div class={`dropdown ${this.isOpen ? '' : 'hidden'}`}>
          <slot name="menu" />
        </div>
      </Host>
    );
  }
}
