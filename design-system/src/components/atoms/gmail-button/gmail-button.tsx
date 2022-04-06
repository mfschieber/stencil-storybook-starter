import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-button',
  styleUrl: 'gmail-button.scss',
  shadow: true,
})
export class GmailButton implements ComponentInterface {
  @State() isSelected = false;
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'reload';

  select() {
    this.isSelected = !this.isSelected;
  }

  icone(type) {
    if (type == 'reload') {
      this.srcIcon = 'https://cdn.iconscout.com/icon/free/png-256/reload-1439726-1214298.png';
    }
    return this.srcIcon;
  }

  render() {
    return (
      <Host>
        <button onClick={this.select} class="button ${this.isSelected}">
          <img src={this.icone(this.type)} class={`img ${this.size} ${this.isSelected}`} />
        </button>
      </Host>
    );
  }
}
