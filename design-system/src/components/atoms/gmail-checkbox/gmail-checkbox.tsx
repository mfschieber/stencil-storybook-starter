import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-checkbox',
  styleUrl: 'gmail-checkbox.scss',
  shadow: true,
})
export class GmailCheckbox implements ComponentInterface {
  @Prop() identifier?: Identifier = 'checkbox';
  @State() isChecked = false;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' = 'medium';

  @Event({
    eventName: 'checkboxclicked',
    bubbles: true,
    composed: true,
  })
  checkboxclicked: EventEmitter<Identifier>;

  checkboxclickedHandler() {
    this.checkboxclicked.emit(this.identifier);
    this.isChecked = !this.isChecked;
  }

  render() {
    return (
      <Host>
        <input type="checkbox" id="cgv" onClick={() => this.checkboxclickedHandler()} class={`checkbox ${this.size}`}></input>
        <label htmlFor="cgv"></label>
      </Host>
    );
  }
}
