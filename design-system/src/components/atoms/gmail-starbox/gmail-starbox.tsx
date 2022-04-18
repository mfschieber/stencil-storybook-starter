import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-starbox',
  styleUrl: 'gmail-starbox.scss',
  shadow: true,
})
export class GmailStarbox implements ComponentInterface {
  @Prop() identifier?: Identifier = 'checkbox';
  @State() isChecked = false;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' = 'medium';

  @Event({
    eventName: 'starboxclicked',
    bubbles: true,
    composed: true,
  })
  starboxclicked: EventEmitter<Identifier>;

  starboxclickedHandler() {
    this.starboxclicked.emit(this.identifier);
    this.isChecked = !this.isChecked;
  }

  render() {
    return (
      <Host>
        <input type="checkbox" name="checkboxRating" id="checkbox1" class="checkbox checkbox-star" onClick={() => this.starboxclickedHandler()} />
        <label></label>
      </Host>
    );
  }
}
