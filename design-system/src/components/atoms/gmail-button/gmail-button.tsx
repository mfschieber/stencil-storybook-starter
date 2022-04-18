import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-button',
  styleUrl: 'gmail-button.scss',
  shadow: true,
})
export class GmailButton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'logobutton';
  @Prop() color?: string;
  @Prop() textColor?: string;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall';
  @Prop() type?:
    | 'reload'
    | 'search'
    | 'leftarrow'
    | 'rightarrow'
    | 'gearwheel'
    | 'menu'
    | 'dropdown'
    | 'archive'
    | 'delete'
    | 'markunread'
    | 'snooze'
    | 'calendar'
    | 'check'
    | 'pen'
    | 'file'
    | 'send'
    | 'inbox'
    | 'star'
    | 'notification';
  @Prop() content?: string;
  @Prop() font?: 'normal' | 'bold' | 'italic';
  @Prop() isDisabled?: boolean;

  @State() typeButton?: 'textOnly' | 'logoOnly' | 'textLogo';
  @State() srcIcon = '';

  @Event({
    eventName: 'logobuttonClicked',
    bubbles: true,
    composed: true,
  })
  buttonClicked: EventEmitter<Identifier>;

  buttonClickedHandler() {
    this.buttonClicked.emit(this.identifier);
  }

  tailleIcone(size) {
    if (size == 'large') {
      return 'medium';
    } else if (size == 'medium') {
      return 'small';
    } else if (size == 'small') {
      return 'xsmall';
    } else if (size == 'xsmall') {
      return 'xxsmall';
    }
  }

  icone(type) {
    if (type == 'reload') {
      this.srcIcon = 'https://cdn.iconscout.com/icon/free/png-256/reload-1439726-1214298.png';
    } else if (type == 'search') {
      this.srcIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png';
    } else if (type == 'leftarrow') {
      this.srcIcon = 'https://icons-for-free.com/download-icon-arrow+left+chevron+chevronleft+left+left+icon+icon-1320185731545502691_512.png';
    } else if (type == 'rightarrow') {
      this.srcIcon = 'https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png';
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
    } else if (type == 'calendar') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/2x/today_black_20dp.png';
    } else if (type == 'check') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/check_white_24dp.png';
    } else if (type == 'pen') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system/1x/ink_pen_gm_green600_24dp.png';
    } else if (type == 'notification') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system/1x/notifications_gm_red600_24dp.png';
    } else if (type == 'inbox') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png';
    } else if (type == 'star') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png';
    } else if (type == 'send') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/send_black_20dp.png';
    } else if (type == 'file') {
      this.srcIcon = 'https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png';
    }
    return this.srcIcon;
  }

  buttonType(type) {
    if (this.content == '') {
      //pas de texte
      this.typeButton = 'logoOnly';
    } else {
      //il y a du texte
      if (this.icone(type) != '') {
        //il y a une image
        this.typeButton = 'textLogo';
      } else {
        this.typeButton = 'textOnly';
      }
    }
    return this.typeButton;
  }

  render() {
    return (
      <Host>
        <button
          style={{ background: this.color }}
          class={`${this.buttonType(this.type)} ${this.isDisabled}`}
          onClick={this.buttonClickedHandler.bind(this)}
          disabled={this.isDisabled}
        >
          <img src={this.icone(this.type)} class={`img ${this.tailleIcone(this.size)} ${this.type} ${this.buttonType(this.type)}`} />
          <p style={{ color: this.textColor }} class={`p ${this.size} ${this.type} ${this.font} ${this.buttonType(this.type)}`}>
            {this.content}
          </p>
        </button>
      </Host>
    );
  }
}
