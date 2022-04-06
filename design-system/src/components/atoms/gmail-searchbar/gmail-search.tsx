import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'gmail-search',
  styleUrl: 'gmail-search.scss',
  shadow: true,
})
export class GmailSearch implements ComponentInterface {
  render() {
    return (
      <Host>
        <input class="search" type="text" placeholder="Search all conversations"></input>
      </Host>
    );
  }
}
