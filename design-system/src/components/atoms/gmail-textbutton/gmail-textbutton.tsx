import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-textbutton',
  styleUrl: 'gmail-textbutton.scss',
})
export class GmailTextbutton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'textbutton';
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'normal' | 'bold' | 'italic';
  @Prop() content?: string;
  @Prop() isDisabled?: false;

  @Event({
    eventName: 'textbuttonClicked',
    bubbles: true,
    composed: true,
  })
  textbuttonClicked: EventEmitter<Identifier>;

  textbuttonClickedHandler() {
    this.textbuttonClicked.emit(this.identifier);
  }

  render() {
    return (
      <Host>
        <button class="textbutton" onClick={this.textbuttonClickedHandler.bind(this)} disabled={this.isDisabled}>
          <p class={`p ${this.size} ${this.type}`}>{this.content}</p>
        </button>
      </Host>
    );
  }
}
