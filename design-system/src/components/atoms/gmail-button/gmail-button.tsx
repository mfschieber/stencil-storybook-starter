import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-button',
  styleUrl: 'gmail-button.scss',
  shadow: true,
})
export class GmailButton implements ComponentInterface {
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu';

  icone(type) {
    if (type == 'reload') {
      this.srcIcon = 'https://cdn.iconscout.com/icon/free/png-256/reload-1439726-1214298.png';
    } else if (type == 'search') {
      this.srcIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png';
    } else if (type == 'leftarrow') {
      this.srcIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA9hAodrUohOdDDoXCVqFY7pqJSqVdnibzA&usqp=CAU';
    } else if (type == 'rightarrow') {
      this.srcIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSITl9k9wsGmpZai3C9hbXNfj_bwtEiosrXg&usqp=CAU';
    } else if (type == 'gearwheel') {
      this.srcIcon = 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png';
    } else if (type == 'menu') {
      this.srcIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png';
    }
    return this.srcIcon;
  }

  render() {
    return (
      <Host>
        <button class="button ${this.isSelected}">
          <img src={this.icone(this.type)} class={`img ${this.size}`} />
        </button>
      </Host>
    );
  }
}
