import { Component, ComponentInterface, h, Host, Method, Prop, State } from '@stencil/core';

import { GmailTitle } from '../../atoms/gmail-title/gmail-title';
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
  @Prop() items?: GmailTitle[]; //appeler item.title item.content

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
        <gmail-button
          class="dropdownbutton"
          size={this.size}
          content=""
          type="dropdown"
          identifier="dropdownMenuButton"
          onLogobuttonClicked={(ev) => this.logobuttonClickedHandler(ev)}
        ></gmail-button>
        <div class={`dropdown ${this.isOpen ? '' : 'hidden'}`}>
          {this.items?.map((item) => (
            <gmail-button size={this.size} identifier="dropdownMenuItem" content={item.content} textColor={item.textColor} font={this.type}></gmail-button>
          ))}
        </div>
      </Host>
    );
  }
}
