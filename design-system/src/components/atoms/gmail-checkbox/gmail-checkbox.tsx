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
        <label class="control control--checkbox">
          <input type="checkbox" checked={this.isChecked} onClick={() => this.checkboxclickedHandler()} />
          <div class="control__indicator"></div>
        </label>
      </Host>
    );
  }
}
