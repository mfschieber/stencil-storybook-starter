import { Component, ComponentInterface, h, Host, Method, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-dropdownbutton',
  styleUrl: 'gmail-dropdownbutton.scss',
  shadow: true,
})
export class GmailDropdownbutton implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'normal' | 'bold' | 'italic' = 'normal';
  @Prop() identifier?: Identifier = 'button';
  @Prop() items?: string[];

  @State() isOpen = false;

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
        <div class={`backdrop ${this.isOpen ? '' : 'hidden'}`} onClick={() => this.close()} />
        <gmail-logobutton
          class="dropdownbutton"
          size={this.size}
          type="dropdown"
          identifier="dropdownMenuButton"
          onLogobuttonClicked={(ev) => this.logobuttonClickedHandler(ev)}
        ></gmail-logobutton>
        <div class={`dropdown ${this.isOpen ? '' : 'hidden'}`}>
          {this.items.map((item) => (
            <gmail-textbutton size={this.size} content={item} type={this.type}></gmail-textbutton>
          ))}
        </div>
      </Host>
    );
  }
}
