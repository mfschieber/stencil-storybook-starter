import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

// interface Email {
// <title:string></title:string>
// <content:string></content:string>
// }

@Component({
  tag: 'gmail-maillisting',
  styleUrl: 'gmail-maillisting.scss',
  shadow: true,
})
export class GmailMaillisting implements ComponentInterface {
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'small'; //type
  @Prop() identifier?: Identifier = 'logobutton';

  item1 = { content: 'Mark all as read' };
  item2 = { content: 'Select messages to see more actions', textColor: '#5f6368' };
  render() {
    return (
      <Host>
        <div class="buttonsbar">
          <gmail-checkbox size={this.size}></gmail-checkbox>
          <gmail-button size={this.size} identifier={this.identifier} type="reload"></gmail-button>
          <gmail-dropdownbutton size={this.size} type="normal" items={[this.item1, this.item2]}></gmail-dropdownbutton>
        </div>
        <gmail-startbanner size={this.size}></gmail-startbanner>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={false}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
        <gmail-maildisplay
          size={this.size}
          expediteur="YOOBIC"
          mailTitle="[Confluence] Product Knowledge Base > Notifications - Work "
          mailContent="- Il y a 1 nouvelle modification pour cette page icon Notifications  - Work "
          isRead={true}
        ></gmail-maildisplay>
      </Host>
    );
  }
}
