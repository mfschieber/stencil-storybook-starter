import { Component, ComponentInterface, h, Host, Method, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-details',
  styleUrl: 'gmail-details.scss',
  shadow: true,
})
export class GmailDetails implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() content!: string;
  @Prop() summary!: string;
  @Prop() type?: 'normal' | 'bold' | 'italic' = 'normal';
  @Prop() identifier?: Identifier = 'button';

  @State() isOpen = false;
  @State() icone = 'https://www.gstatic.com/images/icons/material/system/1x/arrow_right_black_20dp.png';

  detailsClickedHandler() {
    this.toggle();
    if (this.icone == 'https://www.gstatic.com/images/icons/material/system/1x/arrow_right_black_20dp.png') {
      this.icone = 'https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_black_20dp.png';
    } else {
      this.icone = 'https://www.gstatic.com/images/icons/material/system/1x/arrow_right_black_20dp.png';
    }
  }

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <details onClick={() => this.detailsClickedHandler()}>
          <summary>
            <img src={this.icone} class={`img ${this.size} ${this.type}`} />
            <gmail-title content={this.summary} size={this.size} type={this.type}></gmail-title>
          </summary>
          <div class="dropdownMenu">
            <gmail-button size={this.size} identifier="dropdownMenuItem" type="inbox" content="Inbox" font={this.type}></gmail-button>
            <gmail-button size={this.size} identifier="dropdownMenuItem" type="star" content="Starred" font={this.type}></gmail-button>
            <gmail-button size={this.size} identifier="dropdownMenuItem" type="snooze" content="Snoozed" font={this.type}></gmail-button>
            <gmail-button size={this.size} identifier="dropdownMenuItem" type="send" content="Sent" font={this.type}></gmail-button>
            <gmail-button size={this.size} identifier="dropdownMenuItem" type="file" content="Drafts" font={this.type}></gmail-button>
          </div>
        </details>
      </Host>
    );
  }
}
