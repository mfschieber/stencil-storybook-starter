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
  @Prop() type?: 'normal' | 'bold' | 'italic';
  @Prop() identifier?: Identifier = 'logobutton';

  @State() isSelected = false;

  checkboxClickedHandler() {
    this.isSelected = !this.isSelected;
  }

  render() {
    return this.isSelected ? (
      <Host>
        <button class="buttonMailSelected">
          <gmail-checkbox size={this.size} onCheckboxclicked={() => this.checkboxClickedHandler()}></gmail-checkbox>
          <gmail-starbox size={this.size}></gmail-starbox>
          <gmail-title class="expediteur" content={this.expediteur} size={this.size} type={this.type}></gmail-title>
          <div class="contenuMail">
            <gmail-title class="mailTitle" content={this.mailTitle} size={this.size} type={this.type}></gmail-title>
            <gmail-title class="mailContent" content={this.mailContent} size={this.size} type="normal" couleur="gris"></gmail-title>
          </div>
          <gmail-logobutton class="button1" size={this.size} identifier={this.identifier} type="archive"></gmail-logobutton>
          <gmail-logobutton class="button2" size={this.size} identifier={this.identifier} type="delete"></gmail-logobutton>
          <gmail-logobutton class="button3" size={this.size} identifier={this.identifier} type="markunread"></gmail-logobutton>
          <gmail-logobutton class="button4" size={this.size} identifier={this.identifier} type="snooze"></gmail-logobutton>
        </button>
      </Host>
    ) : (
      <Host>
        <button class="buttonMail">
          <gmail-checkbox size={this.size} onCheckboxclicked={() => this.checkboxClickedHandler()}></gmail-checkbox>
          <gmail-starbox size={this.size}></gmail-starbox>
          <gmail-title class="expediteur" content={this.expediteur} size={this.size} type={this.type}></gmail-title>
          <div class="contenuMail">
            <gmail-title class="mailTitle" content={this.mailTitle} size={this.size} type={this.type}></gmail-title>
            <gmail-title class="mailContent" content={this.mailContent} size={this.size} type="normal" couleur="gris"></gmail-title>
          </div>
          <gmail-logobutton class="button1" size={this.size} identifier={this.identifier} type="archive"></gmail-logobutton>
          <gmail-logobutton class="button2" size={this.size} identifier={this.identifier} type="delete"></gmail-logobutton>
          <gmail-logobutton class="button3" size={this.size} identifier={this.identifier} type="markunread"></gmail-logobutton>
          <gmail-logobutton class="button4" size={this.size} identifier={this.identifier} type="snooze"></gmail-logobutton>
        </button>
      </Host>
    );
  }
}
