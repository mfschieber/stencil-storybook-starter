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
        {this.isChecked === true ? (
          <button class="fullstar" onClick={() => this.starboxclickedHandler()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%C3%89toile_d%27or.svg/1024px-%C3%89toile_d%27or.svg.png" class={`img ${this.size}`} />
          </button>
        ) : (
          <button class="emptystar" onClick={() => this.starboxclickedHandler()}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/220px-Five-pointed_star.svg.png" class={`img ${this.size}`} />
          </button>
        )}
      </Host>
    );
  }
}
