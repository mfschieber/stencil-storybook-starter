import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-logobutton',
  styleUrl: 'gmail-logobutton.scss',
  shadow: true,
})
export class GmailLogobutton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'logobutton';
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() type?: 'reload' | 'search' | 'leftarrow' | 'rightarrow' | 'gearwheel' | 'menu' | 'dropdown' | 'archive' | 'delete' | 'markunread' | 'snooze';

  @Event({
    eventName: 'logobuttonClicked',
    bubbles: true,
    composed: true,
  })
  logobuttonClicked: EventEmitter<Identifier>;

  logobuttonClickedHandler() {
    this.logobuttonClicked.emit(this.identifier);
  }

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
    } else if (type == 'dropdown') {
      this.srcIcon = 'https://seekicon.com/free-icon-download/three-dots-vertical_1.png';
    } else if (type == 'archive') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/archive_black_20dp.png';
    } else if (type == 'delete') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png';
    } else if (type == 'markunread') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/markunread_black_20dp.png';
    } else if (type == 'snooze') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/watch_later_black_20dp.png';
    }
    return this.srcIcon;
  }

  render() {
    return (
      <Host>
        <button class="logobutton" onClick={this.logobuttonClickedHandler.bind(this)}>
          <img src={this.icone(this.type)} class={`img ${this.size}`} />
        </button>
      </Host>
    );
  }
}
