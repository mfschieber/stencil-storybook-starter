import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'gmail-maildisplay',
  styleUrl: 'gmail-maildisplay.scss',
  shadow: true,
})
export class GmailMaildisplay implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() expediteur?: string;
  @Prop() mailTitle?: string;
  @Prop() mailContent?: string;
  @Prop() identifier?: Identifier = 'logobutton';
  @Prop() isRead?: boolean;

  @Prop({ reflect: true }) isSelected = false;

  @State() type?: 'normal' | 'bold' | 'italic';

  checkboxClickedHandler() {
    const today = new Date();
    this.isSelected = !this.isSelected;
  }

  read() {
    if (this.isRead == true) {
      return 'normal';
    } else {
      return 'bold';
    }
  }

  render() {
    return this.isSelected ? (
      <Host isSelected={this.isSelected}>
        <button class="buttonMailSelected">
          <gmail-checkbox size={this.size} onCheckboxclicked={() => this.checkboxClickedHandler()}></gmail-checkbox>
          <gmail-starbox size={this.size}></gmail-starbox>
          <gmail-title class="expediteur" content={this.expediteur} size={this.size} type={this.read()}></gmail-title>
          <div class="contenuMail">
            <gmail-title class="mailTitle" content={this.mailTitle} size={this.size} type={this.read()}></gmail-title>
            <gmail-title class="mailContent" content={this.mailContent} size={this.size} type={this.read()} couleur="gris"></gmail-title>
          </div>
          <gmail-button class="button1" size={this.size} identifier={this.identifier} type="archive" content=""></gmail-button>
          <gmail-button class="button2" size={this.size} identifier={this.identifier} type="delete" content=""></gmail-button>
          <gmail-button class="button3" size={this.size} identifier={this.identifier} type="markunread" content=""></gmail-button>
          <gmail-button class="button4" size={this.size} identifier={this.identifier} type="snooze" content=""></gmail-button>
          <gmail-button class="button5" size={this.size} identifier={this.identifier} type="calendar" content=""></gmail-button>
        </button>
      </Host>
    ) : (
      <Host isSelected={this.isSelected}>
        <button class="buttonMail">
          <gmail-checkbox size={this.size} onCheckboxclicked={() => this.checkboxClickedHandler()}></gmail-checkbox>
          <gmail-starbox size={this.size}></gmail-starbox>
          <gmail-title class="expediteur" content={this.expediteur} size={this.size} type={this.read()}></gmail-title>
          <div class="contenuMail">
            <gmail-title class="mailTitle" content={this.mailTitle} size={this.size} type={this.read()}></gmail-title>
            <gmail-title class="mailContent" content={this.mailContent} size={this.size} type={this.read()} couleur="gris"></gmail-title>
          </div>
          <gmail-button class="button1" size={this.size} identifier={this.identifier} type="archive" content=""></gmail-button>
          <gmail-button class="button2" size={this.size} identifier={this.identifier} type="delete" content=""></gmail-button>
          <gmail-button class="button3" size={this.size} identifier={this.identifier} type="markunread" content=""></gmail-button>
          <gmail-button class="button4" size={this.size} identifier={this.identifier} type="snooze" content=""></gmail-button>
          <gmail-button class="button5" size={this.size} identifier={this.identifier} type="calendar" content=""></gmail-button>
        </button>
      </Host>
    );
  }
}
