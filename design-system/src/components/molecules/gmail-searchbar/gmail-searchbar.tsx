import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-searchbar',
  styleUrl: 'gmail-searchbar.scss',
  shadow: true,
})
export class GmailSearchbar implements ComponentInterface {
  @State() srcIcon = '';
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';

  render() {
    return (
      <Host>
        <div class="searchbar">
          <gmail-logobutton class="logobutton" size="xsmall" type="search"></gmail-logobutton>
          <gmail-search class="search"></gmail-search>
        </div>
      </Host>
    );
  }
}
